import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/settings.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AxiosResponse } from 'axios';
import { transformErrors } from '@/utils/validations';

const { USERS_SERVICE } = API_PATHS;

export const settingsDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setGeneral(data: any) {
		dispatchToStore(storeActions.setGeneral(data));
	},

	setIsUpdated(updated: boolean) {
		dispatchToStore(storeActions.setIsUpdated({ updated }));
	},
	setErrors(errors: any) {
		dispatchToStore(storeActions.setErrors({ errors }));
	},
};
export const settingsAction = {
	async setAttribute(data: any) {
		settingsDispatcher.setIsLoading(true);
		try {
			let dataToSend = data;
			const response = await httpClient.put(`${USERS_SERVICE}/developer/settings/account`, dataToSend);
			if (response.data) {
				settingsDispatcher.setIsUpdated(true);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors: any = {};
				if (data.message) errors = data.message;
				else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
			//settingsDispatcher.setErrors({ status: true, messages: {} });
		} finally {
			settingsDispatcher.setIsLoading(false);
		}
	},
	async setSecuritySettings(data: any) {
		settingsDispatcher.setIsLoading(true);
		try {
			let dataToSend = data;
			const response = await httpClient.put(`${USERS_SERVICE}/user/settings/security`, dataToSend);
			if (response.data) {
				settingsDispatcher.setIsUpdated(true);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
				//else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
			settingsDispatcher.setErrors({ status: true, messages: {} });
		} finally {
			settingsDispatcher.setIsLoading(false);
		}
	},
};
