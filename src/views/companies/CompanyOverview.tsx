import JobRecommendation from '@/components/developers/overview/JobRecommendation';
import Header from '@/components/companies/overview/Header';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import LastApplicants from '@/components/companies/overview/LastApplicants';

const SContainer = styled(FlexBox)`
	padding: 15px;
`;
const CompanyOverview = () => {
	return (
		<SContainer flexDirection="column">
			<Header />
			<JobRecommendation />
			<LastApplicants />
		</SContainer>
	);
};

export default CompanyOverview;
