import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import DeveloperHeader from './DeveloperHeader';
import CompanyHeader from './CompanyHeader';
import { ListIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { metadataDispatcher } from '@/modules/actions/metadata.actions';

const SyledContainer = styled.div`
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	border-bottom: 1px solid ${colors.BLACK_12};
	width: 100%;
	height: ${HEADER_HIEGHT}px;
	//padding: 10px 0px;
	z-index: 10;
	background-color: #292961;
	//background-color: rgb(23 20 76 / 92%);
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
	background-color: ${colors.PURPLE_1};
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const HeaderBar = () => {
	const { userType } = useAppSelector(({ user }) => user.userInfo);
	const { appExpanded } = useAppSelector((state) => state.metadata);

	const handleClick = () => {
		metadataDispatcher.setAppExpanded(!appExpanded);
	};

	return (
		<SyledContainer>
			<FlexBox gap={10} width="100%">
				<SIcon onClick={handleClick}>
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
