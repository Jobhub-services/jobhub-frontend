import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/metadata.store';
import { API_PATHS } from '@/constants/api.constants';
import dispatchToStore from '@/utils/store';
import { TLanguages } from '@/types/metadata.type';

const { METADATA_SERVICE, USERS_SERVICE } = API_PATHS;

export const metadataDispatcher = {
	setAppExpanded(expanded: boolean) {
		dispatchToStore(storeActions.setAppExpanded({ expanded }));
	},
	setIsLoading(laoding: boolean) {
		dispatchToStore(storeActions.isLoading({ laoding }));
	},
	getCountries(data: any) {
		dispatchToStore(storeActions.setCountries(data));
	},
	setComapnyDivision(data: any) {
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
	setRoles(data: { _id: string; name: string }) {
		dispatchToStore(storeActions.setRoles(data));
	},
	setLanguages(data: { count: number; size: number; content: TLanguages[] }) {
		dispatchToStore(storeActions.setLanguages(data));
	},
	setTimeZone: (data: any) => {
		dispatchToStore(storeActions.setTimeZone(data));
	},
	setIndustries: (data: any) => {
		dispatchToStore(storeActions.setIndustry(data));
	},
};

export const metadataActions = {
	async getCountries() {
		try {
			metadataDispatcher.setIsLoading(true);
			const response = await httpClient.get(`${METADATA_SERVICE}/countries`);
			const responseData = response.data;
			if (responseData) metadataDispatcher.getCountries(responseData);
		} catch {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	async getJobCategories() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/job-categories`);
			const responseData = response.data;
			if (responseData) metadataDispatcher.getJobCategories(responseData);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},

	async getComapnyDivision() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/company/division`);
			const responseData = response.data;
			//console.log(responseData);
			if (responseData) metadataDispatcher.setComapnyDivision(responseData);
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
			if (responseData) metadataDispatcher.getCurrency(responseData);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},

	async getSkills(params?: { name: string }) {
		metadataDispatcher.setIsLoading(true);
		try {
			const param = {
				params: params,
			};
			const response = await httpClient.get(`${METADATA_SERVICE}/skills`, param);
			const responseData = response.data;
			if (responseData) metadataDispatcher.getSkills(responseData);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	async getRoles() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/job-roles`);
			const responseData = response.data;
			if (responseData) metadataDispatcher.setRoles(responseData);
		} catch (e: any) {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	async getLanguages() {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/languages`);
			const responseData = response.data;
			if (responseData) metadataDispatcher.setLanguages(responseData);
		} catch {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	getTimeZone: async () => {
		metadataDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/timezones`);
			const responseData = response.data;
			if (responseData) metadataDispatcher.setTimeZone(responseData);
		} catch {
		} finally {
			metadataDispatcher.setIsLoading(false);
		}
	},
	getIndustries: async () => {
		try {
			const response = await httpClient.get(`${METADATA_SERVICE}/industries`);
			const responseData = response.data;
			if (responseData) {
				if (responseData) metadataDispatcher.setIndustries(responseData);
			}
		} catch (e: any) {
		} finally {
		}
	},
};
