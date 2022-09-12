import { PayOptions } from '@/models/component/companies/subscription/subscription.interface';
import { ChargesStatus, SubscriptionStatus, TBooleanAttr } from '@/types/company/settings.type';

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
		subscription?: { _id: string; title: string };
		//payment_method?: TPaymentMethod;
		//promotion_id: { type: Types.ObjectId; ref: Promotion };
		subscription_id?: String;
		interval?: PayOptions;
		amount?: Number;
		auto_renew?: Boolean;
		creation_status?: ChargesStatus;
		status?: SubscriptionStatus;
		description?: String;
		features?: {
			_id: string;
			title: string;
			total_value: Number;
			current_value: Number;
		}[];
		//billingInfo?: TBillingInfo;
		timezone?: { _id: string; code: String; name: String; utc: String };
		currency?: { _id: string; code: String; name: String };
		createdAt?: string;
	};
	createSubscription?: {
		subscriptionId: string;
		paymentMethodId: string;
		subscriptionType: PayOptions;
	};
}
