import { colors } from '@/assets/theme';
import styled from 'styled-components';
import MessageAvatar from '@/components/companies/messages/MessageAvatar';
import { Button, FlexBox, TrashIcon } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/company/conversation.constants';
import { EyeIcon, LoadingIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { messageDispatcher } from '@/modules/actions/company/message.actions';
import LoadingData from '@/components/common/LoadingData';
import { TBooleanAttr } from '@/types/company/messages.type';

const MainContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 15px 25px;
	height: ${MESSAGE_HEADER_HEIGHT}px;
`;

const MessageHeader = () => {
	const { messages, isConversationDeleting, isMessagesLoading } = useAppSelector((state) => state.companyMessage);
	const onDelete = () => {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED);
	};
	return (
		<MainContainer justify="space-between">
			{isMessagesLoading ? (
				<LoadingData />
			) : (
				<MessageAvatar
					img={messages?.userInfo?.avatar}
					firstname={messages?.userInfo?.firstName}
					lastname={messages?.userInfo?.lastName}
					role={messages?.userInfo?.role}
					experience={messages?.userInfo?.experience}
				/>
			)}
			<FlexBox gap={10}>
				{isConversationDeleting ? (
					<Button color="red" size="md" variant="text">
						<LoadingIcon color="red" />
					</Button>
				) : (
					<Button startIcon={<TrashIcon />} color="red" size="md" variant="text" onClick={onDelete}>
						Delete
					</Button>
				)}
				<Link to={`/talents/detail/${messages?.userInfo?._id}`}>
					<Button startIcon={<EyeIcon />} color="blue" size="md" variant="light">
						Profile
					</Button>
				</Link>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageHeader;
