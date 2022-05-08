import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import { SPre, STitle } from '../jobReview.styles';
import { BenefitIcon, MoneyIcon } from '@/assets/icons';
import TitleIcon from '@/components/companies/jobs/_common/TitleIcon';
import { colors } from '@/assets/theme';

const Compensation = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	return (
		<div>
			<STitle>Compensation</STitle>
			{data.end_salary !== '' && data.start_salary !== '' && (
				<div>
					<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
					<div style={{ marginLeft: '20px' }}>
						<span style={{ color: `${colors.BLACK_2}` }}>{data.start_salary}</span>-
						<span style={{ color: `${colors.BLACK_2}` }}>{data.end_salary}</span>
						<span style={{ marginLeft: '10px', color: `${colors.BLACK_2}` }}>{data.currency?.name}</span>
					</div>
				</div>
			)}
			{data.benefits !== '' && (
				<div className="mt-10">
					<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
					<SPre>{data.benefits}</SPre>
				</div>
			)}
		</div>
	);
};

export default Compensation;
