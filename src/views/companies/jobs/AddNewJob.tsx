import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Headline } from 'staak-ui';
import { StepProgress } from '@/components/companies/_common/wizard';
import BasicDetails from '@/components/companies/jobs/newjob/basics/BasicInfo';
import AdditionalInfo from '@/components/companies/jobs/newjob/details/DetailedInfo';
import AddTests from '@/components/companies/jobs/newjob/qualifications/QualificationsInfo';
import JobReview from '@/components/companies/jobs/newjob/review/JobReview';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { useAppSelector } from '@/utils/appHooks';
import Alert from '@/components/common/Alert';
import { jobDispatcher } from '@/modules/actions/company/job.actions';

/* component style */
const ErrorContainer = styled.div`
	display: flex;
	position: absolute;
	top: 10px;
	right: 10px;
	flex-direction: column;
	align-items: end;
`;
const AddJobContainer = styled.div`
	position: relative;
	padding: 15px 60px 15px 10px;
	display: flex;
`;

const StepContainer = styled.div`
	position: sticky;
	height: max-content;
	padding: 0px 50px;
	top: 20px;
	//top: calc(${HEADER_HIEGHT}px + 20px);
`;

const StyledHeadline = styled(Headline)`
	margin-top: 0px;
`;
const SContainer = styled.div`
	padding: 15px 0px;
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	width: calc(100% - 230px);
`;
/* component class */
//IAddNewJobState
const AddNewJob = () => {
	const { isLoading, errors, jobCreated } = useAppSelector((state) => state.job);
	const [currentStep, setCurrentStep] = useState(0);
	const [validSteps, setvalidSteps] = useState([false, false, false, false]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>([]);
	useEffect(() => {
		setLoading(isLoading!);
	}, [isLoading]);
	useEffect(() => {
		if (jobCreated) {
			setCurrentStep(0);
			setvalidSteps([false, false, false, false]);
		}
	}, [jobCreated]);
	useEffect(() => {
		setError(errors!);
	}, [errors]);
	function selectStep(event: React.SyntheticEvent, step: number) {
		let udpate = true;
		for (var i = 0; i < step; i++) udpate = udpate && validSteps![i];
		if (udpate) setCurrentStep(step);
	}
	function handleNext() {
		const tmp = [...validSteps!];
		tmp[currentStep!] = true;
		setCurrentStep(currentStep! + 1);
		setvalidSteps(tmp);
	}
	function handlePreviouse() {
		setCurrentStep(currentStep! > 0 ? currentStep! - 1 : 0);
	}
	let step, title;
	switch (currentStep) {
		case 0:
			step = <BasicDetails onNext={handleNext} />;
			title = 'Basic Informations';
			break;
		case 1:
			step = <AdditionalInfo onNext={handleNext} onPreviouse={handlePreviouse} />;
			title = 'Detailed Informations';
			break;
		case 2:
			step = <AddTests onNext={handleNext} onPreviouse={handlePreviouse} />;
			title = 'Qualifications';
			break;
		case 3:
			step = <JobReview onPreviouse={handlePreviouse} />;
			title = 'Job Review';
	}
	return (
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
			<SContainer>
				<div style={{ borderBottom: `1px solid ${Colors.BLACK_12}`, padding: '0px 20px' }}>
					<StyledHeadline variant="h2" size="md">
						{title}
					</StyledHeadline>
				</div>
				<div style={{ padding: '0px 20px' }}>{step}</div>
			</SContainer>
			{loading && <LoadingScreen />}
			<ErrorContainer>
				{error.job?.length > 0 &&
					error.job?.map((elem: any, idx: number) => {
						return (
							<Alert className="mt-15" key={idx}>
								{elem.key} : {elem.value}
							</Alert>
						);
					})}
				{jobCreated && (
					<Alert
						className="mt-15"
						color="green"
						onCloseCallback={() => {
							jobDispatcher.setJobCreated(false);
						}}
					>
						Job created succefully
					</Alert>
				)}
			</ErrorContainer>
		</AddJobContainer>
	);
};

export default AddNewJob;
