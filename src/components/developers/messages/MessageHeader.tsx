import { EyeIcon, TrashIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import MessageAvatar from '@/components/developers/messages/MessageAvatar';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/developer/messages.constants';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const MainContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 15px 15px;
	height: ${MESSAGE_HEADER_HEIGHT}px;
	//box-shadow: 0 0 4px 0 #d2d9e5;
	//box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const MessageHeader = () => {
	const { messages } = useAppSelector((state) => state.talentMessage);
	return (
		<MainContainer justify="space-between">
			<MessageAvatar img={messages?.userInfo?.avatar} companyName={messages?.userInfo?.companyName} industry={messages?.userInfo?.industry} />
			<FlexBox>
				<Button startIcon={<TrashIcon />} color="red" size="md" variant="text">
					Delete
				</Button>
				<Button startIcon={<EyeIcon />} color="green" size="md" variant="text">
					View Profile
				</Button>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageHeader;
