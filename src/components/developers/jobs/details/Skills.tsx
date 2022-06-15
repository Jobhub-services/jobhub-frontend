import { useAppSelector } from '@/utils/appHooks';
import { STitle } from '@/components/developers/jobs/details/common.style';
import { FlexBox, Tag } from 'staak-ui';
import styled from 'styled-components';
const SWrrap = styled(FlexBox)`
	flex-wrap: wrap-reverse;
`;
const Skills = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	return (
		<div className="mt-10">
			<STitle>Skills</STitle>
			{/*<TitleIcon title="Skills" icon={(props: IconProps) => <SkillsIcon {...props} />} />*/}
			{
				<SWrrap justify="start" gap={10} className="mt-10">
					{jobDetails?.skills?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
				</SWrrap>
			}
		</div>
	);
};

export default Skills;
