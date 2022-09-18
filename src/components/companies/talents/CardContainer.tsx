import styled from 'styled-components';
import { TalentCard } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';

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

	if (showTalents?.content?.length === 0) return <DataEmpty title="No talent founds" description="There is no talent that matches your criteria" />;
	return (
		<SContainer>
			{showTalents?.content?.map((elem, idx) => {
				return <TalentCard key={idx} {...elem} />;
			})}
		</SContainer>
	);
};

export default CardContainer;
