import { FlexBox, Button, TextArea } from 'staak-ui';
import { StageBar } from '@/components/companies/_common/progressBar';
import { colors } from '@/assets/theme';
import { useState } from 'react';
import styled from 'styled-components';
import { PopModel } from '@/components/common';
import { ApplicationStatus } from '@/types/company/applications.type';
import { useAppSelector } from '@/utils/appHooks';
import { applicationsActions } from '@/modules/actions/company/applications.actions';

const Status: ApplicationStatus[] = ['new', 'process', 'interview', 'hired'];
const Stages = ['New Applicant', 'In-Review', 'Interview'];
const ButtonStage = ['Process', 'Schedule Interviews', 'Hire'];
const LAST_ITEM = Stages.length - 1;

const Container = styled.div``;

const ApplicationStage = () => {
	const { applicationStatus, _id } = useAppSelector((state) => state.applications.applicantDetails);
	const [popModelClosed, setPopModelClosed] = useState(true);
	const currentStage = Status.indexOf(applicationStatus!);
	console.log('current status is ', applicationStatus);
	console.log('current stage value is ', currentStage);
	function nextStage() {
		applicationsActions.setApplicationStatus(Status[currentStage + 1], _id);
	}
	function onClosed() {
		setPopModelClosed(!popModelClosed);
	}

	return (
		<Container>
			<div style={{ background: `${colors.PURPLE_1}`, padding: '15px 10px', borderRadius: '5px', marginTop: '15px' }}>
				<StageBar
					current={Stages[currentStage]}
					data={[
						{ name: 'New Applicant', passed: currentStage >= 0 },
						{ name: 'In-Review', passed: currentStage >= 1 },
						{ name: 'Interview', passed: currentStage >= 2 },
					]}
				/>
			</div>
			<FlexBox justify="start" gap={10} style={{ margin: '15px 0' }}>
				<Button variant="outlined" width={currentStage !== LAST_ITEM ? '100%' : '50%'} onClick={nextStage}>
					{ButtonStage[currentStage]}
				</Button>
				<Button color="red" variant="outlined" width={currentStage === LAST_ITEM && '50%'} onClick={onClosed}>
					Decline
				</Button>
			</FlexBox>
			<PopModel
				closed={popModelClosed}
				onClose={(val) => {
					setPopModelClosed(val);
				}}
			>
				<PopModel.Header>
					<h3 style={{ margin: '0' }}>Comment</h3>
				</PopModel.Header>
				<PopModel.Body>
					<TextArea name="comment" placeholder="Comment" width="400px"></TextArea>
				</PopModel.Body>
				<PopModel.Footer>
					<Button width="100%" onClick={() => applicationsActions.setApplicationStatus('declined', _id)}>
						Confirme
					</Button>
				</PopModel.Footer>
			</PopModel>
		</Container>
	);
};

export default ApplicationStage;
