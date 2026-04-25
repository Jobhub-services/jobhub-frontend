import JobMetaInfo from '@/components/developers/jobs/details/JobMetaInfo';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';
import JobGeneralInfo from '@/components/developers/applications/detail/jobUtils/JobGeneralInfo';
const JobDescription = () => {
	const { applicationDetails } = useAppSelector((state) => state.talentApplications);
	const newPost = Math.abs(new Date(applicationDetails?.job.createdAt!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
	const qualificationIsEmpty: any =
		applicationDetails?.job?.requirements || applicationDetails?.job?.education?.length! > 0 || applicationDetails?.job?.certification?.length! > 0;
	const locationIsEmpty: any =
		applicationDetails?.job?.work_location || applicationDetails?.job?.hire_location?.length! > 0 || applicationDetails?.job?.visa_sponsorship;
	const roleIsEmpty: any =
		applicationDetails?.job?.job_type ||
		applicationDetails?.job?.duration ||
		applicationDetails?.job?.duration_range ||
		applicationDetails?.job?.category ||
		applicationDetails?.job?.company_division;
	return (
		<FlexBox align="start" gap={15}>
			<JobGeneralInfo qualificationIsEmpty={qualificationIsEmpty} storeData={applicationDetails?.job} />
			<JobMetaInfo
				storeData={applicationDetails?.job}
				newPost={newPost}
				featured={applicationDetails?.job?.featured}
				locationIsEmpty={locationIsEmpty!}
				roleIsEmpty={roleIsEmpty!}
				skills={applicationDetails?.job?.skills}
			/>
		</FlexBox>
	);
};

export default JobDescription;
