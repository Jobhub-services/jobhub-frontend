import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import MessageContentElem from '@/components/developers/messages/MessageContentElem';
import MessageInput from '@/components/developers/messages/MessageInput';
import { messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { TMessage } from '@/types/developer/messages.type';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useRef, useState } from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { WebSocketManager, WEBSOCKET_OPERATIONS } from '@/services/WebSocketManager';

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
	const websocket = new WebSocketManager();
	const chatRef = useRef<any>(null);
	const [inputHeight, setInputHeight] = useState(90);
	const [content, setContent] = useState('');
	const { messages, isLoading } = useAppSelector((state) => state.talentMessage);

	useEffect(() => {
		if (chatRef && chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}, [messages]);

	const handleChange = (h: number, value: string) => {
		setInputHeight(h);
		setContent(value);
	};
	const sendMessage = () => {
		websocket.subscribeRequestStream(
			WEBSOCKET_OPERATIONS.SUBSCRIBE_PROJECT_USERS,
			{ content: content },
			() => {
				console.log('Execute receive callbacks');
			},
			() => {
				console.log('Execute recovery callbakcs');
			}
		);
		messageDispatcher.addMessage(content, TMessage.SENDED);
		setContent('');
	};
	return (
		<MainContainer>
			{isLoading ? (
				<LoadingScreen height={inputHeight + 50}>
					<LoadingIcon color={colors.PURPLE_2} width="65px" height="65px" />
				</LoadingScreen>
			) : (
				<SubContainer ref={chatRef} height={inputHeight + 50} className="staak_scrollbar">
					{messages?.content.map((elem, idx) => {
						return (
							<MessageContentElem
								key={idx}
								messsage={elem.content}
								createdAt={elem.createdAt}
								sender={elem.type === TMessage.SENDED}
								img={elem.type === TMessage.SENDED ? undefined : messages.userInfo?.avatar}
							/>
						);
					})}
				</SubContainer>
			)}
			<MessageInput onHeightChange={handleChange} onSend={sendMessage} value={content} />
		</MainContainer>
	);
};

export default MessageBody;
