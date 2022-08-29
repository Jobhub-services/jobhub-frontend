import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import MessageContentElem from '@/components/developers/messages/MessageContentElem';
import MessageInput from '@/components/developers/messages/MessageInput';
import { messageActions, messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useRef, useState } from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import EmptyMsg from '@/assets/icons/empty_msg.png';

const MainContainer = styled.div<any>`
	height: 100%;
`;
const SubContainer = styled.div<any>`
	padding: 15px 10px;
	height: calc(100% - ${(props) => props.height}px);
	overflow: auto;
`;
const LoadingScreen = styled(FlexBox)`
	height: calc(100% - ${(props) => props.height}px) !important;
`;

const MessageBody = () => {
	//const websocket = new WebSocketManager();
	const chatRef = useRef<any>(null);
	const [inputHeight, setInputHeight] = useState(90);
	const [content, setContent] = useState('');
	const { messages, isMessageSending, isMessagesLoading } = useAppSelector((state) => state.talentMessage);
	const { userInfo } = useAppSelector((state) => state.user);

	useEffect(() => {
		if (chatRef && chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}, [isMessagesLoading]);
	useEffect(() => {
		if (chatRef && chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}, [messages]);

	const handleChange = (h: number, value: string) => {
		setInputHeight(h);
		setContent(value);
	};
	const sendMessage = () => {
		if (content && content !== '') {
			messageActions.addMessage({ chatId: messages?._id, sender: userInfo._id, content: content });
			setContent('');
		}
	};
	const msgLength = messages?.messages?.length ?? 0;
	return (
		<MainContainer>
			{isMessagesLoading ? (
				<LoadingScreen height={inputHeight + 50}>
					<LoadingIcon color={colors.PURPLE_2} width="65px" height="65px" />
				</LoadingScreen>
			) : (
				<SubContainer ref={chatRef} height={inputHeight + 50} className="staak_scrollbar">
					{messages?.messages.length === 0 ? (
						<FlexBox height="100%" flexDirection="column">
							<img src={EmptyMsg} alt="Empty" width={200} />
							<div style={{ textAlign: 'center' }}>
								<span>Send message and start conversation</span>
							</div>
						</FlexBox>
					) : (
						messages?.messages.map((elem, idx) => {
							return (
								<MessageContentElem
									key={idx}
									messsage={elem.content}
									createdAt={elem.createdAt}
									sender={elem.sender === userInfo._id}
									img={elem.sender === userInfo._id ? userInfo.avatar : messages.userInfo?.avatar}
									loading={idx === msgLength - 1 && isMessageSending}
								/>
							);
						})
					)}
				</SubContainer>
			)}
			<MessageInput onHeightChange={handleChange} onSend={sendMessage} value={content} height={inputHeight + 50} />
		</MainContainer>
	);
};

export default MessageBody;
