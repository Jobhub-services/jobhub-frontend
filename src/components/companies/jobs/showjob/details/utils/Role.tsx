import { SSpan, STitle, SSubTitle } from './shared.styles';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';
import { JobDetails } from '@/types/company/jobs.type';
import { dateWithMonthName } from '@/utils/helpers';
const Role = (props: JobDetails) => {
	return (
		<div>
			<STitle>Job Role</STitle>
			<div>
				<div>
					<SSubTitle>Comapny Division</SSubTitle>
					<SSpan>{props.company_division ?? 'N/A'}</SSpan>
				</div>
				<div className="mt-20">
					<SSubTitle>Job Category</SSubTitle>
					<SSpan>{props.category ?? 'N/A'}</SSpan>
				</div>
				<div className="mt-20">
					<SSubTitle>Job Type & Duration</SSubTitle>
					<FlexBox className="mt-10" justify="start" gap={10}>
						{props.job_type ? <Tag color={colors.BLUE_CLEAR_5}>{props.job_type}</Tag> : 'N/A'}
						{props.duration && <Tag color={colors.GREEN_CLEAR_5}>{props.duration}</Tag>}
					</FlexBox>
					{Array.isArray(props.duration_range) && props.duration_range.length > 0 && props.duration_range[0] && (
						<FlexBox gap={5} justify="flex-start" className="mt-10">
							<SSpan>{dateWithMonthName(props.duration_range[0]!)}</SSpan>
							<SSpan>{dateWithMonthName(props.duration_range[1]!)}</SSpan>
						</FlexBox>
					)}
				</div>
			</div>
		</div>
	);
};

export default Role;
