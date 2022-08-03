import { colors } from '@/assets/theme';
import { MoneyIcon, BenefitIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from '@/components/developers/jobs/details/common.style';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { TJobDetails } from '@/types/developer/job.type';

const Compensation = ({ data }: { data: TJobDetails }) => {
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<span style={{ marginLeft: '20px', color: `${colors.BLACK_2}` }}>
					{parseInt(data?.start_salary!).toLocaleString('en-US')}
					{data?.end_salary ? ` - ${parseInt(data?.end_salary).toLocaleString('en-US')}` : ''} {data?.currency?.code?.toUpperCase()}{' '}
					{data?.salary_type ? `/ ${data?.salary_type}` : ''}
				</span>
			</div>
			{data?.benefits && data?.benefits !== '' && (
				<div className="mt-10">
					<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
					<SP>{data?.benefits}</SP>
				</div>
			)}
		</div>
	);
};

export default Compensation;
