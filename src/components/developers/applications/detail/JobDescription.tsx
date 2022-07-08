import JobMetaInfo from '@/components/developers/jobs/details/JobMetaInfo';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';
import JobGeneralInfo from '@/components/developers/applications/detail/jobUtils/JobGeneralInfo';
const JobDescription = () => {
	const { applicationDetails } = useAppSelector((state) => state.talentApplications);
	const newPost = Math.abs(new Date(applicationDetails?.jobId.createdAt!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
	const qualificationIsEmpty: any =
		applicationDetails?.jobId?.requirements ||
		applicationDetails?.jobId?.education?.length! > 0 ||
		applicationDetails?.jobId?.certification?.length! > 0;
	const locationIsEmpty: any =
		applicationDetails?.jobId?.work_location || applicationDetails?.jobId?.hire_location?.length! > 0 || applicationDetails?.jobId?.visa_sponsorship;
	const roleIsEmpty: any =
		applicationDetails?.jobId?.job_type ||
		applicationDetails?.jobId?.duration ||
		applicationDetails?.jobId?.duration_range ||
		applicationDetails?.jobId?.category ||
		applicationDetails?.jobId?.company_division;
	return (
		<FlexBox align="start" gap={15}>
			<JobGeneralInfo qualificationIsEmpty={qualificationIsEmpty} storeData={applicationDetails?.jobId} />
			<JobMetaInfo
				storeData={applicationDetails?.jobId}
				newPost={newPost}
				featured={applicationDetails?.jobId?.featured}
				locationIsEmpty={locationIsEmpty!}
				roleIsEmpty={roleIsEmpty!}
				skills={applicationDetails?.jobId?.skills}
			/>
		</FlexBox>
	);
};

export default JobDescription;
