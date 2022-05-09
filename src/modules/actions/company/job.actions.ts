import { transformErrorsToArray } from './../../../utils/validations';
import dispatchToStore from '@/utils/store';
import { AxiosResponse } from 'axios';
import { storeActions } from '@/modules/store/company/job.store';
import { JobInfo } from '@/models/store/company/job.interface';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { transformErrors } from '@/utils/validations';
import { JobDetails, JobOrderType, ShowJobInfo } from '@/types/jobs.type';

const { JOBS_SERVICE } = API_PATHS;

const jobDispatcher = {
	setIsLoading(isLoading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ isLoading }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setOrderBy(order: JobOrderType) {
		dispatchToStore(storeActions.setOrderBy({ order }));
	},
	saveJobData(data: JobInfo) {
		dispatchToStore(storeActions.saveJobData(data));
	},
	createJob(data: JobInfo) {
		dispatchToStore(storeActions.createJob(data));
	},
	getJobs(data: ShowJobInfo) {
		dispatchToStore(storeActions.setShowJobs(data));
	},
	getJobDetails(data: JobDetails) {
		dispatchToStore(storeActions.setJobDetails(data));
	},
	setJobErrors(errors: any) {
		dispatchToStore(storeActions.setJobErrors(errors));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async setJobOrder(order: JobOrderType) {
		jobDispatcher.setOrderBy(order);
	},
	async create(payload: JobInfo) {
		jobDispatcher.setIsLoading(true);
		try {
			let tmp: any = { ...payload };
			tmp.category = payload.category?.id;
			tmp.currency = payload.currency?.id;
			tmp.work_location = payload.work_location?.map((elem) => {
				return { country: elem.country?.id, city: elem.city };
			});
			tmp.hire_location = payload.hire_location?.map((elem) => {
				return { country: elem.country?.id, city: elem.city };
			});
			tmp.skills = payload.skills?.map((elem) => elem.value);
			tmp.duration_range = [payload.duration_range![0]?.toString(), payload.duration_range![1]?.toString()];
			const response = await httpClient.post(`${JOBS_SERVICE}/company`, tmp);
			const responseData = response.data;
			if (responseData) {
				console.log('job created ', responseData);
				jobDispatcher.createJob(responseData);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			const data = response.data;
			const errors = transformErrorsToArray(data);
			console.log(data, errors);
			jobDispatcher.setJobErrors(errors);
		} finally {
			jobDispatcher.setIsLoading(false);
		}
	},
	async getJobs() {
		jobDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/show`);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.getJobs(responseData);
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
	async getJobDetails(id: number) {
		jobDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/show/details/${id}`);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.getJobDetails(responseData);
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
	async saveJobData(data: JobInfo) {
		jobDispatcher.saveJobData(data);
	},
	// get constants
};
