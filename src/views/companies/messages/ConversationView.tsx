import MessageHeader from '@/components/companies/messages/MessageHeader';
import MessageBody from '@/components/companies/messages/MessageBody';
import styled from 'styled-components';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/company/conversation.constants';
import { useEffect } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { useParams } from 'react-router-dom';
import { messageActions, messageDispatcher } from '@/modules/actions/company/message.actions';
import { pushNotification } from '@/utils/helpers';

const SBody = styled.div`
	background-image: linear-gradient(to bottom right, white, #ededed);
	height: calc(100% - ${MESSAGE_HEADER_HEIGHT}px);
`;
const ConversationView = () => {
	const { contacts, messages, messageErrors } = useAppSelector((state) => state.companyMessage);
	const { chatId } = useParams();
	useEffect(() => {
		if (chatId) {
			if (messages?._id !== chatId) {
				if (messageErrors?.fetchStatus) {
					messageDispatcher.setErrors({ fetchStatus: false, content: null });
				} else {
					const userInfo = contacts?.content?.find((elem) => elem._id === chatId)?.userInfo;
					messageActions.getMessages(chatId, userInfo);
				}
			}
		}
	}, [chatId]);
	useEffect(() => {
		if (!messages?.userInfo || messages?.userInfo?._id === '') {
			const userInfo = contacts?.content?.find((elem) => elem._id === chatId)?.userInfo;
			messageDispatcher.setMessages(messages, userInfo);
		}
	}, [contacts]);
	useEffect(() => {
		if (!messages?.userInfo || messages?.userInfo?._id === '') {
			const userInfo = contacts?.content?.find((elem) => elem._id === chatId)?.userInfo;
			if (userInfo) messageDispatcher.setMessages(messages, userInfo);
		}
	}, [messages]);
	useEffect(() => {
		if (messageErrors?.fetchStatus) {
			pushNotification.error(messageErrors.content);
		}
	}, [messageErrors]);

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
