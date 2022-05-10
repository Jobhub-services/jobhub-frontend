import { colors } from '@/assets/theme';
import { MoneyIcon, BenefitIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from './shared.styles';
import TitleIcon from '@/components/companies/jobs/_common/TitleIcon';
import { JobDetails } from '@/types/jobs.type';

const Compensation = (props: JobDetails) => {
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<span style={{ marginLeft: '20px', color: `${colors.BLACK_2}` }}>
					{props.start_salary} - {props.end_salary} {props.currency?.code.toUpperCase()}
				</span>
			</div>
			<div className="mt-10">
				<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
				<SP>{props.benefits ?? 'N/A'}</SP>
			</div>
		</div>
	);
};

export default Compensation;
