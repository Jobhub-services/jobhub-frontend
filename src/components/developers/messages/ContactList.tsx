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
	const { id } = useParams();
	return (
		<FlexBox flexDirection="column" gap={15}>
			{contacts?.content?.map((elem, idx) => {
				return (
					<SLink to={`/messages/${elem._id}`}>
						<CompanyContact
							_id={elem._id}
							key={idx}
							active={id === elem._id}
							message={elem.message}
							lastDate={elem.lastDate}
							img={elem.avatar}
							companyName={elem.companyName}
							sender={elem.sended}
						/>
					</SLink>
				);
			})}
		</FlexBox>
	);
};

export default ContactList;
