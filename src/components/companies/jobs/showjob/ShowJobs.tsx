import JobCard from './JobCard';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/companies/_common/DataEmpty';
import Women from '@/assets/icons/women.jpg';
import Man from '@/assets/icons/man.jpg';
import Jerome from '@/assets/icons/jerome.jpg';

const SWrapper = styled.div`
	display: grid;
	padding: 10px 0;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`;

const ShowJobs = (props: any) => {
	const { jobs } = useAppSelector((state) => state.job.showJob);
	if (jobs.length < 0) return <DataEmpty title="No data found" description="No content match your criteria. Try searching for something else" />;
	return (
		<SWrapper>
			<JobCard
				jobId={1}
				status="ready"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
				start_salary="3500"
				end_salary="4500"
				currency="EUR"
				work_location={{ country: 'Allemangn', city: 'Berlin' }}
				applicants={[`${Women}`, `${Man}`, `${Jerome}`, `${Women}`]}
			/>
			<JobCard
				jobId={2}
				status="ready"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
			/>
			<JobCard
				jobId={3}
				status="open"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
			/>
			<JobCard
				jobId={4}
				status="open"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
			/>
			<JobCard
				jobId={5}
				status="closed"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
			/>
			<JobCard
				jobId={6}
				status="closed"
				title="Junior frontend developer"
				category="Humain resources administration"
				description="Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
					creating amazing experiences for our users join us in creating amazing experiences for our users"
				job_type="Full-time"
				duration="Permanent"
				posted={new Date(2022, 3, 20)}
			/>
			{jobs.map((elem, idx) => {
				<JobCard
					key={idx}
					jobId={elem.jobId}
					status={elem.status}
					title={elem.title}
					category={elem.category}
					description={elem.description}
					job_type={elem.job_type}
					duration={elem.duration}
					posted={elem.posted}
					start_salary={elem.start_salary}
					end_salary={elem.end_salary}
					currency={elem.currency}
					work_location={elem.work_location}
					work_remotly={elem.work_remotly}
					applicants={elem.applicants}
				/>;
			})}
		</SWrapper>
	);
};

export default ShowJobs;
