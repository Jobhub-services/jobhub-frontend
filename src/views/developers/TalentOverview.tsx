import JobRecommendation from '@/components/developers/overview/JobRecommendation';
import ApplicationList from '@/components/developers/overview/ApplicationList';
import Header from '@/components/developers/overview/Header';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';

const SContainer = styled(FlexBox)`
	padding: 15px;
`;
const TalentOverview = () => {
	return (
		<SContainer flexDirection="column">
			<Header />
			<JobRecommendation />
			<ApplicationList />
		</SContainer>
	);
};

export default TalentOverview;
