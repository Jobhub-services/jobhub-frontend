import { colors } from '@/assets/theme';
import styled from 'styled-components';
import MessageAvatar from '@/components/companies/messages/MessageAvatar';
import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';

const MainContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 15px 25px;
	//box-shadow: 0 0 4px 0 #d2d9e5;
	//box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const MessageHeader = () => {
	const { messages } = useAppSelector((state) => state.companyMessage);
	return (
		<MainContainer justify="space-between">
			<MessageAvatar
				img={messages?.userInfo?.avatar}
				firstname={messages?.userInfo?.firstName}
				lastname={messages?.userInfo?.lastName}
				role={messages?.userInfo?.role}
				experience={messages?.userInfo?.experience}
			/>
			<Button variant="light">Profile</Button>
		</MainContainer>
	);
};

export default MessageHeader;
