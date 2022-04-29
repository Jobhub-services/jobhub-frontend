import { useAppSelector } from '@/utils/appHooks';
import { STitle, SSubTitle, SSpan } from '../jobReview.styles';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';

const Role = () => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;

	return (
		<div className="mt-20">
			<STitle>Job Role</STitle>
			{data.company_division !== '' && (
				<div>
					<SSubTitle>Comapny Division</SSubTitle>
					<SSpan>{data.company_division}</SSpan>
				</div>
			)}
			{data.category !== '' && (
				<div className="mt-20">
					<SSubTitle>Job category</SSubTitle>
					<SSpan>{data.category}</SSpan>
				</div>
			)}
			{(data.job_type !== '' || data.duration !== '') && (
				<div className="mt-20">
					<SSubTitle>Job type & Duration</SSubTitle>
					<FlexBox gap={10} align="start" justify="start">
						<Tag color={colors.BLUE_CLEAR_5}>{data.job_type}</Tag>
						<Tag color={colors.GREEN_CLEAR_5}>{data.duration}</Tag>
					</FlexBox>
					{data.duration_range![0] && data.duration_range![1] && (
						<div className="mt-10">
							<SSpan>{data.duration_range![0].toDateString()}</SSpan>
							<span>-</span>
							<SSpan>{data.duration_range![1].toDateString()}</SSpan>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Role;
