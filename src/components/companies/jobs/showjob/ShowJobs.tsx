import JobCard from './JobCard';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';

const SWrapper = styled.div`
	display: grid;
	padding: 10px 0;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`;

const ShowJobs = () => {
	const { content } = useAppSelector((state) => state.job.showJob);
	if (content.length === 0) return <DataEmpty title="No data found" description="No content match your criteria. Try searching for something else" />;
	return (
		<SWrapper>
			{content.map((elem, idx) => {
				return (
					<JobCard
						key={idx}
						_id={elem._id}
						status={elem.status}
						title={elem.title}
						category={elem.category}
						description={elem.description}
						job_type={elem.job_type}
						duration={elem.duration}
						createdAt={elem.createdAt}
						start_salary={elem.start_salary}
						end_salary={elem.end_salary}
						currency={elem.currency}
						work_location={elem.work_location}
						work_remotly={elem.work_remotly}
						applicants={elem.applicants}
					/>
				);
			})}
		</SWrapper>
	);
};

export default ShowJobs;
