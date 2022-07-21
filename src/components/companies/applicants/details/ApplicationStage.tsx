import { FlexBox, Button, TextArea } from 'staak-ui';
import { StageBar } from '@/components/companies/_common/progressBar';
import { colors } from '@/assets/theme';
import { useState } from 'react';
import styled from 'styled-components';
import { PopModel } from '@/components/common';
import { ApplicationStatus } from '@/types/company/applications.type';
import { useAppSelector } from '@/utils/appHooks';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { LoadingIcon } from '@/assets/icons';

const Status: ApplicationStatus[] = ['NEW', 'ACCEPTED', 'IN_PROGRESS', 'HIRED'];
const Stages = ['New Applicant', 'In-Review', 'Interview'];
const ButtonStage = ['Process', 'Schedule Interviews', 'Hire'];
const LAST_ITEM = Stages.length - 1;

const Container = styled.div``;
const SLoading = styled.div`
	border: 1px solid ${colors.PURPLE_BASE};
	border-radius: 7px;
	padding: 7px;
	display: flex;
	width: 100%;
`;

const ApplicationStage = () => {
	const { applicantDetails, isStatusChange } = useAppSelector((state) => state.applications);
	const [popModelClosed, setPopModelClosed] = useState(true);
	const currentStage = Status.indexOf(applicantDetails?.status!);
	const nextStage = () => {
		applicationsActions.setApplicationStatus(Status[currentStage + 1], applicantDetails._id);
	};
	const onClosed = () => {
		setPopModelClosed(!popModelClosed);
	};

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
				{isStatusChange ? (
					<SLoading>
						<LoadingIcon color={colors.PURPLE_BASE} />
					</SLoading>
				) : (
					<>
						<Button variant="outlined" width={currentStage !== LAST_ITEM ? '100%' : '50%'} onClick={nextStage}>
							{ButtonStage[currentStage]}
						</Button>
						<Button color="red" variant="outlined" width={currentStage === LAST_ITEM && '50%'} onClick={onClosed}>
							Decline
						</Button>
					</>
				)}
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
					<Button width="100%" onClick={() => applicationsActions.setApplicationStatus('DECLINED', applicantDetails._id)}>
						Confirme
					</Button>
				</PopModel.Footer>
			</PopModel>
		</Container>
	);
};

export default ApplicationStage;
