import { FlexBox } from 'staak-ui';
import { SSpan, STitle, SSubTitle } from './shared.styles';
import { colors } from '@/assets/theme';
import { JobDetails } from '@/types/company/jobs.type';
import styled from 'styled-components';

const Wrapper = styled(FlexBox)`
	justify-content: start !important;
	flex-wrap: wrap;
`;
const Location = (props: JobDetails) => {
	return (
		<div>
			<STitle>Location</STitle>
			<div>
				<div className="mt-20">
					<SSubTitle>Work Location</SSubTitle>
					{!props.work_location?.country && !props.work_location?.country && !props.work_remotly ? (
						<SSpan>N/A</SSpan>
					) : (
						<FlexBox justify="start" gap={2}>
							{props.work_remotly && <SSpan>Remote</SSpan>}
							<SSpan>
								{props.work_location?.country}
								{props.work_location?.city ? `, ${props.work_location?.city}` : ''}
							</SSpan>
						</FlexBox>
					)}
				</div>
				<div className="mt-20">
					<SSubTitle>Hiring Location</SSubTitle>
					<Wrapper gap={3}>
						{props.hire_remotly && <SSpan>Everywhere</SSpan>}
						{props.hire_location?.map((elem, idx) => {
							return (
								<SSpan key={idx}>
									{elem.country?.name}
									{elem.city ? `, ${elem.city}` : ''}
								</SSpan>
							);
						})}
					</Wrapper>
				</div>
				<div className="mt-20">
					<SSubTitle>Visa Sponsorship</SSubTitle>
					<SSpan style={{ color: `${colors.GREEN_BASE}` }}>{props.visa_sponsorship ? 'Available' : 'Unavailable'}</SSpan>
				</div>
			</div>
		</div>
	);
};

export default Location;
