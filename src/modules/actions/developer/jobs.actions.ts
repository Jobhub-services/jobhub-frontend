import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { storeActions } from '@/modules/store/developer/job.store';
import { TJobApplication } from '@/types/developer/job.type';
import dispatchToStore from '@/utils/store';
import { transformErrors } from '@/utils/validations';
import { AxiosResponse } from 'axios';

const { JOBS_SERVICE } = API_PATHS;

export const jobDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setShowDetails(show: boolean) {
		dispatchToStore(storeActions.setShowDetails({ show }));
	},
	setJobApplication(application: TJobApplication) {
		dispatchToStore(storeActions.setJobApplication(application));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async getJobs() {
		jobDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/developer`);
			const responseData = response.data;
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
				//jobDispatcher.setJobErrors(errors);
			}
		} finally {
			jobDispatcher.setIsLoading(false);
		}
	},
	async setJobApplication(application: TJobApplication) {
		jobDispatcher.setIsLoading(true);
		try {
		} catch {
		} finally {
			jobDispatcher.setIsLoading(true);
		}
	},
};
