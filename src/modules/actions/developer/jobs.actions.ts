import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { storeActions } from '@/modules/store/developer/job.store';
import { TJobApplication, TJobDetails, TLoading } from '@/types/developer/job.type';
import dispatchToStore, { getState } from '@/utils/store';
import { transformErrors, transformErrorsToArray } from '@/utils/validations';
import { AxiosResponse } from 'axios';

const { JOBS_SERVICE } = API_PATHS;

export const jobDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setLoading(loading: boolean, attr: TLoading = 'isLoading') {
		dispatchToStore(storeActions.setLoading({ loading, attr }));
	},
	setShowDetails(show: boolean) {
		dispatchToStore(storeActions.setShowDetails({ show }));
	},
	setJobApplication(application: TJobApplication) {
		dispatchToStore(storeActions.setJobApplication(application));
	},
	setJobs(data: any) {
		dispatchToStore(storeActions.setJobs(data));
	},
	setJob(data: TJobDetails) {
		dispatchToStore(storeActions.setJob(data));
	},
	setErrors(errors: any) {
		dispatchToStore(storeActions.setErrors(errors));
	},
	setSuccessApplication(data: any) {
		dispatchToStore(storeActions.setSuccessApplication(data));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async getJobs() {
		const storeState = getState();
		if (!storeState.developerJobs.jobInfo.size) jobDispatcher.setLoading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/talent`);
			const responseData = response.data;
			if (responseData) jobDispatcher.setJobs(responseData);
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
				jobDispatcher.setErrors(errors);
			}
		} finally {
			jobDispatcher.setLoading(false);
		}
	},
	async getJob(id: string) {
		jobDispatcher.setLoading(true, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/talent/${id}`);
			const responseData = response.data;
			if (responseData) jobDispatcher.setJob(responseData.content);
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
			}
		} finally {
			jobDispatcher.setLoading(false, 'isDetailLoading');
		}
	},
	async setJobApplication(application: TJobApplication) {
		jobDispatcher.setLoading(true, 'isApplicationSubmited');
		jobDispatcher.setErrors({ status: false });
		jobDispatcher.setSuccessApplication({ status: false, message: '' });
		try {
			console.log(application);
			const response = await httpClient.post(`${JOBS_SERVICE}/application`, application);
			const responseData = response.data;
			if (responseData) {
				const data = { ...responseData, status: true };
				console.log(data);
				jobDispatcher.setSuccessApplication(data);
				jobDispatcher.setJobApplication({});
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			console.log(response);
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = data;
				else errors = transformErrorsToArray(data);
				jobDispatcher.setErrors({ status: true, content: errors });
			}
		} finally {
			jobDispatcher.setLoading(false, 'isApplicationSubmited');
		}
	},
};
