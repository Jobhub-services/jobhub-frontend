import { FlexBox, Button, TextArea } from 'staak-ui';
import { StageBar } from '@/components/companies/progressBar';
import { colors } from '@/assets/theme';
import { useState } from 'react';
import styled from 'styled-components';
import { PopModel } from '@/components/common';

const Stages = ['New Applicant', 'In-Review', 'Interview', 'Hired/Declined'];
const ButtonStage = ['Start Reviewing', 'Schedule Interviews', 'Hire OR Decline', 'Hire'];
const LAST_ITEM = Stages.length - 1;

const Container = styled.div``;

const ApplicationStage = (props: any) => {
	const [currentStage, setCurrentStage] = useState(0);
	const [popModelClosed, setPopModelClosed] = useState(true);
	function nextStage() {
		if (currentStage < Stages.length - 1) setCurrentStage(currentStage + 1);
		if (currentStage === LAST_ITEM) props.onConfirm('accepted');
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
						{ name: 'Hired/Declined', passed: currentStage >= 3 },
					]}
				/>
			</div>
			<FlexBox justify="start" style={{ gap: '10px', margin: '15px 0' }}>
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
					<Button width="100%" onClick={() => props.onConfirm('declined')}>
						Confirme
					</Button>
				</PopModel.Footer>
			</PopModel>
		</Container>
	);
};

export default ApplicationStage;
