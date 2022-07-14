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
				if (elem.applicants?.length! > 0)
					return <ApplicationContainer key={idx} jobId={elem.jobId} title={elem.title} category={elem.category} applicants={elem.applicants} />;
				return <></>;
			})}
		</SContainer>
	);
};

export default ApplicantsByJob;
