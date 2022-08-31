import { EyeIcon, TrashIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import LoadingData from '@/components/common/LoadingData';
import MessageAvatar from '@/components/developers/messages/MessageAvatar';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/developer/conversation.constants';
import { messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { TBooleanAttr } from '@/types/developer/messages.type';
import { useAppSelector } from '@/utils/appHooks';
import { Link } from 'react-router-dom';
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
	const { messages, isMessagesLoading } = useAppSelector((state) => state.talentMessage);
	const onDelete = () => {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED);
	};
	return (
		<MainContainer justify="space-between">
			{isMessagesLoading ? (
				<LoadingData />
			) : (
				<MessageAvatar img={messages?.userInfo?.avatar} companyName={messages?.userInfo?.companyName} industry={messages?.userInfo?.industry} />
			)}
			<FlexBox>
				<Button startIcon={<TrashIcon />} color="red" size="md" variant="text" onClick={onDelete}>
					Delete
				</Button>

				<Link to={`/companies/detail/${messages?.userInfo?._id}`}>
					<Button startIcon={<EyeIcon />} color="blue" size="md" variant="light">
						Profile
					</Button>
				</Link>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageHeader;
