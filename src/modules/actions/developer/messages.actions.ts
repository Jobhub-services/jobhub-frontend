import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/developer/messages.store';
import { TMessage, TLoading } from '@/types/developer/messages.type';
import dispatchToStore from '@/utils/store';

export const messageDispatcher = {
	setIsLoading(loading: boolean, attr: TLoading = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setMessages(data: any) {
		dispatchToStore(storeActions.setMessages(data));
	},
	addMessage(msg: string, type: TMessage) {
		dispatchToStore(storeActions.setAddMessage({ msg, type }));
	},
};

export const messageActions = {
	async getMessages(user?: string) {
		messageDispatcher.setIsLoading(true);
		try {
			const config = {
				params: {
					userId: user,
				},
			};
			const response = await httpClient.get(`${'JOBS_SERVICE'}/developer`, config);
			const responseData = response.data;
			if (responseData) {
				messageDispatcher.setMessages(responseData);
			}
		} catch (e: any) {
		} finally {
			messageDispatcher.setIsLoading(false);
		}
	},
};
