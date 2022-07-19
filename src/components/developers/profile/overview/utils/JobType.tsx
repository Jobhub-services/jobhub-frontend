import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, Tag } from 'staak-ui';
import styled from 'styled-components';
import { JobTypeBColor } from '@/constants/public/job.constants';

const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;
const JobType = () => {
	const { job_type, other_job_type } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<SpanTitle>Job type</SpanTitle>
			<div>
				{job_type && job_type !== '' && (
					<FlexBox className="mt-15" gap={20} justify="start">
						<span>Primary job type</span>
						<Tag color={JobTypeBColor[job_type!]}>{job_type}</Tag>
					</FlexBox>
				)}
				{Array.isArray(other_job_type) && other_job_type.length > 0 && (
					<div className="mt-15">
						<div className="mb-10">Other desired job types</div>
						<TagWrapper className="mt-15">
							{other_job_type?.map((elem, idx) => {
								return (
									<Tag key={idx} value={elem}>
										{elem}
									</Tag>
								);
							})}
						</TagWrapper>
					</div>
				)}
				{!job_type && (!Array.isArray(other_job_type) || other_job_type.length === 0) && (
					<SSpan className="mt-15">What type of job are you interested in</SSpan>
				)}
			</div>
		</div>
	);
};

export default JobType;
