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
					<FlexBox justify="start" gap={2}>
						<SSpan>{props.work_location?.country}</SSpan>
						<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
						<SSpan>{props.work_location?.city}</SSpan>
					</FlexBox>
				</div>
				<div className="mt-20">
					<SSubTitle>Hiring Location</SSubTitle>
					<Wrapper>
						{props.hire_location?.map((elem, idx) => {
							return (
								<FlexBox justify="start" gap={2} key={idx}>
									<SSpan>{elem.country}</SSpan>
									<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
									<SSpan>{elem.city}</SSpan>
								</FlexBox>
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
