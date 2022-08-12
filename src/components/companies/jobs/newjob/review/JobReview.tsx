import { FlexBox, Button, HrDivider } from 'staak-ui';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { SPre, STitle } from './jobReview.styles';
import Location from './utils/Location';
import Compensation from './utils/Compensation';
import Qualifications from './utils/Qualification';
import { useAppSelector } from '@/utils/appHooks';
import { colors } from '@/assets/theme';
import Role from '@/components/companies/jobs/newjob/review/utils/Role';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';
import { jobActions } from '@/modules/actions/company/job.actions';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';

const JobReview = (props: JobReviewProps) => {
	const loc = useLocation();
	const { state } = loc as { state: { action: string } };
	const { createJob, jobDetails } = useAppSelector((state) => state.job);
	const data = createJob;
	const handleNext = (event: React.SyntheticEvent) => {
		let tmpJob = { ...createJob };
		tmpJob.questions = tmpJob.questions?.filter((elem) => elem !== '');
		if (state?.action === 'update') {
			jobActions.updateJob(jobDetails, tmpJob);
		} else jobActions.create(tmpJob);
	};
	const handlePrevious = (event: React.SyntheticEvent) => {
		if (props.onPreviouse) props.onPreviouse(event);
	};

	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Job Review
				</StyledHeadline>
				<FlexBox gap={10} align="flex-start" justify="flex-start">
					<Button variant="outlined" onClick={handlePrevious}>
						Back
					</Button>
					<Button onClick={handleNext}>Publish</Button>
				</FlexBox>
			</HeaderContainer>
			<StepContent className="staak_scrollbar">
				<FlexBox justify="flex-start" align="flex-start">
					<div style={{ paddingRight: '15px', width: '20%', position: 'sticky', top: '0' }}>
						<Role />
						<HrDivider color={colors.BLACK_12} top={20} />
						<Location />
					</div>
					<div style={{ width: '80%', paddingLeft: '15px', borderLeft: `1px solid ${colors.BLACK_12}` }}>
						<STitle style={{ marginBottom: '5px' }}>{data.title}</STitle>
						<div>
							<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
							<SPre>{data.description !== '' ? parse(data.description ?? '') : 'N/A'}</SPre>
						</div>
						<div>
							<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
							<SPre>{data.responsabilities !== '' ? parse(data.responsabilities ?? '') : 'N/A'}</SPre>
						</div>
						<HrDivider color={colors.BLACK_12} top={20} />
						<Compensation />
						<HrDivider color={colors.BLACK_12} top={20} />
						<Qualifications />
					</div>
				</FlexBox>
			</StepContent>
		</>
	);
};

export default JobReview;
