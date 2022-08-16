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
	const { str } = useParams();
	return (
		<FlexBox flexDirection="column" gap={15}>
			{contacts?.content?.map((elem, idx) => {
				return (
					<SLink to={`/messages/${elem._id}`}>
						<TalentContact
							_id={elem._id}
							active={str === elem._id}
							message={elem.message}
							lastDate={elem.lastDate}
							img={elem.avatar}
							firstname={elem.firstName}
							lastname={elem.lastName}
						/>
					</SLink>
				);
			})}
		</FlexBox>
	);
};

export default ContactList;
