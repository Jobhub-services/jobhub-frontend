import MessageBody from '@/components/developers/messages/MessageBody';
import MessageHeader from '@/components/developers/messages/MessageHeader';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/developer/conversation.constants';
import { messageActions, messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { useAppSelector } from '@/utils/appHooks';
import { pushNotification } from '@/utils/helpers';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SBody = styled.div`
	background-image: linear-gradient(to bottom right, white, #ededed);
	height: calc(100% - ${MESSAGE_HEADER_HEIGHT}px);
`;
const ConversationView = () => {
	const { contacts, messages, messageErrors } = useAppSelector((state) => state.talentMessage);
	const { chatId } = useParams();

	useEffect(() => {
		if (chatId) {
			if (messages?._id !== chatId) {
				const userInfo = contacts?.content?.find((elem) => elem._id === chatId)?.userInfo;
				messageActions.getMessages(chatId, userInfo);
			}
		}
	}, [chatId]);

	useEffect(() => {
		if (!messages?.userInfo) {
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
			messageDispatcher.setErrors({ fetchStatus: false, content: null });
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
