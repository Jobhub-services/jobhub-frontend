import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { twoFirstLetter } from '@/utils/helpers';
import { TextAvatarProps } from '@/models/component';
import { TextAvatarColors } from '@/constants/company/job.contants';
import { colors } from '@/assets/theme';

const SH3 = styled.h3`
	margin: 0;
`;
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
	font-size: 13px;
	color: ${colors.BLACK_7};
	margin-top: 2px;
`;
const SGap = styled(FlexBox)`
	gap: ${(props) => props.gap}px;
`;
const TextAvatar = (props: TextAvatarProps) => {
	const numb: number = Math.floor(Math.random() * TextAvatarColors.length);
	return (
		<SGap gap={10} align="flex-start">
			<div>
				<SH3>{props.title}</SH3>
				<SSpan>{props.subtitle}</SSpan>
			</div>
		</SGap>
	);
};

export default TextAvatar;
