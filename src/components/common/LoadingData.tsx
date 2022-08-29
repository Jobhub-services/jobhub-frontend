import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const ProgressBarStyled = styled.div<any>`
	position: relative;
	border-radius: ${(props) => props.radius ?? '10px'};
	height: ${(props) => props.height ?? '15px'};
	width: ${(props) => props.width ?? '260px'};
	//margin-top: 12px;
	padding: 1px;
	overflow: hidden;
`;
const AnimatedSpan = styled.span`
	transition: 0.2s ease;
	display: block;
	border-radius: 10px;
	height: 100%;
	animation: animateProgressBar 1s linear infinite;
	background-image: linear-gradient(90deg, ${'#e0e0e085'}, ${colors.BLACK_13}, ${'#e0e0e085'}, ${colors.BLACK_13});
	background-size: 300% 100%;
`;
const LoadingData = () => {
	return (
		<FlexBox width="100%" justify="start" gap={10}>
			<ProgressBarStyled width="50px" height="50px" radius="100%">
				<AnimatedSpan />
			</ProgressBarStyled>
			<ProgressBarStyled width="80%" height="18px">
				<AnimatedSpan />
			</ProgressBarStyled>
		</FlexBox>
	);
};

export default LoadingData;
