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
	setShowJobDetails(showDetails: boolean) {
		dispatchToStore(storeActions.setShowJobDetails({ showDetails }));
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
	setJobErrors(errors: { [key: string]: string }) {
		dispatchToStore(storeActions.setJobErrors(errors));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
	async setShowJobDetails(showDetails: boolean) {
		jobDispatcher.setShowJobDetails(showDetails);
	},
	async setJobOrder(order: JobOrderType) {
		jobDispatcher.setOrderBy(order);
	},
	async create(payload: JobInfo) {
		jobDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.post(`${JOBS_SERVICE}/create`, payload);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.createJob(responseData.data);
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
