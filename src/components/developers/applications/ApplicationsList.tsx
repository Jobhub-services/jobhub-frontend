import styled from 'styled-components';
import ApplicationCard from '@/components/developers/applications/ApplicationCard';
import Google from '@/assets/icons/google.jpg';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	@media only screen and (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
const ApplicationsList = () => {
	const { applicationInfo } = useAppSelector((state) => state.talentApplications);
	if (applicationInfo?.content?.length === 0)
		return <DataEmpty title="No application found" description="You have not yet submitted any application" />;
	return (
		<SWrapper>
			{applicationInfo?.content?.map((elem, idx) => {
				return (
					<ApplicationCard
						key={idx}
						_id={elem._id}
						jobId={elem.jobId}
						createdAt={elem.createdAt}
						company={elem.company}
						status={elem.status}
						motivation={elem.motivation}
					/>
				);
			})}
		</SWrapper>
	);
};
export default ApplicationsList;
