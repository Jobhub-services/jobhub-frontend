import { useAppSelector } from '@/utils/appHooks';
import ApplicationCard from '@/components/companies/applicants/ApplicationCard';
import styled from 'styled-components';
import DataEmpty from '@/components/common/DataEmpty';

const SContainer = styled.div`
	display: grid;
	padding: 20px 0px;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	@media only screen and (max-width: 1600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
const ApplicantsAll = () => {
	const { showApplicants } = useAppSelector((state) => state.applications);
	if (showApplicants?.content?.length === 0) return <DataEmpty title="No applicant Founds" />;
	return (
		<SContainer>
			{showApplicants?.content?.map((elem, idx) => {
				return (
					<ApplicationCard
						key={idx}
						_id={elem._id}
						avatar={elem.avatar}
						firstName={elem.firstName}
						lastName={elem.lastName}
						role={elem.role}
						motivation={elem.motivation}
						skills={elem.skills}
						createdAt={elem.createdAt}
						linkedIn={elem.linkedIn}
						git={elem.git}
						cv={elem.cv}
						status={elem.status}
						job={elem.job}
						userStatus={elem.userStatus}
					/>
				);
			})}
		</SContainer>
	);
};

export default ApplicantsAll;
