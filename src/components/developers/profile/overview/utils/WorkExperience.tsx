import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, HrDivider } from 'staak-ui';
import { SpanTitle, WorkCard } from '@/components/developers/profile/common';
import { Fragment } from 'react';

const WorkExperience = () => {
	const { work_experience } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Work experience</SpanTitle>
			</FlexBox>
			<div>
				{work_experience?.map((elem, idx) => {
					return (
						<Fragment key={idx}>
							<FlexBox className="mt-10" justify="space-between" gap={30}>
								<WorkCard key={idx} {...elem} />
							</FlexBox>
							<HrDivider top={15} side={15} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default WorkExperience;
