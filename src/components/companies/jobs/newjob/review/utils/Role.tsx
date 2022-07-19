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
			<div>
				<SSubTitle>Comapny Division</SSubTitle>
				{data?.company_division?.name !== '' ? <SSpan>{data?.company_division?.name}</SSpan> : 'N/A'}
			</div>
			<div className="mt-20">
				<SSubTitle>Job category</SSubTitle>
				{data.category?.name !== '' ? <SSpan>{data.category?.name}</SSpan> : 'N/A'}
			</div>
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
		</div>
	);
};

export default Role;
