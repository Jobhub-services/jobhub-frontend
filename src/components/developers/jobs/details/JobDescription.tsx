import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { SP } from '@/components/developers/jobs/details/common.style';
import { IconProps } from '@/models/component';
import { TJobDetails } from '@/types/developer/job.type';
import parse from 'html-react-parser';

const JobDescription = ({ data, className }: { data: TJobDetails; className?: string }) => {
	return (
		<div className={className}>
			<div>
				<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
				<SP>{parse(data?.description ?? '')}</SP>
			</div>
			<div>
				<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
				<SP>{parse(data?.responsabilities ?? '')}</SP>
			</div>
		</div>
	);
};

export default JobDescription;
