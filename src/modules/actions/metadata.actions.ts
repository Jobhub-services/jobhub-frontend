import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/metadata.store';
import { API_PATHS } from '@/constants/api.constants';
import dispatchToStore from '@/utils/store';

const { METADATA_SERVICE } = API_PATHS;

const metadataDispatcher = {
	setIsLoading(laoding: boolean) {
		dispatchToStore(storeActions.isLoading({ laoding }));
	},
	getCountries(data: { code: string; label: string }) {
		dispatchToStore(storeActions.setCountries(data));
	},
	getComapnyDivision(data: { value: string; label: string }[]) {
		dispatchToStore(storeActions.setCompanyDivision(data));
	},
	getJobCategories(data: { value: string; label: string }[]) {
		dispatchToStore(storeActions.setJobCategories(data));
	},
	getCurrency(data: { value: string; label: string }[]) {
		dispatchToStore(storeActions.setCurrency(data));
	},
	getSkills(data: { value: string; label: string }[]) {
		dispatchToStore(storeActions.setSkills(data));
	},
};

export const metadataActions = {
	async getCountries() {
		try {
			metadataDispatcher.setIsLoading(true);
			const response = await httpClient.get(`${METADATA_SERVICE}/countries`);
			const responseData = response.data;
			if (responseData.data) metadataDispatcher.getCountries(responseData.data);
		} catch {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	async getJobCategories() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/categories`);
			const responseData = response.data;
			if (responseData.data) metadataDispatcher.getJobCategories(responseData.data);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},

	async getComapnyDivision() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/division`);
			const responseData = response.data;
			if (responseData.data) metadataDispatcher.getComapnyDivision(responseData.data);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},

	async getCurrency() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/currencies`);
			const responseData = response.data;
			if (responseData.data) metadataDispatcher.getCurrency(responseData.data);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},

	async getSkills() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/skills`);
			const responseData = response.data;
			if (responseData.data) metadataDispatcher.getSkills(responseData.data);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
};
