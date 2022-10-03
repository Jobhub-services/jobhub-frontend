import JobCard from '@/components/publics/jobs/JobCard';
import LoginCard from '@/components/publics/jobs/LoginCard';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	align-items: center;
	margin: auto;
	margin: 30px 50px;
	width: 95%;
	@media only screen and (max-width: 1070px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const JobsList = () => {
	const { jobs } = useAppSelector((state) => state.publicJobs);
	return (
		<FlexBox flexDirection="column">
			<Container>
				{jobs?.content?.map((elem) => {
					return <JobCard {...elem} />;
				})}
			</Container>
			<LoginCard />
		</FlexBox>
	);
};

export default JobsList;
