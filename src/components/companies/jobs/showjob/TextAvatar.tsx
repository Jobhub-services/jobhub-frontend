import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { twoFirstLetter } from '@/utils/helpers';
import { TextAvatarProps } from '@/models/component';
import { TextAvatarColors } from '@/constants/company/job.contants';
const St = styled.div<TextAvatarProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	background-color: ${(props) => TextAvatarColors[props.bColor!]};
	border-radius: 50%;
`;
const SSpan = styled.span`
	font-size: 12px;
`;
const SGap = styled(FlexBox)`
	gap: ${(props) => props.gap}px;
`;
const TextAvatar = (props: TextAvatarProps) => {
	const numb: number = Math.floor(Math.random() * TextAvatarColors.length);
	return (
		<SGap gap={10} align="flex-start">
			<St bColor={numb}>{twoFirstLetter(props.title!)}</St>
			<div>
				<div>
					<strong>{props.title}</strong>
				</div>
				<SSpan>{props.subtitle}</SSpan>
			</div>
		</SGap>
	);
};

export default TextAvatar;
