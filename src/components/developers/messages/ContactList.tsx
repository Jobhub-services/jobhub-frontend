import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import CompanyContact from '@/components/developers/messages/CompanyContact';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingData from '@/components/common/loadings/LoadingData';
import { PopModel } from '@/components/common';
import { messageDispatcher } from '@/modules/actions/developer/messages.actions';
import { TBooleanAttr } from '@/types/developer/messages.type';

const ContactList = () => {
	const { contacts, isLoading, isDeletePopModalOpened } = useAppSelector((state) => state.talentMessage);
	const { userInfo } = useAppSelector((state) => state.user);
	const { chatId } = useParams();
	const navigate = useNavigate();
	const handleClick = (value: string, userId: string) => {
		if (value === 'view') {
			if (userId && userId !== '') navigate(`/companies/detail/${userId}`);
		} else if (value === 'delete') {
			console.log(value);
		}
	};
	return (
		<>
			<PopModel
				closed={!isDeletePopModalOpened}
				width="35%"
				onClose={() => messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED)}
			>
				<PopModel.Header>
					<strong>Delete Chat</strong>
				</PopModel.Header>
				<PopModel.Body>
					<div>Once you delete your copy of this conversation, it cannot be undone. delete chat</div>
				</PopModel.Body>
				<PopModel.Footer>
					<FlexBox gap={15} width="100%" justify="end">
						<Button variant="light" onClick={() => messageDispatcher.setBooleanAttr(false, TBooleanAttr.IS_DELETE_POP_MODAL_OPENED)}>
							Cancel
						</Button>
						<Button>Delete chat</Button>
					</FlexBox>
				</PopModel.Footer>
			</PopModel>

			<FlexBox flexDirection="column" gap={15}>
				{isLoading ? (
					<FlexBox width="90%" flexDirection="column" align="start" gap={40}>
						{[...new Array(7).keys()].map((elem, idx) => {
							return <LoadingData key={idx} />;
						})}
					</FlexBox>
				) : (
					contacts?.content?.map((elem, idx) => {
						return (
							<CompanyContact
								key={idx}
								_id={elem._id}
								active={chatId === elem._id}
								message={elem.message.content}
								lastDate={elem.message.createdAt}
								img={elem.userInfo?.avatar}
								companyName={elem.userInfo?.companyName}
								sender={elem.message?.sender === userInfo._id}
								userId={elem.userInfo?._id}
								onClick={handleClick}
							/>
						);
					})
				)}
			</FlexBox>
		</>
	);
};

export default ContactList;
