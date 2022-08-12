import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, HrDivider } from 'staak-ui';
import { SpanTitle, CertificationCard, SSpan } from '@/components/developers/profile/common';
import { Fragment } from 'react';

const Certification = () => {
	const { certifications } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Certification</SpanTitle>
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
				{certifications?.length === 0 && <SSpan className="mt-15">Sharing your certifications will help you stand out more.</SSpan>}
			</div>
		</div>
	);
};

export default Certification;
