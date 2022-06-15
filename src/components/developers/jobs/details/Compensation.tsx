import { colors } from '@/assets/theme';
import { MoneyIcon, BenefitIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from '@/components/developers/jobs/details/common.style';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { useAppSelector } from '@/utils/appHooks';

const Compensation = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<span style={{ marginLeft: '20px', color: `${colors.BLACK_2}` }}>
					{jobDetails?.start_salary} - {jobDetails?.end_salary} {jobDetails?.currency?.code?.toUpperCase()} / {jobDetails?.salary_type}
				</span>
			</div>
			{jobDetails?.benefits && jobDetails?.benefits !== '' && (
				<div className="mt-10">
					<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
					<SP>{jobDetails?.benefits}</SP>
				</div>
			)}
		</div>
	);
};

export default Compensation;
