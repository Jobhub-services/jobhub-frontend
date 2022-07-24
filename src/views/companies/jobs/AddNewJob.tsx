import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, FlexBox, Headline } from 'staak-ui';
import { StepProgress } from '@/components/companies/_common/wizard';
import BasicDetails from '@/components/companies/jobs/newjob/basics/BasicInfo';
import DetailedInfo from '@/components/companies/jobs/newjob/details/DetailedInfo';
import AddTests from '@/components/companies/jobs/newjob/qualifications/QualificationsInfo';
import JobReview from '@/components/companies/jobs/newjob/review/JobReview';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { useAppSelector } from '@/utils/appHooks';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { useNavigate } from 'react-router-dom';
import { PopModel } from '@/components';
import { SuccessIcon } from '@/assets/icons';
import { JobInstance } from '@/constants/company/job.contants';
import { jobActions } from '@/modules/actions/company/job.actions';
import JobErrors from '@/components/companies/jobs/newjob/JobErrors';

const SLoading = styled.div`
	position: fixed;
	top: ${HEADER_HIEGHT}px;
	width: 100%;
	height: 100%;
`;

const AddJobContainer = styled.div`
	position: relative;
	padding: 15px 60px 15px 10px;
	display: flex;
	height: 100%;
`;

const StepContainer = styled.div`
	position: sticky;
	height: max-content;
	padding: 0px 50px;
	top: 20px;
	//top: calc(${HEADER_HIEGHT}px + 20px);
`;

const SContainer = styled.div`
	padding: 0 0 15px 0;
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	width: calc(100% - 230px);
`;
/* component class */
//IAddNewJobState
const AddNewJob = () => {
	const { isLoading, jobCreated, createJob } = useAppSelector((state) => state.job);
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);
	const [validSteps, setvalidSteps] = useState([false, false, false, false]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(isLoading!);
	}, [isLoading]);
	useEffect(() => {
		if (jobCreated) {
			setCurrentStep(0);
			setvalidSteps([false, false, false, false]);
		}
	}, [jobCreated]);

	const selectStep = (event: React.SyntheticEvent, step: number) => {
		let udpate = true;
		for (var i = 0; i < step; i++) udpate = udpate && validSteps![i];
		if (udpate) setCurrentStep(step);
	};

	const handleNext = () => {
		const tmp = [...validSteps!];
		tmp[currentStep!] = true;
		setCurrentStep(currentStep! + 1);
		setvalidSteps(tmp);
	};

	const handlePreviouse = () => {
		setCurrentStep(currentStep! > 0 ? currentStep! - 1 : 0);
	};

	const browseJobs = () => {
		jobDispatcher.setJobCreated(false);
		jobDispatcher.createJob(JobInstance);
		navigate('/jobs');
	};

	const addNewJob = () => {
		jobDispatcher.setJobCreated(false);
		jobDispatcher.createJob(JobInstance);
	};
	let step;
	switch (currentStep) {
		case 0:
			step = <BasicDetails onNext={handleNext} />;
			break;
		case 1:
			step = <DetailedInfo onNext={handleNext} onPreviouse={handlePreviouse} />;
			break;
		case 2:
			step = <AddTests onNext={handleNext} onPreviouse={handlePreviouse} />;
			break;
		case 3:
			step = <JobReview onPreviouse={handlePreviouse} />;
	}
	return (
		<>
			{jobCreated && (
				<PopModel closed={false} width="20%">
					<PopModel.Header>
						<span>Job creation</span>
					</PopModel.Header>
					<PopModel.Body>
						<FlexBox flexDirection="column">
							<SuccessIcon width="50px" height="50px" />
							<div className="mt-15 mb-15" style={{ fontSize: '16px' }}>
								Your job has been created successfully
							</div>
						</FlexBox>
					</PopModel.Body>
					<PopModel.Footer>
						<FlexBox gap={30} width="100%">
							<Button color="yellow" onClick={browseJobs}>
								Browse jobs
							</Button>
							<Button onClick={addNewJob}>New job</Button>
						</FlexBox>
					</PopModel.Footer>
				</PopModel>
			)}
			<AddJobContainer>
				<StepContainer>
					<StepProgress
						onSelectStep={selectStep}
						direction="vertical"
						items={[
							{ name: 'Basics', valid: validSteps![0], active: currentStep === 0 },
							{ name: 'Details', valid: validSteps![1], active: currentStep === 1 },
							{ name: 'Qualifications', valid: validSteps![2], active: currentStep === 2 },
							{ name: 'Review', valid: validSteps![3], active: currentStep === 3 },
						]}
					/>
				</StepContainer>
				<SContainer>{step}</SContainer>
				{isLoading && (
					<SLoading>
						<LoadingScreen />
					</SLoading>
				)}
				<JobErrors />
			</AddJobContainer>
		</>
	);
};

export default AddNewJob;
