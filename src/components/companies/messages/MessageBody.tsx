import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import MessageInput from '@/components/companies/messages/MessageInput';
import MessageContentElem from '@/components/companies/messages/MessageContentElem';
import { useAppSelector } from '@/utils/appHooks';
import { TMessage } from '@/types/company/messages.type';
import { messageDispatcher } from '@/modules/actions/company/message.actions';
import { LoadingIcon } from '@/assets/icons';
import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';

const LoadingScreen = styled(FlexBox)`
	height: calc(100% - ${(props) => props.height}px) !important;
`;
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
	const { messages, isLoading } = useAppSelector((state) => state.companyMessage);
	const [content, setContent] = useState('');

	useEffect(() => {
		if (chatRef && chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
	}, [messages]);
	const handleChange = (h: number, value: string) => {
		setInputHeight(h);
		setContent(value);
	};
	const sendMessage = () => {
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
								date={elem.date}
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
