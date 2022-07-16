import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { TextAvatarProps } from '@/models/component';
import { colors } from '@/assets/theme';

const SH3 = styled.h3`
	margin: 0;
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SubTitle = styled.span`
	display: block;
	color: ${colors.BLACK_8};
	margin-top: 2px;
	font-size: 13px;
`;

const TextAvatar = (props: TextAvatarProps) => {
	return (
		<FlexBox gap={10} align="flex-start">
			<div>
				<SH3>{props.title}</SH3>
				<SubTitle>{props.subtitle}</SubTitle>
			</div>
		</FlexBox>
	);
};

export default TextAvatar;
