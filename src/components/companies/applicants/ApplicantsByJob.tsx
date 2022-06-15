import { useEffect } from 'react';
import ApplicationContainer from '@/components/companies/applicants/ApplicationContainer';
import { useParams } from 'react-router-dom';
import DataEmpty from '@/components/companies/_common/DataEmpty';
import { useAppSelector } from '@/utils/appHooks';
import Jerome from '@/assets/icons/jerome.jpg';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { ApplicationStatus } from '@/types/company/applications.type';
import styled from 'styled-components';

const SContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`;
const ApplicantsByJob = () => {
	const { status } = useParams();
	const { applicantDetails } = useAppSelector((state) => state.applications);
	const { applicants } = useAppSelector((state) => state.applications.applicantsByJobs);
	useEffect(() => {
		applicationsActions.getApplicantsByJobs(status as ApplicationStatus);
	}, [status]);

	if (applicants.length !== 0) return <DataEmpty title="No Data Founds" descritpion="There is no applicant yet to any job" />;
	return (
		<SContainer style={{ padding: '10px 0' }}>
			<ApplicationContainer
				jobId="1"
				title="Senior Forntend developer"
				category="Inofrmation Technology"
				applicants={[
					{
						applicantId: '1',
						img: `${Jerome}`,
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: applicantDetails.applicationStatus,
					},
					{
						applicantId: '2',
						img: `${Jerome}`,
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: applicantDetails.applicationStatus,
					},
				]}
			/>
			<ApplicationContainer jobId="2" title="Junior Product manager" category="Product manager" applicants={[]} />
			<ApplicationContainer jobId="3" title="Human resource recruiter" category="Humai resources" applicants={[]} />
			{applicants?.map((elem, idx) => {
				if (elem.applicants!.length > 0)
					return <ApplicationContainer key={idx} jobId={elem.jobId} title={elem.title} category={elem.category} applicants={elem.applicants} />;
			})}
		</SContainer>
	);
};

export default ApplicantsByJob;
