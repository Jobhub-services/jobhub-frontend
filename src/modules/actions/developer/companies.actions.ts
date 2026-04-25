import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/company.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AxiosResponse } from 'axios';

const { USERS_SERVICE, JOBS_SERVICE } = API_PATHS;

export const companiesDispatcher = {
	setIsLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setCompanies(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setCompanies({ data, reset }));
	},
	setCompanyDetail(data: any) {
		dispatchToStore(storeActions.setComapnyDetail(data));
	},
	setFilters(data: any) {
		dispatchToStore(storeActions.setFilters(data));
	},
	setSaveJob(saved: boolean, jobSaved?: boolean, id?: string) {
		dispatchToStore(storeActions.setSaveJob({ saved, jobSaved, id }));
	},
};
export const companiesActions = {
	async setClosedFilter(closed: boolean) {
		companiesDispatcher.setClosedFilter(closed);
	},
	async getCompanies(loading: boolean = true, params: any = {}, reset: boolean = false) {
		companiesDispatcher.setIsLoading(loading);
		if (reset) companiesDispatcher.setCompanies({}, true);
		try {
			const config = {
				params: params,
			};
			const response = await httpClient.get(`${USERS_SERVICE}/developer/companies`, config);
			const responseData = response.data;
			if (responseData) {
				companiesDispatcher.setCompanies(responseData);
			}
		} catch {
		} finally {
			companiesDispatcher.setIsLoading(false);
		}
	},
	async getCompanyDetail(id: string, loading: boolean = true) {
		companiesDispatcher.setIsLoading(loading, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/developer/companies/${id}`);
			const responseData = response.data;
			if (responseData) {
				companiesDispatcher.setCompanyDetail(responseData.content);
			}
		} catch {
		} finally {
			companiesDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
	async saveJob(id: string, save: boolean) {
		try {
			const response = await httpClient.put(`${JOBS_SERVICE}/talent/save`, { jobId: id, saveJob: save });
			const responseData = response.data;
			if (responseData) {
				companiesDispatcher.setSaveJob(true, save, id);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
			}
		} finally {
		}
	},
};
