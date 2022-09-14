import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/settings.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';
import { AxiosResponse } from 'axios';
import { transformErrors } from '@/utils/validations';
import { TBooleanAttr } from '@/types/company/settings.type';

const { USERS_SERVICE, PAYMENT_SERVICE } = API_PATHS;

export const settingsDispatcher = {
	setBooleanAttr(value: boolean, attr: TBooleanAttr = TBooleanAttr.IS_LOADING) {
		dispatchToStore(storeActions.setBooleanAttr({ value, attr }));
	},
	setGeneral(data: any) {
		dispatchToStore(storeActions.setGeneral(data));
	},
	setBillingInfo(data: any, attr: string, allData: boolean = false) {
		dispatchToStore(storeActions.setBillingInfo({ data, attr, allData }));
	},
	setIsUpdated(updated: boolean) {
		dispatchToStore(storeActions.setIsUpdated({ updated }));
	},
	setErrors(errors: any) {
		dispatchToStore(storeActions.setErrors({ errors }));
	},
	setSubscription(data: any) {
		dispatchToStore(storeActions.setSubscription(data));
	},
	setCreateSubscription(data: any) {
		dispatchToStore(storeActions.setCreateSubscription(data));
	},
	setPaymentMethod(data: any) {
		dispatchToStore(storeActions.setPaymentMethod(data));
	},
	setCurrentSubscription: (data: any) => {
		dispatchToStore(storeActions.setCurrentSubscription(data));
	},
	setChargeData: (data: any) => {
		dispatchToStore(storeActions.setChargeData(data));
	},
};
export const settingsAction = {
	async setAttribute(data: any) {
		settingsDispatcher.setBooleanAttr(true);
		try {
			let dataToSend = data;
			const response = await httpClient.put(`${USERS_SERVICE}/company/settings/account`, dataToSend);
			if (response.data) {
				settingsDispatcher.setIsUpdated(true);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors: any = {};
				if (data.message) errors = data.message;
				else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
		} finally {
			settingsDispatcher.setBooleanAttr(false);
		}
	},
	async setSecuritySettings(data: any) {
		settingsDispatcher.setBooleanAttr(true);
		try {
			let dataToSend = data;
			const response = await httpClient.put(`${USERS_SERVICE}/user/settings/security`, dataToSend);
			if (response.data) {
				settingsDispatcher.setIsUpdated(true);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
				//else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
			settingsDispatcher.setErrors({ status: true, messages: {} });
		} finally {
			settingsDispatcher.setBooleanAttr(false);
		}
	},
	async getSubscription() {
		settingsDispatcher.setBooleanAttr(true);
		try {
			const response = await httpClient.get(`${PAYMENT_SERVICE}/subscriptions`);
			if (response.data) {
				settingsDispatcher.setSubscription(response.data);
			}
		} catch {
		} finally {
			settingsDispatcher.setBooleanAttr(false);
		}
	},
	async createCustomer(customer: any, payment: any) {
		settingsDispatcher.setBooleanAttr(true);
		try {
			if (payment) {
				const response = await httpClient.post(`${PAYMENT_SERVICE}/customers/payment-method`, payment);
				if (response?.data) {
					settingsDispatcher.setBooleanAttr(true, TBooleanAttr.PAYMENT_METHOD_ADDED);
				}
			}
			const response = await httpClient.put(`${PAYMENT_SERVICE}/customers/billing`, customer);
			if (response.data) {
				settingsDispatcher.setBooleanAttr(true, TBooleanAttr.BILLING_INFO_UDPATED);
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setBooleanAttr(false);
		}
	},
	getPaymentMethod: async () => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_FETCHING_PAYMENT_METHOD);
		try {
			const response = await httpClient.get(`${PAYMENT_SERVICE}/customers/payment-method`);
			const responseData = response.data;
			if (responseData) {
				//console.log(responseData.content);
				settingsDispatcher.setPaymentMethod(responseData.content[0]);
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_FETCHING_PAYMENT_METHOD);
		}
	},
	removePaymentMethod: async (paymentId: string) => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_FETCHING_PAYMENT_METHOD);
		try {
			const response = await httpClient.delete(`${PAYMENT_SERVICE}/customers/payment-method/${paymentId}`);
			if (response) {
				settingsDispatcher.setPaymentMethod({});
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_FETCHING_PAYMENT_METHOD);
		}
	},
	getBillingInfo: async () => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_BILLING_FETCHING);
		try {
			const response = await httpClient.get(`${PAYMENT_SERVICE}/customers/billing`);
			const responseData = response.data;
			if (responseData) {
				//console.log(responseData.content);
				settingsDispatcher.setBillingInfo(responseData.content, '', true);
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_BILLING_FETCHING);
		}
	},
	createSubscription: async (data: any) => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_CREATING_SUBSCRIPTION);
		try {
			const response = await httpClient.post(`${PAYMENT_SERVICE}/subscriptions/subscribe`, data);
			const responseData = response.data;
			if (responseData) {
				settingsDispatcher.setBooleanAttr(true, TBooleanAttr.SUBSCRIPTION_CREATED);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
				//else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
			settingsDispatcher.setErrors({ status: true, messages: {} });
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_CREATING_SUBSCRIPTION);
		}
	},
	cancelSubscription: async () => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_CANCELING_SUBSCRIPTION);
		try {
			const response = await httpClient.delete(`${PAYMENT_SERVICE}/subscriptions/cancel`);
			if (response) {
				settingsDispatcher.setBooleanAttr(true, TBooleanAttr.SUBSCRIPTION_CANCELED);
			}
		} catch (e: any) {
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_CANCELING_SUBSCRIPTION);
		}
	},
	createJobCharge: async (data: any) => {
		settingsDispatcher.setBooleanAttr(true, TBooleanAttr.IS_CREATING_CHARGE);
		try {
			const response = await httpClient.post(`${PAYMENT_SERVICE}/charges/charge-post`, data);
			const responseData = response.data;
			if (responseData) {
				//console.log(responseData);
				settingsDispatcher.setChargeData(responseData);
			}
		} catch (e: any) {
			const response: AxiosResponse = e?.response;
			if (response) {
				const data = response.data;
				let errors = '';
				if (data.message) errors = data.message;
				//else errors = transformErrors(data);
				settingsDispatcher.setErrors({ status: true, messages: errors });
			}
			settingsDispatcher.setErrors({ status: true, messages: {} });
		} finally {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.IS_CREATING_CHARGE);
		}
	},
	getCurrentSubscription: async () => {
		settingsDispatcher.setBooleanAttr(true);
		try {
			const response = await httpClient.get(`${PAYMENT_SERVICE}/subscriptions/me`);
			const responseData = response.data;
			if (responseData) {
				console.log(responseData);
				settingsDispatcher.setCurrentSubscription({ ...responseData.content, isSubscribed: responseData.isSubscribed });
			}
		} catch {
		} finally {
			settingsDispatcher.setBooleanAttr(false);
		}
	},
};
