import { PayOptions } from '@/models/component/companies/subscription/subscription.interface';
import { SubscriptionStatus, TBooleanAttr } from '@/types/company/settings.type';

type TPaymentMethod = {
	brand?: string;
	card_id?: string;
	card_token?: string;
	createdAt?: string;
	exp_month?: number;
	exp_year?: number;
	fingerprint?: string;
	first_six?: string;
	funding?: string;
	last4?: string;
	name?: string;
	updatedAt?: string;
	userId?: string;
	_id: string;
};
type TBillingInfo = {
	address?: string;
	city?: string;
	zipCode?: string;
	region?: string;
	country?: {
		_id?: string;
		name?: string;
	};

	first_name?: string;
	last_name?: string;
	email?: string;
	phone?: { country_code: string; number: string };
};
export interface ISettingsState {
	[TBooleanAttr.IS_LOADING]?: boolean;
	[TBooleanAttr.IS_FETCHING_PAYMENT_METHOD]?: boolean;
	[TBooleanAttr.IS_BILLING_FETCHING]?: boolean;
	[TBooleanAttr.BILLING_INFO_UDPATED]?: boolean;
	[TBooleanAttr.PAYMENT_METHOD_ADDED]?: boolean;
	[TBooleanAttr.IS_CREATING_SUBSCRIPTION]?: boolean;
	[TBooleanAttr.SUBSCRIPTION_CREATED]: boolean;
	[TBooleanAttr.IS_CREATING_CHARGE]: boolean;
	[TBooleanAttr.IS_CANCELING_SUBSCRIPTION]: boolean;
	[TBooleanAttr.SUBSCRIPTION_CANCELED]: boolean;
	[TBooleanAttr.CONTACT_SENDED]: boolean;
	[TBooleanAttr.CONTACT_FAILED]: boolean;

	isUpdated?: boolean;
	errors?: {
		status?: boolean;
		messages?: any;
	};
	generaleInfo?: {
		email?: string;
		companyName?: string;
		username?: string;
	};
	securityInfo?: {
		currentPassword?: string;
		newPassword?: string;
		confirmPassword?: string;
	};
	billingInfo: TBillingInfo;
	paymentMethod: TPaymentMethod;
	subscription: {
		content: {
			_id: string;
			title: string;
			description: string;
			monthly_amount: number;
			yearly_amount: number;
			features: [
				{
					slug: string;
					title: string;
					description: string;
					value: number;
					_id: string;
				}
			];
			createdAt: string;
			updatedAt: string;
		}[];
	};
	currentSubscription: {
		_id: string | null;
		userId?: string;
		title?: string;
		subscriptionId?: String;
		subscriptionType?: PayOptions;
		amount?: Number;
		status?: SubscriptionStatus;
		description?: String;
		features?: {
			_id: string;
			displayText?: string;
			featureKey?: string;
		}[];
		timezone?: string;
		currency?: string;
		createdAt?: string;
		isSubscribed?: boolean;
		renewJob?: number;
		expireAt?: string;
	};
	createSubscription?: {
		subscriptionId: string;
		paymentMethodId: string;
		subscriptionType: PayOptions;
	};
	chargeData?: {
		paymentUrl: string;
		message: string;
	};
}
