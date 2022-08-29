import TalentContact from '@/components/companies/messages/TalentContact';
import { FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import LoadingData from '@/components/common/LoadingData';
const SLink = styled(Link)`
	width: 100%;
`;
const ContactList = () => {
	const { contacts, isLoading } = useAppSelector((state) => state.companyMessage);
	const { userInfo } = useAppSelector((state) => state.user);
	const { chatId } = useParams();
	const handleClick = (id: string) => {
		console.log(id);
	};
	return (
		<FlexBox flexDirection="column" gap={15} align="start">
			{isLoading ? (
				<FlexBox width="90%" flexDirection="column" align="start" gap={40}>
					{[...new Array(7).keys()].map((elem) => {
						return <LoadingData />;
					})}
				</FlexBox>
			) : (
				contacts?.content?.map((elem, idx) => {
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
								sender={elem.message?.sender === userInfo._id}
								onClick={handleClick}
							/>
						</SLink>
					);
				})
			)}
		</FlexBox>
	);
};

export default ContactList;
