import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { SP } from '@/components/developers/jobs/details/common.style';
import { IconProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';

const JobDescription = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	return (
		<div className="mt-15">
			<div>
				<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
				<SP>{jobDetails?.description}</SP>
			</div>
			<div>
				<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
				<SP>{jobDetails?.responsabilities}</SP>
			</div>
		</div>
	);
};

export default JobDescription;
