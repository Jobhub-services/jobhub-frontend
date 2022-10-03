import { colors } from '@/assets/theme';
import StaakLogo from '@/assets/theme/StaakLogo';
import { StandardProps } from '@/models/component';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const ContainerStyled = styled(FlexBox)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffffa9;
	z-index: 20;
`;
const ProgressBarStyled = styled.div`
	position: relative;
	border-radius: 10px;
	height: 18px;
	width: 260px;
	margin-top: 12px;
	padding: 1px;
	overflow: hidden;
`;
const AnimatedSpan = styled.span`
	transition: 0.2s ease;
	display: block;
	border-radius: 10px;
	height: 100%;
	animation: animateProgressBar 1s linear infinite;
	background-image: linear-gradient(90deg, ${colors.PURPLE_BASE}, ${colors.PURPLE_3}, ${colors.PURPLE_BASE}, ${colors.PURPLE_3});
	background-size: 300% 100%;
`;
export const LoadingScreen = (props: StandardProps) => {
	return (
		<ContainerStyled style={{ ...props.style }} flexDirection="column">
			<StaakLogo size={150} style={{ marginLeft: '-15px' }} />
			<ProgressBarStyled>
				<AnimatedSpan />
			</ProgressBarStyled>
		</ContainerStyled>
	);
};
