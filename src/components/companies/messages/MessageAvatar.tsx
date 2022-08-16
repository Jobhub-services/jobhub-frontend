import { colors } from '@/assets/theme';
import Avatar from '@/components/companies/messages/Avatar';
import { PMessageAvatar } from '@/models/component/companies/messages/messages.interface';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const IMG_SIZE = 65;

const SInfo = styled.div`
	width: calc(100% - ${IMG_SIZE}px);
`;

const SH2 = styled.h2`
	font-size: 16px;
	margin: 2px 0;
	color: ${colors.BLACK_4};
	font-weight: 500;
`;
const SSpan = styled.span`
	display: block;
	font-size: 13px;
	color: ${colors.BLACK_7};
`;
const MessageAvatar = (props: PMessageAvatar) => {
	return (
		<FlexBox gap={10}>
			<Avatar img={props.img} size={IMG_SIZE} />
			<SInfo>
				<SH2>
					{props.firstname} {props.lastname}
				</SH2>
				<SSpan>{props.role}</SSpan>
				{props.experience && props.experience !== '' && <SSpan>{props.experience} of experience</SSpan>}
			</SInfo>
		</FlexBox>
	);
};

export default MessageAvatar;
