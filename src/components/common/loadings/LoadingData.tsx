import { FlexBox } from 'staak-ui';
import { ProgressBarStyled, AnimatedSpan } from '@/components/common/loadings/loading.style';
import styled from 'styled-components';

const PROGRESS_WIDTH = 60;

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
