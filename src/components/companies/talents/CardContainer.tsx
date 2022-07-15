import styled from 'styled-components';
import { TalentCard } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';

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
	const { showTalents } = useAppSelector((state) => state.talent);
	return (
		<SContainer>
			{showTalents?.content?.map((elem, idx) => {
				return <TalentCard key={idx} {...elem} />;
			})}
		</SContainer>
	);
};

export default CardContainer;
