import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/company.store';
import { httpClient } from '@/config/httpClient/HttpClient';

export const companiesDispatcher = {
	setIsLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setCompanies(data: any) {
		dispatchToStore(storeActions.setIsLoading(data));
	},
	setCompanyDetail(data: any) {
		dispatchToStore(storeActions.setIsLoading(data));
	},
};
export const companiesActions = {
	async setClosedFilter(closed: boolean) {
		companiesDispatcher.setClosedFilter(closed);
	},
	async getCompanies(loading: boolean = true) {
		companiesDispatcher.setIsLoading(loading);
		try {
			const response = await httpClient.get(`${'JOBS_SERVICE'}/application/my`);
			const responseData = response.data;
			if (responseData) {
				companiesDispatcher.setCompanies(responseData);
			}
		} catch {
		} finally {
			companiesDispatcher.setIsLoading(false);
		}
	},
	async getCompanyDetail(id: string) {
		companiesDispatcher.setIsLoading(true, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${'JOBS_SERVICE'}/application/my${id}`);
			const responseData = response.data;
			if (responseData) {
				companiesDispatcher.setCompanyDetail(responseData);
			}
		} catch {
		} finally {
			companiesDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},
};
