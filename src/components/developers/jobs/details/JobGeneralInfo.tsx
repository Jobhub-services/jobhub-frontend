import JobHeader from '@/components/developers/jobs/details/JobHeader';
import JobDescription from '@/components/developers/jobs/details/JobDescription';
import Compensation from '@/components/developers/jobs/details/Compensation';
import Qualifications from '@/components/developers/jobs/details/Qualifications';
import { colors } from '@/assets/theme';
import { HrDivider } from 'staak-ui';
import { PJobGeneralInfo } from '@/models/component/developer/jobs.interface';

const JobGeneralInfo = ({ qualificationIsEmpty, storeData }: PJobGeneralInfo) => {
	return (
		<>
			<JobHeader />
			<JobDescription data={storeData} className="mt-15" />
			<HrDivider color={colors.BLACK_12} top={10} side={0} />
			<Compensation data={storeData} />
			{qualificationIsEmpty && (
				<>
					<HrDivider color={colors.BLACK_12} top={10} side={0} />
					<Qualifications data={storeData} />
				</>
			)}
		</>
	);
};

export default JobGeneralInfo;
