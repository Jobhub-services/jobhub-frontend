import styled from 'styled-components';
import JobCard from '@/components/developers/_common/JobCard';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	@media only screen and (max-width: 1600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
const JobsList = () => {
	const { jobInfo } = useAppSelector((state) => state.developerJobs);
	const { content } = jobInfo;
	if (content?.length === 0)
		return <DataEmpty title="No data found" description="No content match your criteria. Try searching for something else" />;

	return (
		<SWrapper>
			{content?.map((elem, idx) => {
				return (
					<JobCard
						key={idx}
						_id={elem._id}
						title={elem.title}
						category={elem.category}
						job_type={elem.job_type}
						duration={elem.duration}
						avatar={elem.avatar}
						createdAt={elem.createdAt}
						createdBy={elem.createdBy}
						work_location={elem.work_location}
						hire_location={elem.hire_location}
						work_remotly={elem.work_remotly}
						hire_remotly={elem.hire_remotly}
						start_salary={elem.start_salary}
						end_salary={elem.end_salary}
						currency={elem.currency}
						salary_type={elem.salary_type}
						featured={elem.featured}
						saved={elem.saved}
						applied={elem.applied}
					/>
				);
			})}
		</SWrapper>
	);
};

export default JobsList;
