import JobCard from './JobCard';
import styled from 'styled-components';

const SWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

const ShowJobs = (props: any) => {
	return (
		<SWrapper>
			<JobCard status="active" />
			<JobCard status="active" />
			<JobCard status="suspended" />
			<JobCard status="suspended" />
			<JobCard status="closed" />
			<JobCard status="closed" />
			<JobCard />
		</SWrapper>
	);
};

export default ShowJobs;
