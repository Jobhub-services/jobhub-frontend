import JobRecommendation from '@/components/developers/overview/JobRecommendation';
import ApplicationList from '@/components/developers/overview/ApplicationList';
import Header from '@/components/developers/overview/Header';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';

const MainContainer = styled.div`
	height: 100%;
	overflow-y: auto;
`;

const SContainer = styled(FlexBox)`
	padding: 15px;
`;
const TalentOverview = () => {
	return (
		<MainContainer className="staak_scrollbar">
			<SContainer flexDirection="column">
				<Header />
				<JobRecommendation />
				<ApplicationList />
			</SContainer>
		</MainContainer>
	);
};

export default TalentOverview;
