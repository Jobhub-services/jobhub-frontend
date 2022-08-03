import { colors } from '@/assets/theme';
import SecurityElem from '@/components/developers/settings/SecurityElem';
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
const SecuritySettings = () => {
	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Security & Connexion
				</StyledHeadline>
			</HeaderContainer>
			<SecurityElem />
		</>
	);
};

export default SecuritySettings;
