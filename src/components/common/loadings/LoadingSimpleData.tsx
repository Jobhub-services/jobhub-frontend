import { ProgressBarStyled, AnimatedSpan } from '@/components/common/loadings/loading.style';
import { StandardProps } from '@/models/component';
import { FlexBox } from 'staak-ui';

const LoadingSimpleData = ({ className, style }: StandardProps) => {
	return (
		<FlexBox style={{ ...style }} flexDirection="column" gap={15} width="100%" align="start" className={className}>
			<ProgressBarStyled width="100%" height="15px">
				<AnimatedSpan />
			</ProgressBarStyled>
			<ProgressBarStyled width="50%" height="15px" className="mt-5">
				<AnimatedSpan />
			</ProgressBarStyled>
			<ProgressBarStyled width="70%" height="15px" className="mt-5">
				<AnimatedSpan />
			</ProgressBarStyled>
		</FlexBox>
	);
};

export default LoadingSimpleData;
