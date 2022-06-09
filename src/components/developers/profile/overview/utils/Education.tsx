import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, HrDivider } from 'staak-ui';
import { SpanTitle, EducationCard } from '@/components/developers/profile/common';
import { Fragment } from 'react';

const Education = () => {
	const { educations } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Educations</SpanTitle>
			</FlexBox>
			<div>
				{educations?.map((elem, idx) => {
					return (
						<Fragment key={idx}>
							<FlexBox className="mt-10" justify="space-between" gap={20}>
								<EducationCard {...elem} />
							</FlexBox>
							<HrDivider top={15} side={15} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Education;
