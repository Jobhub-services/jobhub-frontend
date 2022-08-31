import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const PROGRESS_WIDTH = 60;
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
const SubContainer = styled.div`
	width: calc(100% - ${PROGRESS_WIDTH}px);
`;
const LoadingData = () => {
	return (
		<FlexBox width="100%" justify="start" gap={10}>
			<ProgressBarStyled width={`${PROGRESS_WIDTH}px`} height={`${PROGRESS_WIDTH}px`} radius="100%">
				<AnimatedSpan />
			</ProgressBarStyled>
			<SubContainer>
				<ProgressBarStyled width="100%" height="15px">
					<AnimatedSpan />
				</ProgressBarStyled>
				<ProgressBarStyled width="70%" height="15px" className="mt-5">
					<AnimatedSpan />
				</ProgressBarStyled>
			</SubContainer>
		</FlexBox>
	);
};

export default LoadingData;
