import ApplicationContainer from '@/components/companies/applicants/ApplicationContainer';
import DataEmpty from '@/components/common/DataEmpty';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';

const SContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	@media only screen and (max-width: 1500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const ApplicantsByJob = () => {
	const { applicantsByJobs } = useAppSelector((state) => state.applications);
	if (applicantsByJobs.content.length === 0) return <DataEmpty title="No Data Founds" descritpion="There is no applicant yet to any job" />;
	return (
		<SContainer style={{ padding: '10px 0' }}>
			{applicantsByJobs.content?.map((elem, idx) => {
				return <ApplicationContainer key={idx} job_id={elem.job_id} title={elem.title} category={elem.category} applications={elem.applications} />;
			})}
		</SContainer>
	);
};

export default ApplicantsByJob;
