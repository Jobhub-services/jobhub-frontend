import { FlexBox } from 'staak-ui';
import { STitle, SSubTitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';

const Wrapper = styled(FlexBox)`
	justify-content: start !important;
	flex-wrap: wrap-reverse;
	gap: 10px;
`;
const Location = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	return (
		<div>
			<STitle>Location</STitle>
			<div>
				{jobDetails?.work_location && (
					<div className="mt-15">
						<SSubTitle>Work Location</SSubTitle>
						<FlexBox justify="start" gap={2}>
							<SSpan>
								{jobDetails.work_remotly ? 'Remote. ' : ''} {jobDetails?.work_location?.city ? `${jobDetails?.work_location?.city},` : ''}{' '}
								{jobDetails?.work_location?.country}
							</SSpan>
						</FlexBox>
					</div>
				)}
				{(jobDetails?.hire_location?.length! > 0 || jobDetails?.hire_remotly) && (
					<div className="mt-15">
						<SSubTitle>Hiring Location</SSubTitle>
						{jobDetails?.hire_remotly ? (
							<SSpan>Everywhere</SSpan>
						) : (
							<Wrapper>
								{jobDetails?.hire_location?.map((elem, idx) => {
									return (
										<SSpan key={idx}>
											{elem.city}, {elem.country}.
										</SSpan>
									);
								})}
							</Wrapper>
						)}
					</div>
				)}
				<div className="mt-15">
					<SSubTitle>Visa Sponsorship</SSubTitle>
					<SSpan style={{ color: `${colors.GREEN_BASE}` }}>{jobDetails?.visa_sponsorship ? 'Available' : 'Not Available'}</SSpan>
				</div>
			</div>
		</div>
	);
};

export default Location;
