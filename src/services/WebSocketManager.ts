//import { store } from '@/store';
//import { AppState } from '@/models/store/app.interface';
import { BufferEncoders, RSocketClient, toBuffer } from 'rsocket-core';
import RSocketWebsocketClient from 'rsocket-websocket-client';
import { Payload, ReactiveSocket, Responder } from 'rsocket-types';
import { Flowable, Single } from 'rsocket-flowable';
//import { actions as AuthActions } from '@/store/actions/auth';
//import { mutationsWrapper as AppMutations, NAMESPACE as APP_NAMESPACE } from '@/store/actions/app';
export function delay(time: any) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

export enum WEBSOCKET_OPERATIONS {
	SUBSCRIBE_CLONED_PROJECT = 'SUBSCRIBE_CLONED_PROJECT',
	SUBSCRIBE_STATE_JSON_READY = 'SUBSCRIBE_STATE_JSON_READY',
	SUBSCRIBE_ACCOUNT_SUBSCRIPTION_CHANGE = 'SUBSCRIBE_ACCOUNT_SUBSCRIPTION_CHANGE',
	SUBSCRIBE_PROJECT_USERS = 'SUBSCRIBE_PROJECT_USERS',
	SUBSCRIBE_PROJECT_COMMENTS = 'SUBSCRIBE_PROJECT_COMMENTS',
	SUBSCRIBE_VIDEO_INFERENCE_STATUS = 'SUBSCRIBE_VIDEO_INFERENCE_STATUS',
	SUBSCRIBE_SHARED_PROJECTS = 'SUBSCRIBE_SHARED_PROJECTS',
}

export enum ConnectionStatus {
	NOT_CONNECTED = 'NOT_CONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED',
	CLOSED = 'CLOSED',
	ERROR = 'ERROR',
}

export class SymmetricResponder implements Responder<string, string> {
	logRequest(type: string, payload: Payload<string, string>) {
		console.log(
			`Server got ${type} with payload: data: ${payload.data || 'null'},
      metadata: ${payload.metadata || 'null'}`
		);
	}
	make(data: any): Payload<string, string> {
		return {
			data,
			metadata: '',
		};
	}
	fireAndForget(payload: any): void {
		this.logRequest('fnf', payload);
	}

	requestResponse(payload: any): Single<Payload<string, string>> {
		this.logRequest('requestResponse', payload);
		return Single.of(this.make(toBuffer(JSON.stringify('data'))));
	}

	requestStream(payload: any): Flowable<Payload<string, string>> {
		this.logRequest('requestStream', payload);
		return Flowable.just(this.make(toBuffer(JSON.stringify('hello'))), this.make(toBuffer(JSON.stringify('world'))));
	}

	requestChannel(payloads: Flowable<Payload<string, string>>): Flowable<Payload<string, string>> {
		this.logRequest('requestChannel', { data: '' });
		return Flowable.error(new Error());
	}

	metadataPush(payload: any): Single<void> {
		this.logRequest('metadataPush', payload);
		return Single.error(new Error());
	}
}
export class RSocketCancelToken {
	private _isCancelled = false;
	private _rsocketCancelSrcArray: Function[] = [];

	get isCancelled() {
		return this._isCancelled;
	}

	source(rsocketCancelSrc: Function) {
		this._rsocketCancelSrcArray.push(rsocketCancelSrc);
	}

	cancel() {
		if (this._rsocketCancelSrcArray.length === 0) {
			console.error('Cannot cancel rsocket request without setting rsocket cancel source');
			return;
		}
		for (const cancelSrc of this._rsocketCancelSrcArray) {
			cancelSrc();
		}
		this._isCancelled = true;
	}
}

export class WebSocketManager {
	private _client: RSocketClient<any, any> | undefined;
	private _rsocket: ReactiveSocket<any, any> | undefined;

	private _recoveryCallbacks: Function[] = [];
	private _isPerformingRecovery = false;

