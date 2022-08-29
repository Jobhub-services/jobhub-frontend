import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/developer/messages.store';
import { API_PATHS } from '@/constants/api.constants';
import dispatchToStore from '@/utils/store';
import { TBooleanAttr } from '@/types/developer/messages.type';
import { AxiosResponse } from 'axios';

const { WEBSOCKET_SERVICE } = API_PATHS;

export const messageDispatcher = {
	setBooleanAttr(value: boolean, attr: TBooleanAttr = TBooleanAttr.IS_LOADING) {
		dispatchToStore(storeActions.setBooleanAttr({ value, attr }));
	},
	setConversations(data: any) {
		dispatchToStore(storeActions.setConversations(data));
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
	setErrors(data: any) {
		dispatchToStore(storeActions.setErrors(data));
	},
};

export const messageActions = {
	async getConversations(user?: string) {
		messageDispatcher.setBooleanAttr(true);
		try {
			const response = await httpClient.get(`${WEBSOCKET_SERVICE}/talent/chat`);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.setConversations(responseData);
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
			}
		} catch (e: any) {
		} finally {
			messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_MESSAGE_SENDING);
		}
	},
};
