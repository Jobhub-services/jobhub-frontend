import { httpClient } from '@/config/httpClient/HttpClient';
import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/auth.store';
import { AxiosResponse } from 'axios';
import { transformErrors } from '@/utils/validations';
import { IUser } from '@/models/store/user.interface';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;

export const authDispatchers = {
	setIsLoading(isLoading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ isLoading }));
	},
	setAuthErrors(errors: { [x: string]: string }) {
		dispatchToStore(storeActions.setAuthErrors({ errors }));
	},
	setAuthToken(token: string | null) {
		dispatchToStore(storeActions.login({ token }));
	},
};

export const authActions = {
	async login(payload: { username: string; password: string }) {
		authDispatchers.setIsLoading(true);
		try {
			const response = await httpClient.post(`${USERS_SERVICE}/auth/login`, payload);
			authDispatchers.setAuthErrors({});
			const responseData = response.data;
			if (responseData) {
				authDispatchers.setAuthToken(responseData.data);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			const data = response.data;
			let errors = {};
			if (data.message) errors = { password: data.message };
			else errors = transformErrors(data);
			authDispatchers.setAuthErrors(errors);
		} finally {
			authDispatchers.setIsLoading(false);
		}
	},
	async register(payload: IUser) {
		authDispatchers.setIsLoading(true);
		try {
			const response = await httpClient.post(`${USERS_SERVICE}/auth/register`, payload);
			const responseData = response.data;
			authDispatchers.setAuthErrors({});
			if (responseData) window.location.replace('/login');
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			const data = response.data;
			let errors = {};
			if (data.message) errors = { username: data.message, email: data.message };
			else errors = transformErrors(data);
			authDispatchers.setAuthErrors(errors);
		} finally {
			authDispatchers.setIsLoading(false);
		}
	},
	async logout() {
		authDispatchers.setAuthToken(null);
	},
	async resetPassword(email: string) {
		authDispatchers.setIsLoading(true);
		try {
			//const response = await httpClient.post(`${USERS_SERVICE}/auth/reset`, { email });
			const responseData = true;
			authDispatchers.setAuthErrors({});
			if (responseData) window.location.replace('/forgot-password/pending');
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			const data = response.data;
			let errors = {};
			if (data.message) errors = { email: data.message };
			else errors = transformErrors(data);
			authDispatchers.setAuthErrors(errors);
		} finally {
			authDispatchers.setIsLoading(false);
		}
	},
	async updatePassword(payload: any) {
		authDispatchers.setIsLoading(true);
		try {
			const response = await httpClient.post(`${USERS_SERVICE}/auth/update`, payload);
			const responseData = true;
			authDispatchers.setAuthErrors({});
			//if (responseData) window.location.replace('/login');
		} catch (e: any) {
		} finally {
			authDispatchers.setIsLoading(false);
		}
	},
};