	private _isReconnected = true;
	private _isConnecting = false;
	private _connectingCallbacks: Function[] = [];

	static lastInitSocketManager: WebSocketManager;

	constructor() {
		WebSocketManager.lastInitSocketManager = this;
		console.log('WebSocketManager', this);
	}

	get isConnected() {
		return this._rsocket != null;
	}

	get isConnecting() {
		return this._isConnecting;
	}

	async connect() {
		if (this.isConnected) return;
		return new Promise<void>((resolve, reject) => {
			if (this._isConnecting) {
				this._connectingCallbacks.push(resolve);
				return;
			}
			console.log('start connecting');
			this._isConnecting = true;
			this._client = this._createClient();
			this._client.connect().subscribe({
				onComplete: (rsocket) => {
					this._rsocket = rsocket;
					//AppMutations.setIsWebsocketConnected(true);
					this._rsocket.connectionStatus().subscribe({
						onNext: (_status) => {
							console.log(_status, 'connect onNext');
							if (_status.kind === ConnectionStatus.ERROR || _status.kind === ConnectionStatus.CLOSED) {
								if (this._rsocket) {
									//AppMutations.setIsWebsocketConnected(false);
									try {
										this._client?.close();
										this._rsocket.close();
									} catch (err) {
										console.warn(err, 'Encounter error closing reactive socket ');
									}
									if (this._rsocket) this._rsocket = undefined;
									this._isReconnected = false;
								}
								//const appState: AppState = store.state[APP_NAMESPACE];
								/// if tab isn't active so don't reconnect socket
								/*if (appState.isAppWindowActive) {
									console.log('Performing new connection attempt from connection status error');
									setTimeout(this.connect.bind(this), 3000);
								} else {
									console.log('App tab is hidden waiting for visibility change to reconnect');
								}*/
							} else if (_status.kind === ConnectionStatus.CONNECTED) {
								if (!this._isReconnected) this._performRecoveryCallbacks();
								//AppMutations.setIsWebsocketConnected(true);
							}
						},
						onError(error) {
							console.error(error, 'Encounter connection status error');
						},
						onSubscribe: (sub) => sub.request(Number.MAX_SAFE_INTEGER),
					});
					resolve();
					this._performConnectingCallbacks();
					this._isConnecting = false;
					console.log('end connecting');
				},
				onError: async (e) => {
					console.warn(e, 'Encounter subscribe connect error');
					if (this._rsocket) {
						//AppMutations.setIsWebsocketConnected(false);
						try {
							this._client?.close();
							this._rsocket.close();
						} catch (err) {
							console.warn(err, 'Encounter error closing reactive socket on subscribe stage');
						}
						this._rsocket = undefined;
						this._isReconnected = false;
					}
					this._isConnecting = false;
					// to resolve the ongoing connection, when the last attempt get connected successfully
					this._connectingCallbacks.push(resolve);
					setTimeout(this.connect.bind(this), 5000);
				},
			});
		});
	}

