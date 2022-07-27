import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/applications.store';
import { ApplicationStatus, FilterType, ApplicantAllInfo } from '@/types/company/applications.type';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AppByJobs, AppData } from '@/models/store/company/applications.interface';

const { JOBS_SERVICE } = API_PATHS;

export const applicationsDispatcher = {
	setIsLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' | 'isStatusChange' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setApplicantsByJobs(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setApplicantsByJobs({ data, reset }));
	},
	setShowApplicants(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setShowApplicants({ data, reset }));
	},
	setApplicantDetails(data: ApplicantAllInfo) {
		dispatchToStore(storeActions.setApplicantDetails(data));
	},
	setApplicationStatus(status: ApplicationStatus, applicantId: string) {
		dispatchToStore(storeActions.setApplicationStatus({ status, applicantId }));
	},
	setFilter(data: FilterType) {
		dispatchToStore(storeActions.setFilter(data));
	},
};
export const applicationsActions = {
	async setFilter(filter: FilterType) {
		applicationsDispatcher.setFilter(filter);
	},
	async setClosedFilter(closed: boolean) {
		applicationsDispatcher.setClosedFilter(closed);
	},
	async getApplicantsByJobs(status: ApplicationStatus = 'NEW', loading: boolean = true, params: any = {}, reset: boolean = false) {
		applicationsDispatcher.setIsLoading(loading);
		if (reset) applicationsDispatcher.setApplicantsByJobs({}, true);
		try {
			const param = {
				params: {
					byJob: true,
					status: status,
					...params,
				},
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/application/company`, param);
			console.log(response);
			if (response.data) applicationsDispatcher.setApplicantsByJobs(response.data);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false);
		}
	},
	async getShowApplicants(status: ApplicationStatus = 'NEW', loading: boolean = false, params: any = {}, reset: boolean = false) {
		applicationsDispatcher.setIsLoading(loading);
		if (reset) applicationsDispatcher.setShowApplicants({}, true);
		try {
			const param = {
				params: {
					status: status,
					...params,
				},
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/application/company`, param);
			if (response.data) applicationsDispatcher.setShowApplicants(response.data);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false);
		}
	},
	async getApplicantDetails(status: ApplicationStatus, id?: string, loading: boolean = true) {
		applicationsDispatcher.setIsLoading(loading, 'isDetailLoading');
		try {
			const param = {
				params: {
					status: status,
				},
			};
			const response = await httpClient.get(`${JOBS_SERVICE}/application/company/${id}`, param);
			const responseData = response.data;
			console.log(responseData);
			if (responseData) applicationsDispatcher.setApplicantDetails(responseData.content);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
	async setApplicationStatus(status: ApplicationStatus, applicantId: string) {
		applicationsDispatcher.setIsLoading(true, 'isStatusChange');
		try {
			const response = await httpClient.put(`${JOBS_SERVICE}/application/status/${applicantId}`, { status: status });
			if (response.data) applicationsDispatcher.setApplicationStatus(status, applicantId);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false, 'isStatusChange');
		}
	},
};
