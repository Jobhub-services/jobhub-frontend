import { FlexBox, Button, Headline, HrDivider } from 'staak-ui';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/companies/jobs/_common/TitleIcon';
import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { StyledGap, SPre, STitle } from './jobReview.styles';
import Location from './utils/Location';
import Compensation from './utils/Compensation';
import Qualifications from './utils/Qualification';
import { useAppSelector } from '@/utils/appHooks';
import { colors } from '@/assets/theme';
import Role from './utils/Role';
import { jobActions } from '@/modules/actions/company/job.actions';

const JobReview = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	const isCompensation = (data.end_salary !== '' && data.start_salary !== '') || data.benefits !== '';

	const isQualification =
		data.education!.length > 0 ||
		data.certification!.length > 0 ||
		data.skills!.length > 0 ||
		data.requirements !== '' ||
		(data.questions!.length > 0 && data.questions![0] !== '');

	const isRole = data.company_division !== '' || data.category !== '' || data.job_type !== '' || data.duration !== '';
	const isLocation =
		data.work_remotly ||
		(data.work_location!.length > 0 && (data.work_location![0].country !== '' || data.work_location![0].city !== '')) ||
		data.hire_remotly ||
		(data.hire_location!.length > 0 && (data.hire_location![0].country !== '' || data.hire_location![0].city !== '')) ||
		data.visa_sponsorship;

	function handleNext(event: React.SyntheticEvent) {
		jobActions.create(createJob);
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	console.log(data);
	return (
		<>
			<FlexBox justify="flex-start" align="flex-start">
				<div style={{ paddingRight: '15px', width: '20%' }}>
					{isRole && (
						<>
							<Role />
							<HrDivider color={colors.BLACK_12} top={20} />
						</>
					)}
					{isLocation && <Location />}
				</div>
				<div style={{ width: '80%', paddingLeft: '15px', borderLeft: `1px solid ${colors.BLACK_12}` }}>
					<STitle style={{ marginBottom: '5px' }}>{data.title}</STitle>
					{data.description && (
						<div>
							<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
							<SPre>{data.description}</SPre>
						</div>
					)}
					{data.responsabilities !== '' && (
						<div>
							<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
							<SPre>{data.responsabilities}</SPre>
						</div>
					)}
					{isCompensation && (
						<>
							<HrDivider color={colors.BLACK_12} top={20} />
							<Compensation />
						</>
					)}
					{isQualification && (
						<>
							<HrDivider color={colors.BLACK_12} top={20} />
							<Qualifications />
						</>
					)}
				</div>
			</FlexBox>
			<FlexBox gap={10} align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Create</Button>
			</FlexBox>
		</>
	);
};

export default JobReview;
