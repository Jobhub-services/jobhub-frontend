import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { TextAvatarProps } from '@/models/component';
import { colors } from '@/assets/theme';

const SH3 = styled.h3`
	margin: 0;
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
