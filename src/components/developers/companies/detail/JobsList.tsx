import styled from 'styled-components';
import { PJobCard } from '@/models/component/developer/jobs.interface';
import JobCard from '@/components/developers/_common/JobCard';
import { SSubTitle } from '@/components/developers/companies/detail/common.style';
import { FlexBox } from 'staak-ui';
import { JobHiringIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
const Container = styled.div`
	padding: 0 15px;
`;
const SWrapper = styled.div`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	@media only screen and (max-width: 1550px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const JobsList = ({ size, jobs }: { size: number; jobs: PJobCard[] }) => {
	return (
		<Container>
			<FlexBox justify="start" gap={10}>
				<JobHiringIcon color={colors.PURPLE_BASE} width="25px" height="25px" />
				<SSubTitle style={{ fontSize: '16px' }}>{size} Opening jobs</SSubTitle>
			</FlexBox>
			<SWrapper>
				{jobs.map((job, idx) => {
					return (
						<JobCard
							key={idx}
							_id={job._id}
							title={job.title}
							category={job.category}
							job_type={job.job_type}
							duration={job.duration}
							createdAt={job.createdAt}
							company={job.company}
							work_location={job.work_location}
							hire_location={job.hire_location}
							start_salary={job.start_salary}
							end_salary={job.end_salary}
							currency={job.currency}
							salary_type={job.salary_type}
							featured={job.featured}
							saved={job.saved}
							applied={job.applied}
							hire_remotly={job.hire_remotly}
							work_remotly={job.work_remotly}
						/>
					);
				})}
			</SWrapper>
		</Container>
	);
};

export default JobsList;
