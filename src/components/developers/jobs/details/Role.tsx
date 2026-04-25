import { STitle, SSubTitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';
import { dateWithMonthName } from '@/utils/helpers';
import { TJobDetails } from '@/types/developer/job.type';

const Role = ({ data }: { data: TJobDetails }) => {
	const isEmpty = data?.job_type || data?.duration || data?.duration_range;
	return (
		<div className="mt-15">
			<STitle>Job Role</STitle>
			<div>
				{data?.company_division && (
					<div>
						<SSubTitle>Comapny Division</SSubTitle>
						<SSpan>{data?.company_division}</SSpan>
					</div>
				)}
				{data?.category && (
					<div className="mt-15">
						<SSubTitle>Job Category</SSubTitle>
						<SSpan>{data?.category}</SSpan>
					</div>
				)}
				{isEmpty && (
					<div className="mt-15">
						<SSubTitle>Job Type & Duration</SSubTitle>
						<FlexBox className="mt-10" justify="start" gap={10}>
							{data?.job_type && <Tag color={colors.BLUE_CLEAR_5}>{data.job_type}</Tag>}
							{data?.duration && <Tag color={colors.GREEN_CLEAR_5}>{data.duration}</Tag>}
						</FlexBox>
						{data?.duration_range && data?.duration_range?.length! > 1 && data?.duration_range[0] && data?.duration_range[1] && (
							<FlexBox gap={5} justify="flex-start" className="mt-15">
								<SSpan>{dateWithMonthName(data.duration_range[0]!)}-</SSpan>
								<SSpan>{dateWithMonthName(data.duration_range[1]!)}</SSpan>
							</FlexBox>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Role;
