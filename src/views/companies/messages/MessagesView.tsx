import { Button, FlexBox } from 'staak-ui';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { messageActions, messageDispatcher } from '@/modules/actions/company/message.actions';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import ContactList from '@/components/companies/messages/ContactList';
import { checkScrollToButtom } from '@/utils/helpers';
import { TBooleanAttr } from '@/types/company/messages.type';
import EmptyConv from '@/assets/icons/empty_conv.png';
import LoadingData from '@/components/common/loadings/LoadingData';
import LoadingSimpleData from '@/components/common/loadings/LoadingSimpleData';

const SContainer = styled.div`
	padding: 15px 25px;
	height: 100%;
	overflow: auto;
`;
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
	const { contacts, isLoading, isMessagesLoading } = useAppSelector((state) => state.companyMessage);
	const [isFetching, setIsFetching] = useState(false);
	const { chatId } = useParams();
	const { pathname } = useLocation();
	useEffect(() => {
		const params = {
			page: 0,
			limit: 10,
		};
		if (!isLoading) messageActions.getConversations(params);

		return function cleanup() {
			messageDispatcher.setConversations({}, true);
		};
	}, []);

	useEffect(() => {
		setIsFetching(false);
		if (contacts?.size !== 0) {
			if (pathname === '/messages/' || pathname === '/messages') {
				messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_CONVERSATION_FETCHED);
				const id = chatId ? chatId : contacts?.content![0]._id;
				navigate(`/messages/${id}`, { replace: false });
			}
		}
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
			{!isLoading && contacts?.size === 0 ? (
				<FlexBox height="100%" flexDirection="column">
					<img src={EmptyConv} alt="Empty" width={200} />
					<FlexBox className="mt-20" flexDirection="column">
						<h2 style={{ margin: '5px' }}>Your conversation is empty</h2>
						<span>Browse and select a talent to start new conversation</span>
						<Link to="/talents" className="mt-20">
							<Button>Browse Talents</Button>
						</Link>
					</FlexBox>
				</FlexBox>
			) : (
				<>
					<LeftSide onScroll={handleScroll}>
						<ContactList />
					</LeftSide>
					<RightSide>
						{isLoading || isMessagesLoading ? (
							<SContainer>
								<LoadingData />
								<FlexBox width="100%" gap={120} align="start" flexDirection="column" style={{ marginTop: '70px' }}>
									<LoadingSimpleData style={{ width: '60%' }} />
									<LoadingSimpleData style={{ width: '60%', transform: 'rotate(180deg)', alignSelf: 'end' }} />
									<LoadingSimpleData style={{ width: '60%' }} />
								</FlexBox>
							</SContainer>
						) : (
							<Outlet />
						)}
					</RightSide>
				</>
			)}
		</FlexBox>
	);
};

export default MessagesView;
