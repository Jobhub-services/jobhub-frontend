import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/settings.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;

export const settingsDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setGeneral(data: any) {
		dispatchToStore(storeActions.setGeneral(data));
	},
};
export const settingsAction = {
	async setAttribute(data: any) {
		settingsDispatcher.setIsLoading(true);
		try {
			let dataToSend = data;
			console.log(dataToSend)
			const response = await httpClient.put(`${USERS_SERVICE}/talent`, dataToSend);
			if (response.data) {
				//settingsDispatcher.setAttribute(content, attr);
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setIsLoading(false);
		}
	},
};
