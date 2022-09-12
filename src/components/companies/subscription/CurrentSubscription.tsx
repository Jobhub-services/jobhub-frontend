import { ForOneIcon, SubscriptionIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Headline, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';

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
	const { currentSubscription } = useAppSelector((state) => state.companySettings);
	const subscribed = (currentSubscription._id && currentSubscription._id !== '') || true;
	return (
		<div>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Your Current Subscription
				</StyledHeadline>
			</HeaderContainer>
			<FlexBox gap={15} align="start">
				<SContainer width="70%">
					<FlexBox justify="space-between">
						{subscribed ? (
							<>
								<FlexBox justify="start" gap={15}>
									<FlexBox>
										<ForOneIcon width="45px" height="45px" />
									</FlexBox>
									<div>
										<SH2>{currentSubscription?.subscription?.title} Subscription</SH2>
										<SSpan>{currentSubscription.interval}</SSpan>
									</div>
								</FlexBox>
								<Button color="red" size="md">
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
					{subscribed ? (
						<div>
							<div style={{ padding: '0 0 15px 0', lineHeight: '1.8rem' }}>
								{currentSubscription.features?.map((elem, idx) => {
									return (
										<FlexBox key={idx} gap={5} justify="start">
											<CSpan>{elem.title}</CSpan>
											<PSpan></PSpan>
											<RSpan>{((elem.total_value as number) ?? 0) - ((elem.current_value as number) ?? 0)} remaining</RSpan>
										</FlexBox>
									);
								})}
								<FlexBox gap={10} justify="start">
									<CSpan>Experation Date</CSpan>
									<PSpan></PSpan>
									<RSpan>5 remaining</RSpan>
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
						<CostSpan>{subscribed ? `${currentSubscription.amount} ${currentSubscription?.currency?.code}` : '-'}</CostSpan>
					</FlexBox>
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
	);
};

export default CurrentSubscription;
