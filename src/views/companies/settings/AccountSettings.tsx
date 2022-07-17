import { colors } from '@/assets/theme';
import AccountElem from '@/components/companies/settings/AccountElem';
import { Headline, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const HEADER_STEP_HEIGHT = 45;

const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 20px;
	height: ${HEADER_STEP_HEIGHT}px;
`;

const AccountSettings = () => {
	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					General account settings
				</StyledHeadline>
			</HeaderContainer>
			<AccountElem />
		</>
	);
};

export default AccountSettings;
