import { TBooleanAttr } from '@/types/publicJobs.type';
import dispatchToStore from '@/utils/store';
import { storeAction } from '@/modules/store/publicJobs.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { JOBS_SERVICE } = API_PATHS;

export const publicJobsDispatcher = {
	setBooleanAttr: (value: boolean, attr: TBooleanAttr) => {
		dispatchToStore(storeAction.setBooleanAttr({ value, attr }));
	},
	setJobs: (data: any) => {
		dispatchToStore(storeAction.setJobs(data));
	},
};
export const publicJobsAction = {
	getJobs: async () => {
		publicJobsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_JOB_FETCHING);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/public`);
			if (response.data) {
				publicJobsDispatcher.setJobs(response.data);
			}
		} catch (e: any) {
		} finally {
			publicJobsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_JOB_FETCHING);
		}
	},
};
