import { Component } from 'react';
import styled from 'styled-components';
import { FlexBox, Headline } from 'staak-ui';
import { AddNewJobProps, AddNewJobState } from '@/models/component';
import { StepProgress } from '@/components/companies/progressBar';
import BasicDetails from '@/components/companies/jobs/newjob/basics/BasicsDetails';
import AdditionalInfo from '@/components/companies/jobs/newjob/additional/AdditionalInfo';
import AddTests from '@/components/companies/jobs/newjob/tests/AddTests';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';

/* component style */

const StyledDiv = styled.div`
	align-self: flex-start;
	padding: 0px 20px;
	position: sticky;
	top: 77px;
`;
const StyledFlexBox = styled(FlexBox)`
	padding: 5px 0px !important;
	height: 100%;
`;
const StyledHeadline = styled(Headline)`
	margin-top: 0px;
`;
const SContainer = styled.div`
	padding: 15px 0px;
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
`;
/* component class */

class AddNewJob extends Component<any, AddNewJobState> {
	constructor(props: AddNewJobProps) {
		super(props);
		this.state = {
			currentStep: 0,
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePreviouse = this.handlePreviouse.bind(this);
	}
	handleNext() {
		const { currentStep } = this.state;
		this.setState({ currentStep: currentStep! + 1 });
	}
	handlePreviouse() {
		const { currentStep } = this.state;
		this.setState({ currentStep: currentStep! > 0 ? currentStep! - 1 : 0 });
	}
	render() {
		const { currentStep } = this.state;
		let step, title;
		switch (currentStep) {
			case 0:
				step = <BasicDetails onNext={this.handleNext} onPreviouse={this.handlePreviouse} />;
				title = 'Basics details';
				break;
			case 1:
				step = <AdditionalInfo onNext={this.handleNext} onPreviouse={this.handlePreviouse} />;
				title = 'Location & skills';
				break;
			case 2:
				step = <AddTests onNext={this.handleNext} onPreviouse={this.handlePreviouse} />;
				title = 'Tests';
				break;
			default:
				step = <BasicDetails onNext={this.handleNext} />;
				title = 'Basics details';
		}
		return (
			<StyledFlexBox justify="flex-start" align="flex-start" height="100%">
				<StyledDiv>
					<StepProgress
						style={{ marginLeft: '40px' }}
						direction="vertical"
						items={[
							{ name: 'Basics', valid: currentStep! - 1 === 0, active: currentStep === 0 },
							{ name: 'Details', valid: currentStep! - 1 === 1, active: currentStep === 1 },
							{ name: 'Qualifications', valid: currentStep! - 1 === 2, active: currentStep === 2 },
							{ name: 'Review', valid: currentStep! - 1 === 3, active: currentStep === 3 },
						]}
					/>
				</StyledDiv>
				<SContainer>
					<div style={{ borderBottom: `1px solid ${Colors.BLACK_12}`, padding: '0px 20px' }}>
						<StyledHeadline variant="h2" size="md">
							{title}
						</StyledHeadline>
					</div>
					<div style={{ padding: '0px 20px' }}>{step}</div>
				</SContainer>
			</StyledFlexBox>
		);
	}
}

export default AddNewJob;
