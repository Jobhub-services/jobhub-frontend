import MessageHeader from '@/components/companies/messages/MessageHeader';
import MessageBody from '@/components/companies/messages/MessageBody';
import styled from 'styled-components';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/company/conversation.constants';
import { useEffect } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { useParams } from 'react-router-dom';
import { messageActions } from '@/modules/actions/company/message.actions';

const SBody = styled.div`
	background-image: linear-gradient(to bottom right, white, #ededed);
	height: calc(100% - ${MESSAGE_HEADER_HEIGHT}px);
`;
const ConversationView = () => {
	const { contacts, messages } = useAppSelector((state) => state.companyMessage);
	const { chatId } = useParams();
	useEffect(() => {
		if (chatId) {
			if (messages?._id !== chatId) {
				const userInfo = contacts?.content?.find((elem) => elem._id === chatId)?.userInfo;
				messageActions.getMessages(chatId, userInfo);
			}
		}
	}, [chatId]);
	return (
		<>
			<MessageHeader />
			<SBody>
				<MessageBody />
			</SBody>
		</>
	);
};

export default ConversationView;
