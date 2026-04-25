import { GeneralSettingsIcon, ProtectIcon } from '@/assets/icons';
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
				{/*<NavItem
					className="mb-5"
					icon={<GeneralSettingsIcon width="30px" height="30px" style={{ width: '30px !important', height: '30px !important' }} />}
					width={'93%'}
					active={pathname === `/settings/account`}
					onClick={(event: any) => handleClick('account')}
				>
					<NavItem.Content>General</NavItem.Content>
    </NavItem>*/}
				<SElem justify="start" gap={10} onClick={(e: any) => handleClick('account')} active={pathname === `/settings/account`}>
					<GeneralSettingsIcon width="30px" height="30px" />
					<span>General</span>
				</SElem>
				<SElem justify="start" gap={10} onClick={(e: any) => handleClick('security')} active={pathname === `/settings/security`} className="mt-15">
					<ProtectIcon width="30px" height="30px" />
					<span>Security</span>
				</SElem>
			</FlexBox>
		</MainContainer>
	);
};

export default SideItems;
