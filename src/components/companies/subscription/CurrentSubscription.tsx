import { ForOneIcon, RocketIcon, BowlingIcon, LoadingIcon, SubscriptionIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Headline, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { pushNotification } from '@/utils/helpers';
import CancelSubscriptionModal from '@/components/companies/subscription/Modal/CancelSubscriptionModal';
import { TBooleanAttr } from '@/types/company/settings.type';
import PayAsYouGo from '@/components/companies/subscription/currentSubscription/PayAsYouGo';
import ContactUS from '@/components/companies/subscription/currentSubscription/ContactUS';

const HEADER_STEP_HEIGHT = 45;
const CCurrency: any = {
	'United States Dollar': '$',
};

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

const CurrentSubscription = () => {
	const [openCancelModal, setOpenCancelModal] = useState(false);
	const { currentSubscription, isCancelingSubscription, subscriptionCanceled, isLoading } = useAppSelector((state) => state.companySettings);

	useEffect(() => {
		if (!currentSubscription?.subscriptionId || currentSubscription.subscriptionId === '') settingsAction.getCurrentSubscription();
	}, []);

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

	const handleCancel = () => {
		setOpenCancelModal(true);
	};

	return (
		<>
			{openCancelModal && <CancelSubscriptionModal open={openCancelModal} onClose={() => setOpenCancelModal(false)} />}
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
					<ContactUS />
				</FlexBox>
				<PayAsYouGo />
			</div>
		</>
	);
};

export default CurrentSubscription;