	async subscribeRequestStream<D, T>(
		operation: WEBSOCKET_OPERATIONS,
		data: D,
		onReceiveCallback: (response: T) => any,
		recoveryCallback: Function,
		cancelToken?: RSocketCancelToken,
		isRetry = false
	): Promise<void> {
		if (!this.isConnected) await this.connect();

		if (recoveryCallback && !this._recoveryCallbacks.includes(recoveryCallback)) {
			this._recoveryCallbacks.push(recoveryCallback);
		}

		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('user-token');
			const payload = {
				data: toBuffer(JSON.stringify(data)),
				metadata: toBuffer(
					JSON.stringify({
						token,
						operation,
					})
				),
			};

			//this._rsocket?.fireAndForget(payload);
			this._rsocket?.requestStream(payload).subscribe({
				onNext: async (response) => {
					const responseData = JSON.parse(response.data.toString());

					console.log(`message received`, responseData);

					if (responseData.status && responseData.status > 299) {
						const index = this._recoveryCallbacks.indexOf(recoveryCallback);
						if (index > -1) this._recoveryCallbacks.splice(index, 1);

						if (responseData.status === 401 && !isRetry) {
							//await AuthActions.refresh();
							resolve(this.subscribeRequestStream(operation, data, onReceiveCallback, recoveryCallback, cancelToken, true));
						} else {
							reject(new Error(responseData.message));
						}
					}

					onReceiveCallback(responseData);
				},
				onComplete: () => {
					console.log(`requestStream completed`);
					const index = this._recoveryCallbacks.indexOf(recoveryCallback);
					if (index > -1) this._recoveryCallbacks.splice(index, 1);
					resolve();
				},
				onError: (error) => {
					console.log('RECEIVE ERROR from request stream itself (not disconnect error).');
					console.warn(`subscribe Request Stream for ${operation}`, error);
					reject(error);
				},
				onSubscribe: ({ cancel, request }) => {
					if (cancelToken) cancelToken.source(cancel);
					// if we want to limit/signal acceptable number of requests, refactor for method to provide as param
					request(0x7fffffff);
				},
			});
		});
	}

	async subscribeRequestResponse<D, T>(operation: WEBSOCKET_OPERATIONS, data: D, recoveryCallback: Function, isRetry = false): Promise<T> {
		if (!this.isConnected) await this.connect();

		if (recoveryCallback && !this._recoveryCallbacks.includes(recoveryCallback)) {
			this._recoveryCallbacks.push(recoveryCallback);
		}

		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('accessToken');
			console.log(token);
			const payload = {
				data: toBuffer(JSON.stringify(data)),
				metadata: toBuffer(
					JSON.stringify({
						token,
						operation,
					})
				),
			};
			this._rsocket?.requestResponse(payload).subscribe({
				onComplete: async (response) => {
					const index = this._recoveryCallbacks.indexOf(recoveryCallback);
					if (index > -1) this._recoveryCallbacks.splice(index, 1);
					console.log(response);
					const responseData = JSON.parse(response.data.toString());
					console.log(responseData);
					/*if (responseData.status && responseData.status > 299) {
						if (responseData.status === 401 && !isRetry) {
							//await AuthActions.refresh();
							resolve(this.subscribeRequestResponse(operation, data, recoveryCallback, true));
						} else {
							reject(new Error(responseData.message));
						}
					}*/
					resolve(responseData);
				},
				onError: (error) => {
					console.log('RECEIVE ERROR from request itself (not disconnect error).');
					console.warn(`subscribe Request response for ${operation}`, error);
					reject(error);
				},
			});
		});
	}
	private _performConnectingCallbacks() {
		console.log('Perform connect callback for ', this._connectingCallbacks.length, ' connection');
		this._connectingCallbacks.forEach((resolve) => {
			resolve();
		});
		this._connectingCallbacks = [];
	}

	private _performRecoveryCallbacks() {
		if (this._isPerformingRecovery) return;
		this._isPerformingRecovery = true;
		this._isReconnected = true;
		console.log('Recovering callbacks for ', this._recoveryCallbacks.length, ' callback');
		const recoveryCallbacks = this._recoveryCallbacks.slice();
		while (recoveryCallbacks.length > 0) {
			const callback = recoveryCallbacks.pop();
			if (callback) {
				const index = this._recoveryCallbacks.indexOf(callback);
				if (index > -1) this._recoveryCallbacks.splice(index, 1);
				callback();
			}
		}
		this._isPerformingRecovery = false;
	}

	private _createClient() {
		return new RSocketClient({
			setup: {
				dataMimeType: 'application/octet-stream',
				keepAlive: 3000,
				lifetime: 10000,
				metadataMimeType: 'text/plain',
			},
			transport: new RSocketWebsocketClient(
				{
					url: `ws://localhost:3010/`,
					wsCreator: (url) => {
						return new WebSocket(url);
					},
				},
				BufferEncoders
			),
			responder: new SymmetricResponder(),
		});
	}
}
