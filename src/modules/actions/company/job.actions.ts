import { transformErrorsToArray } from './../../../utils/validations';
import dispatchToStore from '@/utils/store';
import { AxiosResponse } from 'axios';
import { storeActions } from '@/modules/store/company/job.store';
import { JobInfo } from '@/models/store/company/job.interface';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { transformErrors } from '@/utils/validations';
import { JobDetails, JobOrderType, ShowJobInfo } from '@/types/company/jobs.type';
import { JobInstance } from '@/constants/company/job.contants';

const { JOBS_SERVICE } = API_PATHS;

export const jobDispatcher = {
	setIsLoading(isLoading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ isLoading, attr }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	saveJobData(data: JobInfo) {
		dispatchToStore(storeActions.saveJobData(data));
	},
	createJob(data: JobInfo) {
		dispatchToStore(storeActions.createJob(data));
	},
	setJobCreated(created: boolean) {
		dispatchToStore(storeActions.setJobCreated({ created }));
	},
	setJobs(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setShowJobs({ data, reset }));
	},
	getJobDetails(data: JobDetails) {
		dispatchToStore(storeActions.setJobDetails(data));
	},
	setJobErrors(errors: any) {
		dispatchToStore(storeActions.setJobErrors(errors));
	},
	setFilters(data: any) {
		dispatchToStore(storeActions.setFilters(data));
	},
	setDeleteJob(deleted: boolean, updateJobs: boolean, id: string = '') {
		dispatchToStore(storeActions.setDeleteJob({ deleted, updateJobs, id }));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async create(payload: JobInfo) {
		jobDispatcher.setIsLoading(true);
		jobDispatcher.setJobErrors([]);
		jobDispatcher.setJobCreated(false);
		try {
			let tmp: any = { ...payload };
			tmp.category = payload.category?.id;
			tmp.currency = payload.currency?.id;

			if (payload.company_division?.id && payload.company_division?.id !== '') tmp.company_division = payload.company_division?.id;
			else delete tmp.company_division;

			tmp.work_location = payload.work_location
				?.filter((elem) => elem.country?.id !== '' || elem.city !== '')
				.map((elem) => {
					return { country: elem.country?.id, city: elem.city };
				});
			tmp.hire_location = payload.hire_location
				?.filter((elem) => elem.country?.id !== '' || elem.city !== '')
				.map((elem) => {
					return { country: elem.country?.id, city: elem.city };
				});
			tmp.skills = payload.skills?.map((elem) => elem.value);
			tmp.duration_range =
				payload?.duration_range?.length! > 1 && payload?.duration_range![0] && payload?.duration_range![1]
					? [(payload.duration_range![0]?.toString(), payload.duration_range![1]?.toString())]
					: [];

			const response = await httpClient.post(`${JOBS_SERVICE}/company`, tmp);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.createJob(JobInstance);
				jobDispatcher.setJobCreated(true);
				//jobDispatcher.createJob(initialState.createJob);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = data;
				else errors = transformErrorsToArray(data);
				jobDispatcher.setJobErrors({ status: true, content: errors });
			}
		} finally {
			jobDispatcher.setIsLoading(false);
		}
	},
	async getJobs(loading: boolean = true, params: any = {}, reset: boolean = false) {
		jobDispatcher.setIsLoading(loading);
		if (reset) jobDispatcher.setJobs({}, true);
		try {
			const config = {
				params: params,
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/company`, config);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.setJobs(responseData);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
				jobDispatcher.setJobErrors(errors);
			}
		} finally {
			jobDispatcher.setIsLoading(false);
		}
	},
	async getJobDetails(id: string, loading: boolean = true) {
		jobDispatcher.setIsLoading(loading, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/company/${id}`);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.getJobDetails(responseData.content);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
				jobDispatcher.setJobErrors(errors);
			}
		} finally {
			jobDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
	async saveJobData(data: JobInfo) {
		jobDispatcher.saveJobData(data);
	},
	async deleteJob(id: string) {
		jobDispatcher.setIsLoading(true, 'isDetailLoading');
		try {
			const response = await httpClient.delete(`${JOBS_SERVICE}/company/${id}`);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.setDeleteJob(true, true, id);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = {};
				if (data.message) errors = { password: data.message };
				else errors = transformErrors(data);
				jobDispatcher.setJobErrors(errors);
			}
		} finally {
			jobDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
	// get constants
};
