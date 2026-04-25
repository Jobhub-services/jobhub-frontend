import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import store from '@/config/store/store';
import { authDispatchers } from '@/modules/actions/auth.actions';

export class HttpClient {
	private _client: AxiosInstance;

	constructor() {
		const config = {
			baseURL: STAAK_ENV.API_URL,
			withCredentials: true,
		};

		this._client = axios.create(config);
		this._initAuthInterceptor();
		this._initErrorInterceptor();
		this._initResponseDurationInterceptor();
	}

	get clientInstance() {
		return this._client;
	}

	getUri(config?: AxiosRequestConfig): string {
		return this._client.getUri(config);
	}

	request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this._client.request(config);
	}

	head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.head(url, config);
	}

	options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.options(url, config);
	}

	get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.get(url, config);
	}

	delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.delete(url, config);
	}

	post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.post(url, data, config);
	}

	put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.put(url, data, config);
	}

	patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.patch(url, data, config);
	}

	setAuthToken() {
		this._initAuthInterceptor();
	}

	private _initAuthInterceptor() {
		this._client.interceptors.request.use((config: any) => {
			const { auth: { accessToken } } = store.getState();
			if (accessToken) {
				config.headers = {
					...config.headers,
					Authorization: 'Bearer ' + accessToken,
				};
			}
			return config;
		});
	}

	/**
	 * Returns response duration in duration property of response.
	 */
	private _initResponseDurationInterceptor() {
		const requestStartTimeInterceptor = (config: any) => {
			config.metadata = {
				startTime: new Date(),
			};
			return config;
		};
		this._client.interceptors.request.use(requestStartTimeInterceptor);

		const responseEndTimeInterceptor = (response: any) => {
			/** Calculate response time */
			response.duration = new Date().getTime() - response.config.metadata.startTime.getTime();
			return response;
		};
		this._client.interceptors.response.use(responseEndTimeInterceptor);
	}

	private _initErrorInterceptor() {
		const responseInterceptor = (res: AxiosResponse) => {
			return res;
		};

		const errorInterceptor = async (error: any) => {
			const response = error.response;
			if (response) {
				if (response.status === 401) {
					authDispatchers.setAuthToken(null);
					window.location.replace('/login');
				} else if (response.status === 500) {
					const message = response.data?.message || 'Something went wrong. Please try again.';
					authDispatchers.setApiError(response.status, message);
				}
			}
			return Promise.reject(error);
		};

		this._client.interceptors.response.use(responseInterceptor, errorInterceptor);
	}
}

export const httpClient = new HttpClient();
