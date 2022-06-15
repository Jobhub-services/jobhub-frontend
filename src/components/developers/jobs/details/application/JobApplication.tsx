import { InputDateField, InputField, TextAreaField } from '@/components/common';
import { Button, FlexBox } from 'staak-ui';
import { STitle } from '@/components/developers/jobs/details/common.style';
import Questions from '@/components/developers/jobs/details/application/Questions';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions, jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useSearchParams } from 'react-router-dom';

const JobApplication = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	const { developerInfo } = useAppSelector((state) => state.user.userInfo);
	const { jobApplication } = useAppSelector((state) => state.developerJobs);
	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...jobApplication };
		tmp[name as 'resume' | 'notice_period'] = value;
		jobDispatcher.setJobApplication(tmp);
	};
	const handleDate = (date: Date | null) => {
		let tmp = { ...jobApplication };
		tmp.start_date = date?.toDateString();
		jobDispatcher.setJobApplication(tmp);
	};
	const handleApp = () => {
		jobActions.setJobApplication(jobApplication!);
	};
	const onClose = () => {
		searchParams.delete('detail');
		setSearchParams(searchParams);
	};
	//console.log(new Date(null));
	return (
		<div>
			<STitle>
				{developerInfo?.firstName} {developerInfo?.lastName}
			</STitle>
			<TextAreaField height="130px" name="resume" onDataChange={handleInput}>
				Let us know why you are a good fit.
			</TextAreaField>
			{jobDetails?.questions?.length! > 0 && <Questions questions={jobDetails?.questions} />}
			<div>
				<STitle>Availability</STitle>
				<FlexBox gap={20}>
					<InputDateField
						name="start_date"
						title="Your ideal starting date"
						onChange={handleDate}
						date={jobApplication?.start_date ? new Date(jobApplication?.start_date) : null}
					/>
					<InputField name="notice_period" onDataChange={handleInput}>
						Notice period
					</InputField>
				</FlexBox>
			</div>
			<FlexBox className="mt-20" gap={20}>
				<Button width="100%" variant="light" onClick={onClose}>
					Cancel
				</Button>
				<Button width="100%" onClick={handleApp}>
					Submit application
				</Button>
			</FlexBox>
		</div>
	);
};

export default JobApplication;
