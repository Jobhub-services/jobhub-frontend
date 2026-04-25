import { EyeIcon, TrashIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
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
`;
const BRadius = styled(Button)`
	border-radius: 50%;
`;
const MessageHeader = () => {
	const { messages } = useAppSelector((state) => state.talentMessage);
	const onDelete = () => {
		messageDispatcher.setBooleanAttr(true, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED);
	};
	return (
		<MainContainer justify="space-between">
			<MessageAvatar img={messages?.userInfo?.avatar} companyName={messages?.userInfo?.companyName} industry={messages?.userInfo?.industry} />
			<FlexBox gap={15}>
				<BRadius icon={<TrashIcon />} iconColor="white" circle color="red" onClick={onDelete}></BRadius>
				<Link to={`/companies/detail/${messages?.userInfo?._id}`} state={{ onlyDetail: true }}>
					<BRadius icon={<EyeIcon />} iconColor="white" circle color="blue"></BRadius>
				</Link>
			</FlexBox>
		</MainContainer>
	);
};

export default MessageHeader;
