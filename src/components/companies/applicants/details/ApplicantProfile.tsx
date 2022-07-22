import WorkExperience from '../../_common/WorkExperience';
import { FlexBox, Button, Tag, HrDivider } from 'staak-ui';
import { CVIcon } from '@/assets/icons';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { Link } from 'react-router-dom';

const SPre = styled.pre`
	font-family: inherit;
	text-align: justify;
	margin: 5px 0;
	white-space: pre-line;
`;
const SH3 = styled.h3`
	margin: 10px 0;
`;
const SDiv = styled.div`
	color: ${colors.BLACK_8};
`;
const SWrappe = styled(FlexBox)`
	flex-wrap: wrap;
`;
const ApplicantProfile = () => {
	const { applicantDetails } = useAppSelector((state) => state.applications);
	console.log(applicantDetails);
	return (
		<div>
			<div>
				<FlexBox justify="space-between">
					<SH3>Cover letter</SH3>
					<Link to={applicantDetails?.cv ?? ''} target="_blank">
						<Button startIcon={<CVIcon />} size="md">
							Download CV
						</Button>
					</Link>
				</FlexBox>
				<SPre>{applicantDetails?.motivation}</SPre>
			</div>
			<div className="mt-10">
				<SH3>Skills</SH3>
				<SWrappe justify="start" gap={10}>
					{applicantDetails?.skills?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
				</SWrappe>
				{applicantDetails?.skills?.length === 0 && 'N/A'}
			</div>
			<div className="mt-20">
				<SH3>Work Experience</SH3>
				{applicantDetails?.work_experience?.map((elem, idx) => {
					return (
						<>
							<WorkExperience
								title={elem.title}
								jobType={elem.job_type}
								company={elem.company_name}
								location={elem?.location?.name}
								dateRange={`${elem.startDate ? new Date(elem.startDate).toDateString() : 'N/A'} - ${
									elem.endDate ? new Date(elem.endDate).toDateString() : 'N/A'
								}`}
							/>
							<HrDivider top={15} side={0} />
						</>
					);
				})}
				{applicantDetails?.work_experience?.length === 0 && 'N/A'}
			</div>
			<div>
				<SH3>Questions</SH3>
				{applicantDetails?.responses?.map((elem, idx) => {
					return (
						<div key={idx}>
							<div style={{ margin: '5px 0' }}>{elem.question?.question}</div>
							<SDiv>{elem.response}</SDiv>
						</div>
					);
				})}
				{applicantDetails?.responses?.length === 0 && 'N/A'}
			</div>
			<div>
				<SH3>Availability</SH3>
				<FlexBox justify="start" gap={5}>
					<span>Notice period</span>
					<SDiv>{applicantDetails.notice_period ?? 'N/A'}</SDiv>
				</FlexBox>
				<FlexBox justify="start" gap={5}>
					<span>Start working</span>
					<SDiv>{applicantDetails?.start_date ? new Date(applicantDetails?.start_date).toDateString() : 'N/A'}</SDiv>
				</FlexBox>
			</div>
		</div>
	);
};

export default ApplicantProfile;
