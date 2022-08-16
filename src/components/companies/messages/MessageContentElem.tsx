import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';
import Avatar from '@/components/companies/messages/Avatar';
import { PMessageContentElem } from '@/models/component/companies/messages/messages.interface';
import { LoadingIcon } from '@/assets/icons';

const options: any = {
	weekday: 'short',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
};
const TimeOptions: any = {
	hour: 'numeric',
	minute: 'numeric',
};
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

const MessageContentElem = (props: PMessageContentElem) => {
	const msgDate = new Date(props.date ?? '');
	const now = new Date();
	const isEqual = now.getDate() === msgDate.getDate() && now.getMonth() === msgDate.getMonth() && now.getFullYear() === msgDate.getFullYear();
	const dateStr = msgDate.toLocaleString('en-US', isEqual ? TimeOptions : options);
	return (
		<FlexBox justify={props.sender ? 'end' : 'start'} style={{ padding: '10px 0' }}>
			<SFlexBox gap={5} align="end" flexDirection={props.sender ? 'row-reverse' : 'row'}>
				{props.sender && props.loading ? <LoadingIcon color={colors.PURPLE_2} /> : <Avatar img={props.img} size={32} />}
				<FlexBox style={{ width: `calc(100% - 32px)` }} flexDirection="column" align={props.sender ? 'end' : 'start'}>
					<SMessage sender={props.sender}>{props.messsage}</SMessage>
					{props.date && <SSpan>{dateStr}</SSpan>}
				</FlexBox>
			</SFlexBox>
		</FlexBox>
	);
};

export default MessageContentElem;
