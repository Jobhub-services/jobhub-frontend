import { JobReviewProps } from '@/models/component';
import { FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { STitle, SSubTitle, SSpan } from '../jobReview.styles';
import LocationElem from '../../../_common/LocationElem';
import { colors } from '@/assets/theme';

const SWrapper = styled(FlexBox)`
	justify-content: flex-start !important;
	flex-wrap: wrap;
	gap: 10px !important;
`;
const Location = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	const isWorkLocation =
		data.work_remotly || (data.work_location!.length > 0 && (data.work_location![0].country !== '' || data.work_location![0].city !== ''));

	const isHireLocation =
		data.hire_remotly || (data.hire_location!.length > 0 && (data.hire_location![0].country !== '' || data.hire_location![0].city !== ''));
	return (
		<div>
			<STitle>Location</STitle>
			<div className="mt-15">
				<SSubTitle>Work location</SSubTitle>
				{isWorkLocation ? (
					<SWrapper>
						{data.work_remotly && <SSpan>Remote</SSpan>}
						{data.work_location?.map((elem, idx) => {
							return <LocationElem country={elem.country?.name} city={elem.city} key={idx} />;
						})}
					</SWrapper>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-15">
				<SSubTitle>Hiring Location</SSubTitle>
				{isHireLocation ? (
					<SWrapper>
						{data.hire_remotly && <SSpan>Remote</SSpan>}
						{data.hire_location?.map((elem, idx) => {
							return <LocationElem country={elem.country?.name} city={elem.city} key={idx} />;
						})}
					</SWrapper>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-20">
				<SSubTitle>Visa sponsorship</SSubTitle>
				<SSpan style={{ color: `${colors.GREEN_BASE}` }}>{data.visa_sponsorship ? 'Available' : 'Unavailable'}</SSpan>
			</div>
		</div>
	);
};

export default Location;
