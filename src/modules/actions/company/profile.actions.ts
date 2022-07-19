import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/profile.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { TProfileInfo } from '@/types/company/profile.type';

const { USERS_SERVICE } = API_PATHS;

export const profileDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setProfile(data: TProfileInfo) {
		dispatchToStore(storeActions.setProfile(data));
	},
	setAttribute(data: any, attr: string) {
		dispatchToStore(storeActions.setAttribute({ data, attr }));
	},
};
export const profileAction = {
	async setAttribute(data: any, attr: string) {
		profileDispatcher.setIsLoading(true);
		try {
			let dataToSend = data;
			if (attr !== 'avatar')
				dataToSend = {
					[attr]: data,
				};
			const response = await httpClient.put(`${USERS_SERVICE}/company/profile`, dataToSend);
			if (response.data) {
				const content = response.data?.content![attr];
				profileDispatcher.setAttribute(content, attr);
			}
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
	async getProfile(loading: boolean = true) {
		profileDispatcher.setIsLoading(loading);
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/company/profile`);
			if (response.data) {
				const content = response.data.content;
				profileDispatcher.setProfile(content);
			}
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
};
