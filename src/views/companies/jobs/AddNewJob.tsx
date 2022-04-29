import { Component } from 'react';
import styled from 'styled-components';
import { Headline } from 'staak-ui';
import { AddNewJobProps, IAddNewJobState } from '@/models/component';
import { StepProgress } from '@/components/companies/_common/wizard';
import BasicDetails from '@/components/companies/jobs/newjob/basics/BasicInfo';
import AdditionalInfo from '@/components/companies/jobs/newjob/details/DetailedInfo';
import AddTests from '@/components/companies/jobs/newjob/qualifications/QualificationsInfo';
import JobReview from '@/components/companies/jobs/newjob/review/JobReview';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { HEADER_HIEGHT } from '@/constants/app.constants';

/* component style */

const AddJobContainer = styled.div`
	position: relative;
	padding: 15px 60px 15px 10px;
	display: flex;
`;

const StepContainer = styled.div`
	position: sticky;
	height: max-content;
	padding: 0px 50px;
	top: calc(${HEADER_HIEGHT}px + 20px);
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

class AddNewJob extends Component<any, IAddNewJobState> {
	constructor(props: AddNewJobProps) {
		super(props);
		this.state = {
			currentStep: 0,
			validSteps: [false, false, false, false],
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePreviouse = this.handlePreviouse.bind(this);
		this.selectStep = this.selectStep.bind(this);
	}
	selectStep(event: React.SyntheticEvent, step: number) {
		let udpate = true;
		const { validSteps } = this.state;
		for (var i = 0; i < step; i++) udpate = udpate && validSteps![i];
		if (udpate) this.setState({ currentStep: step });
	}
	handleNext() {
		const { currentStep, validSteps } = this.state;
		const tmp = [...validSteps!];
		tmp[currentStep!] = true;
		this.setState({
			currentStep: currentStep! + 1,
			validSteps: tmp,
		});
	}
	handlePreviouse() {
		const { currentStep } = this.state;
		this.setState({ currentStep: currentStep! > 0 ? currentStep! - 1 : 0 });
	}
	render() {
		const { currentStep, validSteps } = this.state;
		let step, title;
		switch (currentStep) {
			case 0:
				step = <BasicDetails onNext={this.handleNext} />;
				title = 'Basic Informations';
				break;
			case 1:
				step = <AdditionalInfo onNext={this.handleNext} onPreviouse={this.handlePreviouse} />;
				title = 'Detailed Informations';
				break;
			case 2:
				step = <AddTests onNext={this.handleNext} onPreviouse={this.handlePreviouse} />;
				title = 'Qualifications';
				break;
			case 3:
				step = <JobReview onPreviouse={this.handlePreviouse} />;
				title = 'Job Review';
		}
		return (
			<AddJobContainer>
				<StepContainer>
					<StepProgress
						onSelectStep={this.selectStep}
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
			</AddJobContainer>
		);
	}
}

export default AddNewJob;
