import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import ContactList from '@/components/companies/messages/ContactList';
import MessageHeader from '@/components/companies/messages/MessageHeader';
import MessageBody from '@/components/companies/messages/MessageBody';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { messageActions } from '@/modules/actions/company/message.actions';

const MESSAGE_HEADER_HEIGHT = 100;

const LeftSide = styled.div`
	width: 25%;
	height: 100%;
	background-color: white;
	padding: 15px 20px;
	border-right: 1px solid ${colors.BLACK_12};
`;

const RightSide = styled.div`
	width: 75%;
	height: 100%;
	background-color: white;
`;

const SBody = styled.div`
	background-image: linear-gradient(to bottom right, white, #ededed);
	height: calc(100% - ${MESSAGE_HEADER_HEIGHT}px);
`;

const MessagesView = () => {
	const { str } = useParams();
	useEffect(() => {
		if (str) messageActions.getMessages(str);
	}, [str]);
	return (
		<FlexBox align="start" height="100%">
			<LeftSide>
				<ContactList />
			</LeftSide>
			<RightSide>
				<MessageHeader />
				<SBody>
					<MessageBody />
				</SBody>
			</RightSide>
		</FlexBox>
	);
};

export default MessagesView;
