import styled from 'styled-components';
import { CompaniesOverview } from '@/models/component';
import { SearchInput, FlexBox, Button } from 'staak-ui';
import { PlusIcon, Colors } from 'staak-ui';
import { IconDropDown, AvatarDropDown } from '@/components/companies/_common/dropdown';
import { useNavigate } from 'react-router-dom';
import { HEADER_HIEGHT } from '@/constants/app.constants';

const SyledContainer = styled.div<CompaniesOverview.HeaderBarProps>`
	position: sticky;
	top: 0;
	border-bottom: 1px solid ${Colors.BLACK_12};
	width: 100%;
	height: ${HEADER_HIEGHT}px;
	padding: 10px 0px;
	z-index: 10;
	background: ${Colors.WHITE};
`;
const StyledFlexContainer = styled(FlexBox)`
	padding: 0px 30px !important;
`;
const StyledNewJobButton = styled.span`
	margin-right: 35px;
`;
const HeaderBar = (props: CompaniesOverview.HeaderBarProps) => {
	const navigate = useNavigate();
	return (
		<SyledContainer>
			<StyledFlexContainer justify="space-between">
				<SearchInput placeholder="Search Talents" width="350px" />
				<FlexBox justify="space-between">
					<StyledNewJobButton>
						<Button
							startIcon={<PlusIcon />}
							onClick={(event: React.SyntheticEvent) => {
								navigate('jobs/new', { replace: true });
							}}
						>
							Create New Job
						</Button>
					</StyledNewJobButton>
					<FlexBox width="160px" justify="space-between">
						<IconDropDown />
						<AvatarDropDown />
					</FlexBox>
				</FlexBox>
			</StyledFlexContainer>
		</SyledContainer>
	);
};
HeaderBar.defaultProps = {
	width: '100%',
};
export default HeaderBar;
