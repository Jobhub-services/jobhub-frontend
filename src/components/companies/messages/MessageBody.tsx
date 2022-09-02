import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import MessageInput from '@/components/companies/messages/MessageInput';
import MessageContentElem from '@/components/companies/messages/MessageContentElem';
import { useAppSelector } from '@/utils/appHooks';
import { messageActions } from '@/modules/actions/company/message.actions';
import { FlexBox } from 'staak-ui';
import EmptyMsg from '@/assets/icons/empty_msg.png';

const MainContainer = styled.div<any>`
	height: 100%;
`;

const SubContainer = styled.div<any>`
	padding: 15px 10px;
	height: calc(100% - ${(props) => props.height}px);
	overflow: auto;
`;

const MessageBody = () => {
	const chatRef = useRef<any>(null);
	const [inputHeight, setInputHeight] = useState(90);
	const [content, setContent] = useState('');
	const { userInfo } = useAppSelector((state) => state.user);
	const { messages, isMessagesLoading, isMessageSending } = useAppSelector((state) => state.companyMessage);

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
			<SubContainer ref={chatRef} height={inputHeight + 50} className="staak_scrollbar">
				{messages?.messages.length === 0 ? (
					<FlexBox height="100%" flexDirection="column">
						<img src={EmptyMsg} alt="Empty" width={200} />
						<FlexBox flexDirection="column">
							<h2 style={{ margin: '5px' }}>Your Conversation is Empty</h2>
							<span>Send Message and Start Conversation</span>
						</FlexBox>
					</FlexBox>
				) : (
					messages?.messages?.map((elem, idx) => {
						return (
							<MessageContentElem
								key={idx}
								messsage={elem.content}
								createdAt={elem.createdAt}
								sender={elem.sender === userInfo._id}
								img={elem.sender === userInfo._id ? userInfo.avatar : messages.userInfo?.avatar}
								status={idx === msgLength - 1 && isMessageSending ? 'loading' : 'sended'}
							/>
						);
					})
				)}
			</SubContainer>
			<MessageInput onHeightChange={handleChange} onSend={sendMessage} value={content} height={inputHeight + 50} />
		</MainContainer>
	);
};

export default MessageBody;
