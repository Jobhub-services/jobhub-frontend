import Header from '@/components/companies/overview/Header';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import LastApplicants from '@/components/companies/overview/LastApplicants';
import TalentRecommendation from '@/components/companies/overview/TalentRecommendation';
const MainContainer = styled.div`
	height: 100%;
	overflow-y: auto;
`;
const SContainer = styled(FlexBox)`
	padding: 15px;
`;
const CompanyOverview = () => {
	return (
		<MainContainer className="staak_scrollbar">
			<SContainer flexDirection="column">
				<Header />
				<TalentRecommendation />
				<LastApplicants />
			</SContainer>
		</MainContainer>
	);
};

export default CompanyOverview;
