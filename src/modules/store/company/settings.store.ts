import { PayOptions } from '@/models/component/companies/subscription/subscription.interface';
import { ISettingsState } from '@/models/store/company/settings.interface';
import { ChargesStatus, SubscriptionStatus, TBooleanAttr } from '@/types/company/settings.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISettingsState = {
	[TBooleanAttr.IS_LOADING]: false,
	[TBooleanAttr.IS_FETCHING_PAYMENT_METHOD]: false,
	[TBooleanAttr.IS_BILLING_FETCHING]: false,
	[TBooleanAttr.BILLING_INFO_UDPATED]: false,
	[TBooleanAttr.PAYMENT_METHOD_ADDED]: false,
	[TBooleanAttr.IS_CREATING_SUBSCRIPTION]: false,
	[TBooleanAttr.SUBSCRIPTION_CREATED]: false,

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
		userId: 'string',
		subscription: { _id: 'string', title: 'For One ' },
		//promotion_id: { type: Types.ObjectId; ref: Promotion };
		subscription_id: 'String',
		interval: PayOptions.YEARLY,
		amount: 1788,
		auto_renew: true,
		creation_status: ChargesStatus.TIMEDOUT,
		status: SubscriptionStatus.ACTIVE,
		features: [
			{
				_id: 'string',
				title: '1 Posting',
				total_value: 1,
				current_value: 0,
			},
			{
				_id: 'string',
				title: '10 Contacts',
				total_value: 10,
				current_value: 5,
			},
		],
		timezone: { _id: 'string', code: 'String', name: 'String', utc: '+10' },
		currency: { _id: 'string', code: 'USD', name: 'String' },
		createdAt: '2022-09-01T12:12:12',
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
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
