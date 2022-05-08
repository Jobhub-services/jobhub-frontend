import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/developer/profile.store';
import { Languages, ProfileInfo } from '@/types/developer/profile.type';
import dispatchToStore from '@/utils/store';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;
export const profileDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setProfile(data: ProfileInfo) {
		dispatchToStore(storeActions.setProfile(data));
	},
	setAttribute(data: any, attr: string) {
		dispatchToStore(storeActions.setAttribute({ data, attr }));
	},
	setLanguages(data: Languages[]) {
		dispatchToStore(storeActions.setLanguages(data));
	},
};

export const profileAction = {
	async getProfile() {
		profileDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/profile/developer`);
			if (response.data) profileDispatcher.setProfile(response.data);
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
	async setAttribute(data: any, attr: string) {
		profileDispatcher.setIsLoading(true);
		try {
			//const response = await httpClient.put(`${USERS_SERVICE}/profile/developer`, data);
			//if (response.data)
			profileDispatcher.setAttribute(data, attr);
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
	async setLanguage(langs: Languages[], data: { idLanguage: string; idLevel: string }) {
		profileDispatcher.setIsLoading(true);
		try {
			//const response = await httpClient.put(`${USERS_SERVICE}/profile/developer`, data);
			//if (response.data)
			profileDispatcher.setLanguages(langs);
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
};
