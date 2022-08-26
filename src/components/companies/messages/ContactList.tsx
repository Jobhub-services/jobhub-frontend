import TalentContact from '@/components/companies/messages/TalentContact';
import { FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
const SLink = styled(Link)`
	width: 100%;
`;
const ContactList = () => {
	const { contacts } = useAppSelector((state) => state.companyMessage);
	const { chatId } = useParams();
	return (
		<FlexBox flexDirection="column" gap={15}>
			{contacts?.content?.map((elem, idx) => {
				return (
					<SLink to={`/messages/${elem._id}`} key={idx}>
						<TalentContact
							_id={elem._id}
							active={chatId === elem._id}
							message={elem.message?.content}
							lastDate={elem.message?.createdAt}
							img={elem.userInfo?.avatar}
							firstname={elem.userInfo?.firstName}
							lastname={elem.userInfo?.lastName}
							sender={elem.message?.sender !== elem._id}
						/>
					</SLink>
				);
			})}
		</FlexBox>
	);
};

export default ContactList;
