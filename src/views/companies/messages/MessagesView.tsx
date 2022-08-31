import { FlexBox } from 'staak-ui';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { messageActions, messageDispatcher } from '@/modules/actions/company/message.actions';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import ContactList from '@/components/companies/messages/ContactList';
import { checkScrollToButtom } from '@/utils/helpers';

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
	const { contacts, isLoading, conversationFetched } = useAppSelector((state) => state.companyMessage);
	const [isFetching, setIsFetching] = useState(false);
	const { chatId } = useParams();
	const { pathname } = useLocation();
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
			{chatId ? (
				<>
					<LeftSide onScroll={handleScroll}>
						<ContactList />
					</LeftSide>
					<RightSide>
						<Outlet />
					</RightSide>
				</>
			) : (
				<div></div>
			)}
		</FlexBox>
	);
};

export default MessagesView;
