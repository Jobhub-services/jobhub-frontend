import styled from 'styled-components';
import { TalentsHeader, TalentsFilter, TalentProfile, CardContainer } from '@/components/companies/talents';

const MainContainer = styled.div`
	position: relative;
`;

const TalentsView = () => {
	return (
		<MainContainer>
			<TalentsHeader />
			<CardContainer />
			<TalentsFilter />
			<TalentProfile />
		</MainContainer>
	);
};

export default TalentsView;
