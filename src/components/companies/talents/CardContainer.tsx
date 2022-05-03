import styled from 'styled-components';
import { TalentCard } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { talentsActions } from '@/modules/actions/company/talents.actions';

const SContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 5px 40px 10px 40px;
	gap: 20px;
`;
const CardContainer = () => {
	const { talents } = useAppSelector((state) => state.talent.showTalents);
	useEffect(() => {
		talentsActions.getTalents();
	}, []);
	return (
		<SContainer>
			{talents?.map((elem, idx) => {
				return <TalentCard key={idx} {...elem} />;
			})}
		</SContainer>
	);
};

export default CardContainer;
