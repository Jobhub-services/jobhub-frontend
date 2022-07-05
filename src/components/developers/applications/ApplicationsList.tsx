import styled from 'styled-components';
import ApplicationCard from '@/components/developers/applications/ApplicationCard';
import Google from '@/assets/icons/google.jpg';
import { useAppSelector } from '@/utils/appHooks';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;
const ApplicationsList = () => {
	const { applicationInfo } = useAppSelector((state) => state.talentApplications);
	return (
		<SWrapper>
			{applicationInfo?.content?.map((elem, idx) => {
				return (
					<ApplicationCard
						key={idx}
						_id={elem._id}
						avatar={Google}
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
