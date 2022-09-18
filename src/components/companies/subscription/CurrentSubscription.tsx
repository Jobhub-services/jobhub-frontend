import { ForOneIcon, LoadingIcon, SubscriptionIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Headline, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import PayGo from '@/components/companies/subscription/options/PayGo';
import { useEffect, useState } from 'react';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import PaymentPopModal from '@/components/companies/subscription/Modal/PaymentPopModal';
import ChargePopModal from '@/components/companies/subscription/Modal/ChargePopModal';
import { pushNotification } from '@/utils/helpers';
import CancelSubscriptionModal from '@/components/companies/subscription/Modal/CancelSubscriptionModal';
import { TBooleanAttr } from '@/types/company/settings.type';
import { userActions } from '@/modules/actions/user.actions';

const CCurrency: any = {
	'United States Dollar': '$',
};
const HEADER_STEP_HEIGHT = 45;

const SH2 = styled.h2`
	font-size: 1.2rem;
	margin: 0;
	color: ${colors.BLACK_3};
`;
const SSpan = styled.span`
	color: ${colors.BLACK_7};
	font-size: 13px;
`;
const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	padding: 5px 20px 5px 0;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SContainer = styled.div<any>`
	background-color: white;
	border-radius: 8px;
	padding: 15px 20px;
	width: ${(props) => props.width};
`;
const TSpan = styled.span`
	font-size: 14px;
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const CostSpan = styled.span`
	font-size: 1.3rem;
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const CSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const RSpan = styled.span`
	color: ${colors.BLACK_7};
`;
const PSpan = styled.span`
	display: inline-block;
	background-color: ${colors.BLACK_3};
	border-radius: 50%;
	width: 3px;
	height: 3px;
`;
const SDiv = styled.div`
	color: ${colors.BLACK_5};
`;
const CurrentSubscription = () => {
	const [openPopPayment, setOpenPopPayment] = useState(false);
	const [openChargeModal, setOpenChargeModal] = useState(false);
	const [openCancelModal, setOpenCancelModal] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const { currentSubscription, paymentMethod, billingInfo, isCreatingCharge, chargeData, isCancelingSubscription, subscriptionCanceled, isLoading } =
		useAppSelector((state) => state.companySettings);

	useEffect(() => {
		if (!currentSubscription?.subscriptionId || currentSubscription.subscriptionId === '') settingsAction.getCurrentSubscription();
	}, []);

	useEffect(() => {
		if (chargeData?.paymentUrl && chargeData?.paymentUrl !== '' && chargeData?.message && chargeData?.message !== '') {
			setOpenPopPayment(false);
			setOpenChargeModal(true);
		} else if (chargeData?.message && chargeData?.message !== '') {
			setOpenPopPayment(false);
			pushNotification.success('Your subscription is created successfully');
			userActions.getUserInfo();
		}
	}, [chargeData]);
	useEffect(() => {
		if (subscriptionCanceled) {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.SUBSCRIPTION_CANCELED);
			setOpenCancelModal(false);
			settingsDispatcher.setCurrentSubscription({ isSubscribed: false });
			pushNotification.success('Your subscription canceled successfully');
		}
	}, [subscriptionCanceled]);
	useEffect(() => {
		if (isCancelingSubscription) setOpenCancelModal(false);
	}, [isCancelingSubscription]);

	const handleCharge = (quantity: string) => {
		if (!paymentMethod?._id || paymentMethod._id === '') settingsAction.getPaymentMethod();
		if (Object.keys(billingInfo).length === 0) settingsAction.getBillingInfo();
		setQuantity(parseInt(quantity));
		setOpenPopPayment(true);
	};
	const handleOrder = () => {
		if (paymentMethod?._id && paymentMethod?._id !== '') {
			const tmp = {
				paymentMethodId: paymentMethod._id,
				quantity: quantity,
			};
			settingsAction.createJobCharge(tmp);
		} else {
			pushNotification.error('There is missing informations, please check your credit card and billing informations');
		}
	};

	const handleCancel = () => {
		setOpenCancelModal(true);
	};

	return (
		<>
			{openCancelModal && <CancelSubscriptionModal open={openCancelModal} onClose={() => setOpenCancelModal(false)} />}
			{openChargeModal && (
				<ChargePopModal
					message={chargeData?.message}
					paymentUrl={chargeData?.paymentUrl}
					open={openChargeModal}
					onClose={() => setOpenChargeModal(false)}
				/>
			)}
			{openPopPayment && (
				<PaymentPopModal
					isLoading={isCreatingCharge}
					onPlaceOrder={handleOrder}
					open={openPopPayment}
					onClose={() => setOpenPopPayment(false)}
					amount={isNaN(quantity * (currentSubscription?.renewJob ?? 0)) ? 0 : quantity * (currentSubscription?.renewJob ?? 0)}
					orderTitle={'PayGo'}
					description={`Pay now and enjoy posting ${quantity} jobs`}
				/>
			)}
			<div>
				<HeaderContainer justify="space-between">
					<StyledHeadline variant="h2" size="sm">
						Your Current Subscription
					</StyledHeadline>
				</HeaderContainer>
				<FlexBox gap={15} align="start">
					<SContainer width="70%">
						{isCancelingSubscription || isLoading ? (
							<FlexBox height="250px">
								<LoadingIcon color={colors.PURPLE_2} width="50px" height="50px" />
							</FlexBox>
						) : (
							<>
								<FlexBox justify="space-between">
									{currentSubscription.isSubscribed ? (
										<>
											<FlexBox justify="start" gap={15}>
												<FlexBox>
													<ForOneIcon width="45px" height="45px" />
												</FlexBox>
												<div>
													<SH2>{currentSubscription?.title} Subscription</SH2>
													<SSpan>{currentSubscription.subscriptionType}</SSpan>
												</div>
											</FlexBox>
											<Button color="red" size="md" onClick={handleCancel}>
												Cancel
											</Button>
										</>
									) : (
										<SH2>
											Your staak account is <span style={{ color: `${colors.PURPLE_BASE}` }}>Basic</span>
										</SH2>
									)}
								</FlexBox>
								<HrDivider top={10} />
								{currentSubscription.isSubscribed ? (
									<div>
										<div style={{ padding: '0 0 10px 0', lineHeight: '1.8rem' }}>
											{currentSubscription.features?.map((elem, idx) => {
												return (
													<FlexBox key={idx} gap={5} justify="start">
														<CSpan>{elem.displayText}</CSpan>
													</FlexBox>
												);
											})}
											<FlexBox gap={10} justify="end" className="mt-10">
												<CSpan>Experation Date</CSpan>
												<PSpan></PSpan>
												<RSpan>
													{currentSubscription?.expireAt && currentSubscription?.expireAt !== ''
														? new Date(currentSubscription?.expireAt).toUTCString()
														: 'unknown'}
												</RSpan>
											</FlexBox>
										</div>
									</div>
								) : (
									<FlexBox flexDirection="column">
										<FlexBox>
											<SubscriptionIcon width="120px" height="120px" />
										</FlexBox>
										<h4>No subscription yet</h4>
									</FlexBox>
								)}
								<HrDivider />
								<FlexBox justify="space-between" className="mt-10">
									<TSpan>Total</TSpan>
									<CostSpan>
										{currentSubscription.isSubscribed
											? `${currentSubscription.amount} ${CCurrency[currentSubscription?.currency as any] ?? '$'}`
											: '-'}
									</CostSpan>
								</FlexBox>
							</>
						)}
					</SContainer>
					<SContainer width="30%">
						<CSpan>Questions about subscription options or you need assistance?</CSpan>
						<SDiv className="mt-10">Get in contact with our sales team</SDiv>
						<Button width="100%" variant="light" size="md" className="mt-20">
							Contact US
						</Button>
					</SContainer>
				</FlexBox>
			</div>
			{currentSubscription.isSubscribed && currentSubscription?.title !== 'Infinity' && (
				<div className="mt-20">
					<HeaderContainer justify="start">
						<StyledHeadline variant="h2" size="sm">
							Pay as you go
						</StyledHeadline>
					</HeaderContainer>
					<PayGo renewJob={currentSubscription?.renewJob} onSubscribe={handleCharge} />
				</div>
			)}
		</>
	);
};

export default CurrentSubscription;
