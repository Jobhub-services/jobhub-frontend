import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/applications.store';
import { ApplicationStatus, FilterType, ApplicantAllInfo } from '@/types/company/applications.type';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AppByJobs, AppData } from '@/models/store/company/applications.interface';

const { APPLICANTS_SERVICE } = API_PATHS;

export const applicationsDispatcher = {
	setIsLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setApplicantsByJobs(data: AppByJobs) {
		dispatchToStore(storeActions.setApplicantsByJobs(data));
	},
	setShowApplicants(data: AppData) {
		dispatchToStore(storeActions.setShowApplicants(data));
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
	async getApplicantsByJobs(status: ApplicationStatus = 'new', params: any = {}) {
		applicationsDispatcher.setIsLoading(true);
		try {
			const param = {
				params: {
					byJob: true,
					status: status,
					...params,
				},
			};
			const response = await httpClient.get(`${APPLICANTS_SERVICE}/show`, param);
			//if (response.data) applicationsDispatcher.setApplicantsByJobs(response.data);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false);
		}
	},
	async getShowApplicants(params: any = {}, status: ApplicationStatus = 'new') {
		applicationsDispatcher.setIsLoading(true);
		try {
			const param = {
				params: {
					status: status,
					...params,
				},
			};
			const response = await httpClient.get(`${APPLICANTS_SERVICE}/show`, param);
			if (response.data) applicationsDispatcher.setShowApplicants(response.data);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false);
		}
	},
	async getApplicantDetails(status: ApplicationStatus, id?: string) {
		applicationsDispatcher.setIsLoading(true, 'isDetailLoading');
		try {
			const param = {
				params: {
					status: status,
					id: id,
				},
			};
			const response = await httpClient.get(`${APPLICANTS_SERVICE}/show/detail`, param);
			if (response.data) applicationsDispatcher.setApplicantDetails(response.data);
		} catch (e: any) {
		} finally {
			applicationsDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
	async setApplicationStatus(status: ApplicationStatus, applicantId: string) {
		try {
			//const response = await httpClient.post(`${APPLICANTS_SERVICE}/status/update`, { applicantId: applicantId, status: status });
			applicationsDispatcher.setApplicationStatus(status, applicantId);
		} catch (e: any) {
		} finally {
		}
	},
};
