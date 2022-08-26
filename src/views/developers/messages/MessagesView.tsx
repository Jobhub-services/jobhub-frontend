import { colors } from '@/assets/theme';
import ContactList from '@/components/developers/messages/ContactList';
import MessageBody from '@/components/developers/messages/MessageBody';
import MessageHeader from '@/components/developers/messages/MessageHeader';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/developer/messages.constants';
import { messageActions } from '@/modules/actions/developer/messages.actions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

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
	const { id } = useParams();
	useEffect(() => {
		if (id) messageActions.getMessages(id);
	}, [id]);
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
