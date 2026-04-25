import { BillingIcon, GeneralSettingsIcon, PaymentIcon, ProtectIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { FlexBox, Headline } from 'staak-ui';
import styled, { css } from 'styled-components';

const HEADER_STEP_HEIGHT = 45;

const MainContainer = styled.div`
	width: 15%;
	background-color: white;
`;
const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const SElem = styled(FlexBox)`
	padding: 10px 15px;
	transition: all 0.2s;
	border-radius: 8px;
	cursor: pointer;
	width: 95%;
	${(props) =>
		props.active &&
		css`
			background-color: ${colors.PURPLE_1};
		`}
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const HeaderContainer = styled.div`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 20px;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SideItems = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		navigate(`/settings/${path}`);
	};
	return (
		<MainContainer>
			<HeaderContainer>
				<StyledHeadline variant="h2" size="sm">
					Settings
				</StyledHeadline>
			</HeaderContainer>
			<FlexBox flexDirection="column" align="start" className="mt-20" style={{ padding: '0 10px 10px 10px' }}>
				<SElem justify="start" gap={10} onClick={(e: any) => handleClick('account')} active={pathname === `/settings/account`}>
					<FlexBox>
						<GeneralSettingsIcon width="30px" height="30px" />
					</FlexBox>
					<span>General</span>
				</SElem>
				<SElem justify="start" gap={10} onClick={(e: any) => handleClick('security')} active={pathname === `/settings/security`} className="mt-15">
					<FlexBox>
						<ProtectIcon width="30px" height="30px" />
					</FlexBox>
					<span>Security</span>
				</SElem>
				<SElem
					justify="start"
					gap={10}
					onClick={(e: any) => handleClick('subscription')}
					active={pathname === `/settings/subscription`}
					className="mt-15"
				>
					<FlexBox>
						<PaymentIcon width="30px" height="30px" />
					</FlexBox>
					<span>Subscription</span>
				</SElem>
				<SElem justify="start" gap={10} onClick={(e: any) => handleClick('billing')} active={pathname === `/settings/billing`} className="mt-15">
					<FlexBox>
						<BillingIcon width="30px" height="30px" />
					</FlexBox>
					<span>Billing</span>
				</SElem>
			</FlexBox>
		</MainContainer>
	);
};

export default SideItems;
