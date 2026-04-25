import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, HrDivider } from 'staak-ui';
import { SpanTitle, EducationCard, SSpan } from '@/components/developers/profile/common';
import { Fragment } from 'react';

const Education = () => {
	const { educations } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Education</SpanTitle>
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
				{educations?.length === 0 && <SSpan className="mt-15">List of schools which you have studied at</SSpan>}
			</div>
		</div>
	);
};

export default Education;
