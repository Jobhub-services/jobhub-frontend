import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const ContainerStyled = styled(FlexBox)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #70628736;
	z-index: 20;
`;
const SimpleLoading = ({ color }: { color?: string }) => {
	return (
		<ContainerStyled flexDirection="column">
			<LoadingIcon width="80px" height="80px" color={color ?? colors.PURPLE_BASE} />
		</ContainerStyled>
	);
};

export default SimpleLoading;
