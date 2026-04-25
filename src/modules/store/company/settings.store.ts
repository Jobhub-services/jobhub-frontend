import { ISettingsState } from '@/models/store/company/settings.interface';
import { TBooleanAttr } from '@/types/company/settings.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISettingsState = {
	[TBooleanAttr.IS_LOADING]: false,
	[TBooleanAttr.IS_FETCHING_PAYMENT_METHOD]: false,
	[TBooleanAttr.IS_BILLING_FETCHING]: false,
	[TBooleanAttr.BILLING_INFO_UDPATED]: false,
	[TBooleanAttr.PAYMENT_METHOD_ADDED]: false,
	[TBooleanAttr.IS_CREATING_SUBSCRIPTION]: false,
	[TBooleanAttr.SUBSCRIPTION_CREATED]: false,
	[TBooleanAttr.IS_CREATING_CHARGE]: false,
	[TBooleanAttr.IS_CANCELING_SUBSCRIPTION]: false,
	[TBooleanAttr.SUBSCRIPTION_CANCELED]: false,
	[TBooleanAttr.CONTACT_SENDED]: false,
	[TBooleanAttr.CONTACT_FAILED]: false,

	generaleInfo: {},
	securityInfo: {},
	billingInfo: {},
	paymentMethod: {
		_id: '',
	},
	subscription: {
		content: [],
	},
	currentSubscription: {
		_id: null,
	},
};

const reducerSlices = createSlice({
	name: 'companySettings',
	initialState,
	reducers: {
		setBooleanAttr: (state, action) => {
			const { value, attr } = action.payload;
			state[attr as TBooleanAttr] = value;
		},
		setGeneral: (state, action) => {
			state.generaleInfo = action.payload;
		},
		setBillingInfo: (state, action) => {
			const { data, attr, allData } = action.payload;
			if (allData) {
				state.billingInfo = data;
			} else {
				state.billingInfo = {
					...state.billingInfo,
					[attr]: data,
				};
			}
		},
		setSecurity: (state, action) => {
			state.securityInfo = action.payload;
		},
		setIsUpdated: (state, action) => {
			const { updated } = action.payload;
			state.isUpdated = updated;
		},
		setSubscription: (state, action) => {
			const data = action.payload;
			state.subscription = data;
		},
		setPaymentMethod: (state, action) => {
			state.paymentMethod = action.payload;
		},
		setErrors: (state, action) => {
			const { errors } = action.payload;
			state.errors = errors;
		},
		setCreateSubscription: (state, action) => {
			const data = action.payload;
			state.createSubscription = data;
		},
		setCurrentSubscription: (state, action) => {
			const data = action.payload;
			state.currentSubscription = data;
		},
		setChargeData: (state, action) => {
			state.chargeData = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
