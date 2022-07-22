import { InputDateField, InputField, TextAreaField } from '@/components/common';
import { Button, FlexBox } from 'staak-ui';
import { STitle } from '@/components/developers/jobs/details/common.style';
import Questions from '@/components/developers/jobs/details/application/Questions';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions, jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useSearchParams } from 'react-router-dom';
import Applied from '@/assets/icons/applied.png';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;
const JobApplication = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { jobDetails, jobApplication, isApplicationSubmited } = useAppSelector((state) => state.developerJobs);
	const { userInfo } = useAppSelector((state) => state.user);
	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...jobApplication };
		tmp[name as 'motivation' | 'notice_period'] = value;
		jobDispatcher.setJobApplication(tmp);
	};
	const handleDate = (date: Date | null) => {
		let tmp = { ...jobApplication };
		tmp.start_date = date?.toDateString();
		jobDispatcher.setJobApplication(tmp);
	};
	const handleApp = () => {
		let data = { ...jobApplication };
		data.jobId = jobDetails?._id;
		jobActions.setJobApplication(data!);
	};
	const onClose = () => {
		searchParams.delete('detail');
		setSearchParams(searchParams);
	};
	if (jobDetails?.applied) {
		return (
			<FlexBox>
				<img src={Applied} alt="applied" />
			</FlexBox>
		);
	}
	return (
		<Container>
			{isApplicationSubmited && <LoadingScreen />}
			<>
				<STitle>
					{userInfo?.firstName} {userInfo?.lastName}
				</STitle>
				<TextAreaField height="130px" name="motivation" onDataChange={handleInput} value={jobApplication?.motivation}>
					Let us know why you are a good fit.
				</TextAreaField>
				<Questions questions={jobDetails?.questions} />
				<div className="mt-10">
					<STitle>Availability</STitle>
					<FlexBox gap={20}>
						<InputDateField
							name="start_date"
							title="Your ideal starting date"
							onChange={handleDate}
							date={jobApplication?.start_date ? new Date(jobApplication?.start_date) : null}
						/>
						<InputField name="notice_period" onDataChange={handleInput} value={jobApplication?.notice_period}>
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
			</>
		</Container>
	);
};

export default JobApplication;
