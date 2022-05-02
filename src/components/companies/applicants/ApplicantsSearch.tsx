import { useEffect } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import ApplicationCard from './ApplicationCard';
import styled from 'styled-components';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { ApplicationStatus } from '@/types/applications.type';
import DataEmpty from '@/components/companies/_common/DataEmpty';
import { useParams, useSearchParams } from 'react-router-dom';
import Jerome from '@/assets/icons/jerome.jpg';

const SContainer = styled.div`
	display: grid;
	padding: 20px 0px;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
`;
const ApplicantsSearch = () => {
	const { status } = useParams();
	const [searchParams] = useSearchParams();
	const { applicationStatus } = useAppSelector((state) => state.applications.applicantDetails);
	const { applicants } = useAppSelector((state) => state.applications.showApplicants);
	useEffect(() => {
		let params: { [x: string]: string } = {};
		for (var [key, value] of searchParams.entries()) params[key] = value;
		applicationsActions.getShowApplicants(status as ApplicationStatus, params);
	}, [status]);
	if (applicants.length !== 0) return <DataEmpty title="No applicant Founds" />;
	return (
		<SContainer>
			<ApplicationCard
				applicantId="1"
				img={`${Jerome}`}
				name="Jerome Bell"
				role="Full stack developer"
				experience_duration="4 Years of experience"
				cover_letter={`I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`}
				skils={[
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				]}
				applied="April 12. 2022"
				linkedIn="https://linkedin.com"
				applicationStatus={applicationStatus}
				job={{
					title: 'Senior frontend developer',
				}}
			/>
			<ApplicationCard
				applicantId="1"
				img={`${Jerome}`}
				name="Jerome Bell"
				role="Full stack developer"
				experience_duration="4 Years of experience"
				cover_letter={`I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`}
				skils={[
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				]}
				applied="April 12. 2022"
				linkedIn="https://linkedin.com"
				applicationStatus={applicationStatus}
				job={{
					title: 'Senior frontend developer',
				}}
			/>
			<ApplicationCard
				applicantId="1"
				img={`${Jerome}`}
				name="Jerome Bell"
				role="Full stack developer"
				experience_duration="4 Years of experience"
				cover_letter={`I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`}
				skils={[
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				]}
				applied="April 12. 2022"
				linkedIn="https://linkedin.com"
				applicationStatus={applicationStatus}
				job={{
					title: 'Senior frontend developer',
				}}
			/>
			<ApplicationCard
				applicantId="1"
				img={`${Jerome}`}
				name="Jerome Bell"
				role="Full stack developer"
				experience_duration="4 Years of experience"
				cover_letter={`I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`}
				skils={[
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				]}
				applied="April 12. 2022"
				linkedIn="https://linkedin.com"
				applicationStatus={applicationStatus}
				job={{
					title: 'Senior frontend developer',
				}}
			/>
			<ApplicationCard
				applicantId="1"
				img={`${Jerome}`}
				name="Jerome Bell"
				role="Full stack developer"
				experience_duration="4 Years of experience"
				cover_letter={`I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`}
				skils={[
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				]}
				applied="April 12. 2022"
				linkedIn="https://linkedin.com"
				applicationStatus={applicationStatus}
				job={{
					title: 'Senior frontend developer',
				}}
			/>
			{applicants.map((elem, idx) => {
				<ApplicationCard
					key={idx}
					applicantId={elem.applicantId}
					img={elem.img}
					name={elem.name}
					role={elem.role}
					experience_duration={elem.experience_duration}
					cover_letter={elem.cover_letter}
					skils={elem.skils}
					applied={elem.applied}
					linkedIn={elem.linkedIn}
					github={elem.github}
					cv={elem.cv}
					job={elem.job}
				/>;
			})}
		</SContainer>
	);
};

export default ApplicantsSearch;
