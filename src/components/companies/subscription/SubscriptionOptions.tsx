import { FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';
import Standard from '@/components/companies/subscription/options/Standard';
import InfinityPro from '@/components/companies/subscription/options/InfinityPro';
import ForOne from '@/components/companies/subscription/options/ForOne';
import HeaderTab from '@/components/companies/subscription/HeaderTab';
import { useEffect, useState } from 'react';
import { PayOptions } from '@/models/component/companies/subscription/subscription.interface';
import { useAppSelector } from '@/utils/appHooks';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import PaymentPopModal from '@/components/companies/subscription/Modal/PaymentPopModal';
import { TBooleanAttr } from '@/types/company/settings.type';
import { pushNotification } from '@/utils/helpers';

const HEADER_STEP_HEIGHT = 45;
const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	padding: 5px 20px 5px 0;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SOptions = styled(FlexBox)`
	border-radius: 8px;
`;

const SubscriptionOptions = () => {
	const [openPopPayment, setOpenPopPayment] = useState(false);
	const [status, setStatus] = useState(PayOptions.YEARLY);
	const { subscription, createSubscription, paymentMethod, billingInfo, subscriptionCreated, isCreatingSubscription } = useAppSelector(
		(state) => state.companySettings
	);
	const selectedSubs = subscription?.content?.find((elem) => elem._id === createSubscription?.subscriptionId);
	const amount = createSubscription?.subscriptionType === PayOptions.YEARLY ? (selectedSubs?.yearly_amount ?? 0) * 12 : selectedSubs?.monthly_amount;

	useEffect(() => {
		if (subscription.content.length === 0) settingsAction.getSubscription();
	}, []);
	useEffect(() => {
		if (subscriptionCreated) {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.SUBSCRIPTION_CREATED);
			pushNotification.success('Your subscription is created successfully');
			setOpenPopPayment(false);
			settingsAction.getCurrentSubscription();
		}
	}, [subscriptionCreated]);

	const handleChange = (status: string) => {
		setStatus(status as any);
	};

	const handleSubscribe = (subscriptionId: string) => {
		const tmp = { ...createSubscription, subscriptionId: subscriptionId, subscriptionType: status };
		settingsDispatcher.setCreateSubscription(tmp);
		if (!paymentMethod?._id || paymentMethod._id === '') settingsAction.getPaymentMethod();
		if (Object.keys(billingInfo).length === 0) settingsAction.getBillingInfo();
		setOpenPopPayment(true);
	};

	const handleOrder = () => {
		const isValid =
			paymentMethod?._id &&
			paymentMethod?._id !== '' &&
			billingInfo?.address &&
			billingInfo?.address !== '' &&
			billingInfo?.email &&
			billingInfo?.email !== '' &&
			billingInfo?.city &&
			billingInfo?.city !== '' &&
			billingInfo?.country?._id &&
			billingInfo?.country._id !== '';
		if (isValid) {
			const tmp = { paymentMethodId: paymentMethod._id, ...createSubscription };
			settingsAction.createSubscription(tmp);
			//console.log(tmp);
		} else {
			pushNotification.error('There is missing informations, please check your credit card and billing informations');
		}
	};
	return (
		<>
			{openPopPayment && (
				<PaymentPopModal
					isLoading={isCreatingSubscription}
					onPlaceOrder={handleOrder}
					open={openPopPayment}
					onClose={() => setOpenPopPayment(false)}
					amount={amount ?? 0}
					orderTitle={selectedSubs?.title ?? ''}
					description={`Upgrade to ${createSubscription?.subscriptionType} plan`}
				/>
			)}
			<div className="mt-20">
				<HeaderContainer justify="start">
					<StyledHeadline variant="h2" size="sm">
						Upgrade Subscription Options
					</StyledHeadline>
				</HeaderContainer>
				<FlexBox gap={20} justify="start" className="mt-10">
					<HeaderTab onClick={handleChange} title="Pay Yearly (20% off)" active={status === PayOptions.YEARLY} status={PayOptions.YEARLY} />
					<HeaderTab onClick={handleChange} title="Pay Monthly" active={status === PayOptions.MONTHLY} status={PayOptions.MONTHLY} />
				</FlexBox>
				<SOptions gap={20} align="start" className="mt-15">
					<ForOne onSubscribe={handleSubscribe} status={status} />
					<Standard onSubscribe={handleSubscribe} status={status} />
					<InfinityPro onSubscribe={handleSubscribe} status={status} />
				</SOptions>
			</div>
		</>
	);
};

export default SubscriptionOptions;
