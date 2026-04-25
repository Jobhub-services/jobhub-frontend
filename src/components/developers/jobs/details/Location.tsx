import { FlexBox } from 'staak-ui';
import { STitle, SSubTitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { TJobDetails } from '@/types/developer/job.type';

const Wrapper = styled(FlexBox)`
	justify-content: start !important;
	flex-wrap: wrap-reverse;
	gap: 10px;
`;
const Location = ({ data }: { data: TJobDetails }) => {
	return (
		<div>
			<STitle>Location</STitle>
			<div>
				{data?.work_location && (
					<div className="mt-15">
						<SSubTitle>Work Location</SSubTitle>
						<FlexBox justify="start" gap={2}>
							<SSpan>
								{data.work_remotly ? 'Remote. ' : ''} {data?.work_location?.city ? `${data?.work_location?.city},` : ''}{' '}
								{data?.work_location?.country}
							</SSpan>
						</FlexBox>
					</div>
				)}
				{(data?.hire_location?.length! > 0 || data?.hire_remotly) && (
					<div className="mt-15">
						<SSubTitle>Hiring Location</SSubTitle>
						{data?.hire_remotly ? (
							<SSpan>Everywhere</SSpan>
						) : (
							<Wrapper>
								{data?.hire_location?.map((elem: any, idx: number) => {
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
					<SSpan style={{ color: `${colors.GREEN_BASE}` }}>{data?.visa_sponsorship ? 'Available' : 'Not Available'}</SSpan>
				</div>
			</div>
		</div>
	);
};

export default Location;
