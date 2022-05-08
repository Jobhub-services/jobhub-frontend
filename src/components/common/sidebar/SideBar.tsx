import { CompaniesOverview } from '@/models/component';
import styled from 'styled-components';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { FlexBox } from 'staak-ui';
import { ASIDE_WIDTH } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import CompanySide from './CompanySIde';
import DeveloperSide from './DeveloperSIde';

const SyledContainer = styled.div<CompaniesOverview.SideBarProps>`
	border-right: 1px solid ${Colors.BLACK_12};
	background-color: ${Colors.WHITE};
	width: ${ASIDE_WIDTH}px;
	height: 100%;
	padding: 0px 10px 0px 0px;
`;
const SideBar = (props: CompaniesOverview.SideBarProps) => {
	const { userType } = useAppSelector(({ user }) => user.userInfo);
	return (
		<SyledContainer width={props.width}>
			<FlexBox flexDirection="column" align="flex-start" style={{ marginTop: '10px' }}>
				{userType === 'company' ? <CompanySide /> : userType === 'developer' && <DeveloperSide />}
			</FlexBox>
		</SyledContainer>
	);
};

SideBar.defaultProps = {
	width: '260px',
};
export default SideBar;
