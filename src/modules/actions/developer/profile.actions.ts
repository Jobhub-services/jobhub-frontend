import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/developer/profile.store';
import { LanguagesType, ProfileInfo } from '@/types/developer/profile.type';
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
	setLanguages(data: LanguagesType[]) {
		dispatchToStore(storeActions.setLanguages(data));
	},
};

export const profileAction = {
	async getProfile(loading: boolean = true) {
		profileDispatcher.setIsLoading(loading);
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/developer/profile`);
			if (response.data) {
				const content = response.data.content;
				profileDispatcher.setProfile(content);
			}
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
	async setAttribute(data: any, attr: string) {
		profileDispatcher.setIsLoading(true);
		try {
			if (attr === 'work_experience') {
				data = data.map((elem: any) => {
					const t = { ...elem };
					if (elem.location && elem.location._id) t.location = elem.location._id;
					return t;
				});
			}
			let dataToSend = data;
			if (attr !== 'resume' && attr !== 'avatar')
				dataToSend = {
					[attr]: data,
				};
			const response = await httpClient.put(`${USERS_SERVICE}/developer/profile`, dataToSend);
			if (response.data) {
				const content = response.data?.content![attr];
				profileDispatcher.setAttribute(content, attr);
			}
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
};
