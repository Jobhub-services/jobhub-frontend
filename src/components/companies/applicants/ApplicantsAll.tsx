import { useAppSelector } from '@/utils/appHooks';
import ApplicationCard from './ApplicationCard';
import styled from 'styled-components';
import DataEmpty from '@/components/common/DataEmpty';

const SContainer = styled.div`
	display: grid;
	padding: 20px 0px;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	@media only screen and (max-width: 1600px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const ApplicantsAll = () => {
	const { content } = useAppSelector((state) => state.applications.showApplicants);
	if (content.length === 0) return <DataEmpty title="No applicant Founds" />;
	return (
		<SContainer>
			{content?.map((elem, idx) => {
				return (
					<ApplicationCard
						key={idx}
						_id={elem._id}
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
					/>
				);
			})}
		</SContainer>
	);
};

export default ApplicantsAll;
