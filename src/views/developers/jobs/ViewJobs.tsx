import { JobsList, JobHeader, JobsFilter, JobDetails } from '@/components/developers/jobs';
import styled from 'styled-components';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	padding: 10px 20px;
`;
const ViewJobs = () => {
	return (
		<SContainer>
			<SubContainer>
				<JobHeader />
				<JobsList />
			</SubContainer>
			<JobsFilter />
			<JobDetails />
		</SContainer>
	);
};

export default ViewJobs;
