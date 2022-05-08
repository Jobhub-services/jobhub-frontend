import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import DeveloperHeader from './DeveloperHeader';
import CompanyHeader from './CompanyHeader';

const SyledContainer = styled.div`
	position: sticky;
	top: 0;
	border-bottom: 1px solid ${colors.BLACK_12};
	width: 100%;
	height: ${HEADER_HIEGHT}px;
	padding: 10px 0px;
	z-index: 10;
	background: ${colors.WHITE};
`;

const SContainer = styled(FlexBox)`
	padding: 0px 30px !important;
`;

const HeaderBar = () => {
	const { userType } = useAppSelector(({ user }) => user.userInfo);
	return (
		<SyledContainer>
			<SContainer justify="space-between">{userType === 'developer' ? <DeveloperHeader /> : userType === 'company' && <CompanyHeader />}</SContainer>
		</SyledContainer>
	);
};
HeaderBar.defaultProps = {
	width: '100%',
};
export default HeaderBar;
