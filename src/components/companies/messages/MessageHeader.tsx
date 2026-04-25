import { colors } from '@/assets/theme';
import styled from 'styled-components';
import MessageAvatar from '@/components/companies/messages/MessageAvatar';
import { Button, FlexBox, TrashIcon } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { MESSAGE_HEADER_HEIGHT } from '@/constants/company/conversation.constants';
import { EyeIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { messageDispatcher } from '@/modules/actions/company/message.actions';
import { TBooleanAttr } from '@/types/company/messages.type';

const MainContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 15px 25px;
	height: ${MESSAGE_HEADER_HEIGHT}px;
`;
const BRadius = styled(Button)`
	border-radius: 50%;
`;
const MessageHeader = () => {
	const { messages } = useAppSelector((state) => state.companyMessage);
	const onDelete = () => {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED);
	};
	return (
		<MainContainer justify="space-between">
			<MessageAvatar
				img={messages?.userInfo?.avatar}
				firstname={messages?.userInfo?.firstName}
				lastname={messages?.userInfo?.lastName}
				role={messages?.userInfo?.role}
				experience={messages?.userInfo?.experience}
			/>
			<FlexBox gap={10}>
				<BRadius icon={<TrashIcon />} iconColor="white" circle color="red" onClick={onDelete}></BRadius>
				<Link to={`/talents/detail/${messages?.userInfo?._id}`} state={{ onlyDetail: true }}>
					<BRadius icon={<EyeIcon />} iconColor="white" circle color="blue"></BRadius>
				</Link>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageHeader;
