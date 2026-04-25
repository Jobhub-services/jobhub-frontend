import { colors } from '@/assets/theme';
import { MoneyIcon, BenefitIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from './shared.styles';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { JobDetails } from '@/types/company/jobs.type';
import parse from 'html-react-parser';

const Compensation = (props: JobDetails) => {
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<span style={{ color: `${colors.BLACK_2}` }}>
					{parseInt(props?.start_salary!).toLocaleString('en-US')} - {parseInt(props?.end_salary!).toLocaleString('en-US')}{' '}
					{(props.currency?.code ?? '').toUpperCase()} / {props.salary_type ?? 'N/A'}
				</span>
			</div>
			<div className="mt-10">
				<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
				<SP>{parse(props.benefits ?? 'N/A')}</SP>
			</div>
		</div>
	);
};

export default Compensation;
