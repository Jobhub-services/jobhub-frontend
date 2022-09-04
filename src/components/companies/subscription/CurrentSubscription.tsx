import { ForOneIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Headline, HrDivider } from 'staak-ui';
import styled from 'styled-components';

const HEADER_STEP_HEIGHT = 45;

const SH2 = styled.h2`
	font-size: 1.6rem;
	margin: 0;
	color: ${colors.BLACK_3};
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
	font-size: 16px;
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const CostSpan = styled.span`
	font-size: 1.5rem;
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
	return (
		<div>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Your Current Subscription
				</StyledHeadline>
			</HeaderContainer>
			<FlexBox gap={15} align="start">
				<SContainer width="70%">
					<FlexBox justify="start" gap={15}>
						<span>
							<ForOneIcon width="55px" height="55px" />
						</span>
						<SH2>For One Subscription</SH2>
					</FlexBox>
					<HrDivider />
					<div style={{ padding: '15px 0', lineHeight: '1.8rem' }}>
						<FlexBox gap={5} justify="start">
							<CSpan>3 jobs</CSpan>
							<PSpan></PSpan>
							<RSpan>1 remaining</RSpan>
						</FlexBox>

						<FlexBox gap={10} justify="start">
							<CSpan>25 contacts</CSpan>
							<PSpan></PSpan>
							<RSpan>5 remaining</RSpan>
						</FlexBox>
					</div>
					<HrDivider />
					<FlexBox justify="space-between">
						<TSpan>Total</TSpan>
						<CostSpan>1250$</CostSpan>
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
