import { PopModel } from '@/components/common';
import { settingsAction } from '@/modules/actions/company/settings.actions';
import { Button, FlexBox } from 'staak-ui';
type PCancel = {
	open?: boolean;
	onClose: () => void;
};
const CancelSubscriptionModal = ({ open, onClose }: PCancel) => {
	const handleCancel = () => {
		settingsAction.cancelSubscription();
	};
	return (
		<PopModel closed={!open} width="30%" onClose={() => onClose()}>
			<PopModel.Header>
				<h3 style={{ margin: '0' }}>Cancel Subscription</h3>
			</PopModel.Header>
			<PopModel.Body>
				<FlexBox justify="start" gap={10}>
					<div>
						By Continuing this action, your subscription will be removed and you will not be able to restore it or to access staak software features.
						Do you want to continue?
					</div>
				</FlexBox>
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox gap={15} width="100%" justify="end">
					<Button variant="light" onClick={() => onClose()}>
						Cancel
					</Button>
					<Button color="red" onClick={handleCancel}>
						Continue
					</Button>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default CancelSubscriptionModal;
