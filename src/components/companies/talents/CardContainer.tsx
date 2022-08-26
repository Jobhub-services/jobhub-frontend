import styled from 'styled-components';
import { TalentCard } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';
import { messageActions, messageDispatcher } from '@/modules/actions/company/message.actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 5px 40px 10px 40px;
	gap: 20px;
	@media only screen and (max-width: 1640px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const CardContainer = () => {
	const navigate = useNavigate();
	const { showTalents } = useAppSelector((state) => state.talent);
	const { userInfo } = useAppSelector((state) => state.user);
	const { newChat } = useAppSelector((state) => state.companyMessage);

	useEffect(() => {
		if (newChat?.created) {
			messageDispatcher.createChat({ created: false, _id: null });
			navigate(`/messages/${newChat._id}`);
		}
	}, [newChat]);

	const handleChat = (receiver: string) => {
		const data = [receiver, userInfo._id];
		messageActions.createConversation(data);
	};
	if (showTalents?.content?.length === 0) return <DataEmpty title="No talent founds" description="There is no talent that matches your criteria" />;
	return (
		<SContainer>
			{showTalents?.content?.map((elem, idx) => {
				return <TalentCard key={idx} {...elem} onChat={handleChat} />;
			})}
		</SContainer>
	);
};

export default CardContainer;
