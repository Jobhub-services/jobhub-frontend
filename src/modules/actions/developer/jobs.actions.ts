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
	setJobs(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setJobs({ data, reset }));
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
	setFilters(params: any) {
		dispatchToStore(storeActions.setFilters(params));
	},
	setSaveJob(saved: boolean, jobSaved?: boolean, id?: string) {
		dispatchToStore(storeActions.setSaveJob({ saved, jobSaved, id }));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async getJobs(loading: boolean = true, params: any = {}, reset: boolean = false) {
		jobDispatcher.setLoading(loading);
		if (reset) jobDispatcher.setJobs({}, reset);
		try {
			const param = {
				params: params,
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/talent`, param);
			const responseData = response.data;
			console.log('jobs data ', responseData);
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
			if (responseData) {
				console.log(responseData.content);
				jobDispatcher.setJob(responseData.content);
			}
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
			const response = await httpClient.post(`${JOBS_SERVICE}/application`, application);
			const responseData = response.data;
			if (responseData) {
				const data = { ...responseData, status: true };
				jobDispatcher.setSuccessApplication(data);
				jobDispatcher.setJobApplication({});
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
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
	async saveJob(id: string, save: boolean) {
		jobDispatcher.setLoading(true, 'isSaving');
		try {
			const response = await httpClient.put(`${JOBS_SERVICE}/talent/save`, { jobId: id, saveJob: save });
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.setSaveJob(true, save, id);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
			}
		} finally {
			jobDispatcher.setLoading(false, 'isSaving');
		}
	},
};
