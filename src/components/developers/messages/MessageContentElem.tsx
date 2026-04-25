import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { PMessageContentElem } from '@/models/component/developer/messages.interface';
import Avatar from '@/components/common/Avatar';
import { dateToString } from '@/utils/helpers';
import { FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';

const SFlexBox = styled(FlexBox)`
	max-width: 60%;
`;
const SMessage = styled.pre<any>`
	background-color: ${(props) => (props.sender ? colors.PURPLE_2 : colors.GRAY_1)};
	color: ${(props) => (props.sender ? 'white' : colors.BLACK_3)};
	font-family: inherit;
	white-space: pre-line;
	//max-width: 60%;
	padding: 10px 15px;
	border-radius: 10px;
	${(props) =>
		props.sender
			? css`
					border-bottom-right-radius: 0;
			  `
			: css`
					border-bottom-left-radius: 0;
			  `}
	line-height: 1.7em;
`;

const SSpan = styled.span`
	font-size: 13px;
	color: ${colors.BLACK_8};
`;

const MessageContentELem = (props: PMessageContentElem) => {
	const dateStr = dateToString(props.createdAt ?? '');
	return (
		<FlexBox justify={props.sender ? 'end' : 'start'} style={{ padding: '10px 0' }}>
			<SFlexBox gap={5} align="end" flexDirection={props.sender ? 'row-reverse' : 'row'}>
				{props.sender && props.loading ? (
					<div>
						<LoadingIcon color={colors.PURPLE_2} />
					</div>
				) : (
					<Avatar img={props.img} size={30} />
				)}
				<FlexBox style={{ width: `calc(100% - 32px)` }} flexDirection="column" align={props.sender ? 'end' : 'start'}>
					<SMessage sender={props.sender}>{props.messsage}</SMessage>
					{props.createdAt && <SSpan>{dateStr}</SSpan>}
				</FlexBox>
			</SFlexBox>
		</FlexBox>
	);
};

export default MessageContentELem;
