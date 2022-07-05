import { STitle, SSubTitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';
import { dateWithMonthName } from '@/utils/helpers';
import { useAppSelector } from '@/utils/appHooks';
const Role = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	const isEmpty = jobDetails?.job_type || jobDetails?.duration || jobDetails?.duration_range;
	return (
		<div className="mt-15">
			<STitle>Job Role</STitle>
			<div>
				{jobDetails?.company_division && (
					<div>
						<SSubTitle>Comapny Division</SSubTitle>
						<SSpan>{jobDetails?.company_division}</SSpan>
					</div>
				)}
				{jobDetails?.category && (
					<div className="mt-15">
						<SSubTitle>Job Category</SSubTitle>
						<SSpan>{jobDetails?.category}</SSpan>
					</div>
				)}
				{isEmpty && (
					<div className="mt-15">
						<SSubTitle>Job Type & Duration</SSubTitle>
						<FlexBox className="mt-10" justify="start" gap={10}>
							{jobDetails?.job_type && <Tag color={colors.BLUE_CLEAR_5}>{jobDetails.job_type}</Tag>}
							{jobDetails?.duration && <Tag color={colors.GREEN_CLEAR_5}>{jobDetails.duration}</Tag>}
						</FlexBox>
						{jobDetails?.duration_range && jobDetails?.duration_range?.length! > 1 && jobDetails?.duration_range[0] && jobDetails?.duration_range[1] && (
							<FlexBox gap={5} justify="flex-start" className="mt-15">
								<SSpan>{dateWithMonthName(jobDetails.duration_range[0]!)}-</SSpan>
								<SSpan>{dateWithMonthName(jobDetails.duration_range[1]!)}</SSpan>
							</FlexBox>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Role;
