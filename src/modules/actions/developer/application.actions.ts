import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/application.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { JOBS_SERVICE } = API_PATHS;

export const applicationDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setApplications(applications: any) {
		dispatchToStore(storeActions.setApplications(applications));
	},
};
export const applicationActions = {
	async getApplications() {
		applicationDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/application/my`);
			const responseData = response.data;
			if (responseData) {
				applicationDispatcher.setApplications(responseData);
			}
		} catch {
		} finally {
			applicationDispatcher.setIsLoading(false);
		}
	},
};
