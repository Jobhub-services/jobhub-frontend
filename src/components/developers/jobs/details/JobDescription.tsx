import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { SP } from '@/components/developers/jobs/details/common.style';
import { IconProps } from '@/models/component';
import { TJobDetails } from '@/types/developer/job.type';

const JobDescription = ({ data, className }: { data: TJobDetails; className?: string }) => {
	return (
		<div className={className}>
			<div>
				<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
				<SP>{data?.description}</SP>
			</div>
			<div>
				<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
				<SP>{data?.responsabilities}</SP>
			</div>
		</div>
	);
};

export default JobDescription;
