import { storeActions } from '@/modules/store/company/messages.store';
import dispatchToStore from '@/utils/store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AxiosResponse } from 'axios';
import { TBooleanAttr } from '@/types/company/messages.type';

const { WEBSOCKET_SERVICE } = API_PATHS;

export const messageDispatcher = {
	setBooleanAttr(value: boolean, attr: TBooleanAttr = TBooleanAttr.IS_LOADING) {
		dispatchToStore(storeActions.setBooleanAttr({ value, attr }));
	},
	setConversations(data: any, reset: boolean) {
		dispatchToStore(storeActions.setConversations({ data, reset }));
	},
	setMessages(data: any, userInfo: any) {
		dispatchToStore(storeActions.setMessages({ data, userInfo }));
	},
	addMessage(data: any) {
		dispatchToStore(storeActions.setAddMessage(data));
	},
	updateContacts(chatId: string, data: any) {
		dispatchToStore(storeActions.updateContacts({ chatId, data }));
	},
	setDeleteConversation(chatId: string) {
		dispatchToStore(storeActions.setDeleteConversation(chatId));
	},
	setErrors(data: any) {
		dispatchToStore(storeActions.setErrors(data));
	},
	createChat(data: any) {
		dispatchToStore(storeActions.createChat(data));
	},
};

export const messageActions = {
	async createConversation(data: any) {
		messageDispatcher.setBooleanAttr(true);
		try {
			const response = await httpClient.post(`${WEBSOCKET_SERVICE}/chat`, { members: data });
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.createChat({ created: true, _id: responseData.data });
			}
		} catch (e: any) {
		} finally {
			messageDispatcher.setBooleanAttr(false);
		}
	},
	async getConversations(params: Object, reset: boolean = false) {
		messageDispatcher.setBooleanAttr(true);
		try {
			const config = {
				params: params,
			};
			const response = await httpClient.get(`${WEBSOCKET_SERVICE}/chat`, config);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.setConversations(responseData, reset);
				messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_CONVERSATION_FETCHED);
			}
		} catch (e: any) {
		} finally {
			messageDispatcher.setBooleanAttr(false);
		}
	},
	async getMessages(chatId?: string, userInfo?: any) {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_MESSAGES_LOADING);
		try {
			const response = await httpClient.get(`${WEBSOCKET_SERVICE}/chat/message/${chatId}`);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.setMessages(responseData.content, userInfo);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { fetchStatus: true, content: data.message };
				messageDispatcher.setErrors(errors);
			}
		} finally {
			messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_MESSAGES_LOADING);
		}
	},
	async addMessage(data: { chatId?: string; sender?: string; content?: string }) {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_MESSAGE_SENDING);
		try {
			const tmp = { ...data, createdAt: new Date().toUTCString(), status: 'loading' };
			messageDispatcher.addMessage(tmp);
			const response = await httpClient.put(`${WEBSOCKET_SERVICE}/chat/message/`, tmp);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.updateContacts(tmp.chatId!, tmp);
				//messageDispatcher.addMessage({ ...tmp, status: 'sended' });
			}
		} catch (e: any) {
		} finally {
			messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_MESSAGE_SENDING);
		}
	},
	async deleteConversation(chatId: string) {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_CONVERSATION_DELETING);
		try {
			const response = await httpClient.put(`${WEBSOCKET_SERVICE}/chat/${chatId}`);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.setDeleteConversation(chatId);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				//else errors = transformErrors(data);
				//jobDispatcher.setJobErrors(errors);
			}
		} finally {
			messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_CONVERSATION_DELETING);
		}
	},
};
