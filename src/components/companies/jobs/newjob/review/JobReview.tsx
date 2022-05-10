import { FlexBox, Button, HrDivider } from 'staak-ui';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/companies/jobs/_common/TitleIcon';
import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { SPre, STitle } from './jobReview.styles';
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

	function handleNext(event: React.SyntheticEvent) {
		jobActions.create(createJob);
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	return (
		<>
			<FlexBox justify="flex-start" align="flex-start">
				<div style={{ paddingRight: '15px', width: '20%' }}>
					<Role />
					<HrDivider color={colors.BLACK_12} top={20} />
					<Location />
				</div>
				<div style={{ width: '80%', paddingLeft: '15px', borderLeft: `1px solid ${colors.BLACK_12}` }}>
					<STitle style={{ marginBottom: '5px' }}>{data.title}</STitle>
					<div>
						<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
						<SPre>{data.description !== '' ? data.description : 'N/A'}</SPre>
					</div>
					<div>
						<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
						<SPre>{data.responsabilities !== '' ? data.responsabilities : 'N/A'}</SPre>
					</div>
					<HrDivider color={colors.BLACK_12} top={20} />
					<Compensation />
					<HrDivider color={colors.BLACK_12} top={20} />
					<Qualifications />
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
