import { colors } from '@/assets/theme';
import ContactList from '@/components/developers/messages/ContactList';
import { messageActions } from '@/modules/actions/developer/messages.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const LeftSide = styled.div`
	width: 25%;
	height: 100%;
	overflow: auto;
	background-color: white;
	padding: 15px 20px;
	border-right: 1px solid ${colors.BLACK_12};
`;

const RightSide = styled.div`
	width: 75%;
	height: 100%;
	background-color: white;
`;

const MessagesView = () => {
	const navigate = useNavigate();
	const { chatId } = useParams();
	const { pathname } = useLocation();
	const { contacts, conversationFetched } = useAppSelector((state) => state.talentMessage);

	useEffect(() => {
		if (contacts?.size === 0) {
			messageActions.getConversations();
		}
	}, []);

	useEffect(() => {
		if (conversationFetched && contacts?.size !== 0) {
			if (pathname === '/messages/' || pathname === '/messages') {
				const id = chatId ? chatId : contacts?.content![0]._id;
				navigate(`/messages/${id}`, { replace: false });
			}
		}
	}, [conversationFetched]);
	return (
		<FlexBox align="start" height="100%">
			<LeftSide>
				<ContactList />
			</LeftSide>
			<RightSide>
				<Outlet />
			</RightSide>
		</FlexBox>
	);
};

export default MessagesView;
