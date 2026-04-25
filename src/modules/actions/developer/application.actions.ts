import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/application.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { JOBS_SERVICE } = API_PATHS;

export const applicationDispatcher = {
	setLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setLoading({ loading, attr }));
	},
	setApplications(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setApplications({ data, reset }));
	},
	setApplication(application: any) {
		dispatchToStore(storeActions.setApplication(application));
	},
};
export const applicationActions = {
	async getApplications(loading: boolean = true, param: any = {}) {
		applicationDispatcher.setLoading(loading);
		try {
			const params = {
				params: param,
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/application/my`, params);
			const responseData = response.data;
			if (responseData) {
				applicationDispatcher.setApplications(responseData);
			}
		} catch {
		} finally {
			applicationDispatcher.setLoading(false);
		}
	},
	async getApplication(id: string) {
		applicationDispatcher.setLoading(true, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/application/developer/${id}`);
			const responseData = response.data;
			if (responseData) {
				applicationDispatcher.setApplication(responseData.content);
			}
		} catch {
		} finally {
			applicationDispatcher.setLoading(false, 'isDetailLoading');
		}
	},
};
