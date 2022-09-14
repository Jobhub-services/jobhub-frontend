export enum TBooleanAttr {
	IS_LOADING = 'isLoading',
	IS_FETCHING_PAYMENT_METHOD = 'isFetchingPaymentMethod',
	IS_BILLING_FETCHING = 'isBillingFetching',
	BILLING_INFO_UDPATED = 'billingInfoUpdated',
	PAYMENT_METHOD_ADDED = 'paymentMethodAdded',
	IS_CREATING_SUBSCRIPTION = 'isCreatingSubscription',
	SUBSCRIPTION_CREATED = 'subscriptionCreated',
	IS_CREATING_CHARGE = 'isCreatingCharge',
	IS_CANCELING_SUBSCRIPTION = 'isCancelingSubscription',
	SUBSCRIPTION_CANCELED = 'subscriptionCanceled',
}

export enum ChargesStatus {
	INITIATED = 'INITIATED',
	ABANDONED = 'ABANDONED',
	CANCELLED = 'CANCELLED',
	FAILED = 'FAILED',
	DECLINED = 'DECLINED',
	RESTRICTED = 'RESTRICTED',
	CAPTURED = 'CAPTURED',
	VOID = 'VOID',
	TIMEDOUT = 'TIMEDOUT',
	UNKNOWN = 'UNKNOWN',
}

export enum SubscriptionStatus {
	ACTIVE = 'active',
	CANCELED = 'canceled',
}
