import { SendMessageIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { PMessageInput } from '@/models/component/companies/messages/messages.interface';
import { useRef } from 'react';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const MAX_HEIGHT = 250;

const MainContainer = styled.div`
	border-top: 1px solid ${colors.BLACK_12};
	box-shadow: 0 -1px 4px 0 #d2d9e5;
	padding: 15px 15px;
	height: 130px;
`;
const STextArea = styled.textarea`
	background-color: inherit;
	font-family: inherit;
	max-height: ${MAX_HEIGHT}px;
	min-height: 90px;
	padding: 10px 15px;
	border: none;
	outline: none;
	resize: none;
	width: 100%;
`;
const MessageInput = (props: PMessageInput) => {
	const textareaRef = useRef<any>(null);
	const handleInput = (e: any) => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = 'inherit';
			textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
			if (textareaRef.current.scrollHeight < MAX_HEIGHT)
				if (props.onHeightChange) props.onHeightChange(textareaRef.current.scrollHeight, textareaRef.current.value);
		}
	};
	return (
		<MainContainer>
			<FlexBox gap={10} align="start">
				<STextArea
					style={{ height: '90px' }}
					ref={textareaRef}
					placeholder="Write a message..."
					onInput={handleInput}
					className="staak_scrollbar"
					value={props.value}
				/>
				<Button onClick={props.onSend} endIcon={<SendMessageIcon color="white" />}>
					Send
				</Button>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageInput;
