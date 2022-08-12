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
import { arrayEquals } from '@/utils/helpers';
import { StatusType } from '@/types';

const { JOBS_SERVICE } = API_PATHS;
type TAction = 'jobCreated' | 'jobUpdated' | 'jobDeleted';
type TLoading = 'isLoading' | 'isDetailLoading' | 'isDeleteLoading';
export const jobDispatcher = {
	setIsLoading(isLoading: boolean, attr: TLoading = 'isLoading') {
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
	setJobAction(value: boolean, type: TAction) {
		dispatchToStore(storeActions.setJobAction({ value, type }));
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
		jobDispatcher.setJobAction(false, 'jobCreated');
		try {
			let tmp: any = { ...payload };
			tmp.category = payload.category?.id;
			if (payload.currency?.id && payload.currency?.id !== '') tmp.currency = payload.currency?.id;
			else delete tmp.currency;
			if (!payload.salary_type || payload.salary_type === '') delete tmp.salary_type;
			if (!payload.duration || payload.duration === '') delete tmp.duration;

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
				jobDispatcher.setJobAction(true, 'jobCreated');
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
	async updateJob(oldData: JobDetails, newData: JobInfo, loading: boolean = true, updateStatus: boolean = false, status?: StatusType) {
		jobDispatcher.setIsLoading(loading);
		try {
			let tmp: any = {};
			let dataToDispatch: any = {};
			if (updateStatus) {
				tmp.status = status;
				dataToDispatch = { ...oldData };
				dataToDispatch.status = status;
			} else {
				dataToDispatch = { ...newData };
				if (oldData.title !== newData.title) tmp.title = newData.title;
				if (oldData.description !== newData.description) tmp.description = newData.description;
				if (oldData.responsabilities !== newData.responsabilities) tmp.responsabilities = newData.responsabilities;
				if (oldData.benefits !== newData.benefits) tmp.benefits = newData.benefits;
				if (oldData.requirements !== newData.requirements) tmp.requirements = newData.requirements;
				if (oldData.job_type !== newData.job_type) tmp.job_type = newData.job_type;
				if (oldData.duration !== newData.duration) tmp.duration = newData.duration;
				if (oldData.company_division !== newData.company_division?.name) tmp.company_division = newData.company_division?.id;
				if (oldData.category !== newData.category?.name) tmp.category = newData.category?.id;
				if (oldData.salary_type !== newData.salary_type) tmp.salary_type = newData.salary_type;
				if (oldData.currency?.name !== newData.currency?.name) tmp.currency = newData.currency?.id;
				if (oldData.start_salary !== newData.start_salary) tmp.start_salary = newData.start_salary;
				if (oldData.end_salary !== newData.end_salary) tmp.end_salary = newData.end_salary;
				if (oldData.visa_sponsorship !== newData.visa_sponsorship) tmp.visa_sponsorship = newData.visa_sponsorship;
				if (oldData.work_remotly !== newData.work_remotly) tmp.work_remotly = newData.work_remotly;
				if (oldData.hire_remotly !== newData.hire_remotly) tmp.hire_remotly = newData.hire_remotly;
				if (!arrayEquals(oldData.duration_range ?? [], newData.duration_range ?? [])) tmp.duration_range = newData.duration_range;
				if (!arrayEquals(oldData.certification ?? [], newData.certification ?? [])) tmp.certification = newData.certification;
				if (!arrayEquals(oldData.certification ?? [], newData.certification ?? [])) tmp.education = newData.education;
				if (!arrayEquals(oldData.questions ?? [], newData.questions ?? [])) tmp.questions = newData.questions;
				const skillsArr = newData.skills?.map((elem) => elem.value);
				if (!arrayEquals(oldData.skills?.map((elem) => elem._id) ?? [], skillsArr ?? [])) tmp.skills = skillsArr;

				const hireArr = newData.hire_location
					?.filter((elem) => elem.country?.id !== '' || elem.city !== '')
					.map((elem) => {
						return { country: elem.country?.id, city: elem.city };
					});
				if (
					!arrayEquals(
						oldData.hire_location?.map((elem) => elem.city),
						hireArr?.map((elem) => elem.city)
					) &&
					!arrayEquals(
						oldData.hire_location?.map((elem) => elem.country._id),
						hireArr?.map((elem) => elem.country)
					)
				)
					tmp.hire_location = hireArr;

				dataToDispatch.company_division = newData?.company_division?.name;
				dataToDispatch.category = newData.category?.name;
				dataToDispatch.work_location = {
					country: { _id: newData.work_location![0].country?.id, name: newData.work_location![0].country?.name },
					city: newData.work_location![0].city,
				};

				dataToDispatch.hire_location = newData?.hire_location?.map((elem) => {
					return {
						country: { _id: elem.country?.id, name: elem?.country?.name },
						city: elem?.city,
					};
				});
				dataToDispatch.skills = newData.skills?.map((elem) => {
					return { _id: elem.value, name: elem.label };
				});
			}
			const response = await httpClient.put(`${JOBS_SERVICE}/company/${oldData._id}`, tmp);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.setJobAction(true, 'jobUpdated');
				jobDispatcher.getJobDetails(dataToDispatch);
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
	async saveJobData(data: JobInfo) {
		jobDispatcher.saveJobData(data);
	},
	async deleteJob(id: string) {
		jobDispatcher.setIsLoading(true, 'isDeleteLoading');
		try {
			const response = await httpClient.delete(`${JOBS_SERVICE}/company/${id}`);
			const responseData = response.data;
			if (responseData) {
				jobDispatcher.setJobAction(true, 'jobDeleted');
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
			jobDispatcher.setIsLoading(false, 'isDeleteLoading');
		}
	},
	// get constants
};
