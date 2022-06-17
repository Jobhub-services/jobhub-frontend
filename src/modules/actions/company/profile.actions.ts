import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/profile.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;

export const profileDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
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
			if (attr !== 'resume' && attr !== 'avatar')
				dataToSend = {
					[attr]: data,
				};
			console.log(dataToSend);
			const response = await httpClient.put(`${USERS_SERVICE}/company/profile`, dataToSend);

			if (response.data) {
				const content = response.data?.content![attr];
				console.log(response.data, content, dataToSend);
				profileDispatcher.setAttribute(content, attr);
			}
		} catch (e: any) {
		} finally {
			profileDispatcher.setIsLoading(false);
		}
	},
};
