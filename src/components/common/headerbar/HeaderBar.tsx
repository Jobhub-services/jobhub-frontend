import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import DeveloperHeader from './DeveloperHeader';
import CompanyHeader from './CompanyHeader';
import { ListIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';

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
	padding: 0px 30px 0 0 !important;
	width: 100%;
`;
const SIcon = styled.div`
	display: flex;
	padding: 2px 5px;
	margin-left: 10px;
	cursor: pointer;
	border-radius: 8px;
	transition: all 0.1s ease-in-out;
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const HeaderBar = () => {
	const { userType } = useAppSelector(({ user }) => user.userInfo);
	return (
		<SyledContainer>
			<FlexBox gap={10}>
				<SIcon>
					<ListIcon color={colors.PURPLE_BASE} width="30px" height="30px" />
				</SIcon>
				<SContainer justify="space-between">
					{userType === 'developer' ? <DeveloperHeader /> : userType === 'company' && <CompanyHeader />}
				</SContainer>
			</FlexBox>
		</SyledContainer>
	);
};
HeaderBar.defaultProps = {
	width: '100%',
};
export default HeaderBar;
