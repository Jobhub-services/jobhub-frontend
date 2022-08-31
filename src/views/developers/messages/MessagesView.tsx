import { colors } from '@/assets/theme';
import ContactList from '@/components/developers/messages/ContactList';
import { messageActions, messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { useAppSelector } from '@/utils/appHooks';
import { checkScrollToButtom } from '@/utils/helpers';
import { useEffect, useState } from 'react';
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
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		if (contacts?.size === 0) {
			const params = {
				page: 0,
				limit: 10,
			};
			messageActions.getConversations(params);
		}
		return function cleanup() {
			messageDispatcher.setConversations({}, true);
		};
	}, []);

	useEffect(() => {
		if (conversationFetched && contacts?.size !== 0) {
			if (pathname === '/messages/' || pathname === '/messages') {
				const id = chatId ? chatId : contacts?.content![0]._id;
				navigate(`/messages/${id}`, { replace: false });
			}
		}
	}, [conversationFetched]);

	useEffect(() => {
		setIsFetching(false);
	}, [contacts]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (contacts?.page! < contacts?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					const params = {
						page: contacts?.page ?? 0,
						limit: 10,
					};
					messageActions.getConversations(params);
				}
			}
		}
	};

	return (
		<FlexBox align="start" height="100%">
			<LeftSide onScroll={handleScroll}>
				<ContactList />
			</LeftSide>
			<RightSide>
				<Outlet />
			</RightSide>
		</FlexBox>
	);
};

export default MessagesView;
