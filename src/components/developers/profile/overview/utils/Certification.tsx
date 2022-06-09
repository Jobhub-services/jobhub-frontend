import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, HrDivider } from 'staak-ui';
import { SpanTitle, CertificationCard } from '@/components/developers/profile/common';
import { Fragment } from 'react';

const Certification = () => {
	const { certifications } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Certifications</SpanTitle>
			</FlexBox>
			<div>
				{certifications?.map((elem, idx) => {
					return (
						<Fragment key={idx}>
							<FlexBox className="mt-10" justify="space-between" gap={20}>
								<CertificationCard {...elem} />
							</FlexBox>
							<HrDivider top={15} side={15} />
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Certification;
