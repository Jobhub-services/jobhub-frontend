import { PopModel } from '@/components/common';
import { PDeleteModalJob } from '@/models/component';
import { jobActions } from '@/modules/actions/company/job.actions';
import { Button, FlexBox } from 'staak-ui';

const DeleteDialogue = ({ show, onContinue, onClose, jobId }: PDeleteModalJob) => {
	const handleDelete = () => {
		jobActions.deleteJob(jobId);
		if (onClose) onClose('');
	};
	return (
		<PopModel width="25%" top closed={!show} onClose={onClose}>
			<PopModel.Header>
				<div style={{ fontWeight: '500', fontSize: '15px' }}>Delete job</div>
			</PopModel.Header>
			<PopModel.Body>
				<div>This action is irreversible, the job will no longer be visible to you or to job seekers. Do you want to continue?</div>
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox justify="end" width="100%" gap={10}>
					<Button variant="light" size="md" onClick={onClose}>
						Close
					</Button>
					<Button color="red" size="md" onClick={handleDelete}>
						Continue
					</Button>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default DeleteDialogue;
