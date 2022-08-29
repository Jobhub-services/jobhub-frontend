import { FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import CompanyContact from '@/components/developers/messages/CompanyContact';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
	width: 100%;
`;

const ContactList = () => {
	const { contacts } = useAppSelector((state) => state.talentMessage);
	const { userInfo } = useAppSelector((state) => state.user);
	const { chatId } = useParams();
	return (
		<FlexBox flexDirection="column" gap={15}>
			{contacts?.content?.map((elem, idx) => {
				return (
					<SLink to={`/messages/${elem._id}`} key={idx}>
						<CompanyContact
							_id={elem._id}
							active={chatId === elem._id}
							message={elem.message.content}
							lastDate={elem.message.createdAt}
							img={elem.userInfo?.avatar}
							companyName={elem.userInfo?.companyName}
							sender={elem.message?.sender === userInfo._id}
						/>
					</SLink>
				);
			})}
		</FlexBox>
	);
};

export default ContactList;
