import JobCard from './JobCard';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';
import { useEffect } from 'react';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { pushNotification } from '@/utils/helpers';
import SimpleLoading from '@/components/common/SimpleLoading';
import { colors } from '@/assets/theme';

const SWrapper = styled.div`
	display: grid;
	padding: 10px 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	@media only screen and (max-width: 1600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
	} ;
`;

const ShowJobs = () => {
	const { showJob, jobDeleted, isDeleteLoading } = useAppSelector((state) => state.job);
	useEffect(() => {
		if (jobDeleted) {
			pushNotification.success('Job deleted successfully');
			jobDispatcher.setJobAction(false, 'jobDeleted');
		}
	}, [jobDeleted]);
	if (showJob.content?.length === 0)
		return <DataEmpty title="No data found" description="No content match your criteria. Try searching for something else" />;
	return (
		<SWrapper>
			{isDeleteLoading && <SimpleLoading color={colors.RED_BASE} />}
			{showJob.content?.map((elem, idx) => {
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
						applications={elem.applications}
					/>
				);
			})}
		</SWrapper>
	);
};

export default ShowJobs;
