import { PopModel } from '@/components/common';
import { Link } from 'react-router-dom';
import { Button, FlexBox } from 'staak-ui';

const EnableJobModal = () => {
	return (
		<PopModel width="20%" closable={false} positionAbsolute style={{ zIndex: '9' }}>
			<PopModel.Header>
				<strong style={{ fontSize: '16px' }}>Enable Jobs</strong>
			</PopModel.Header>
			<PopModel.Body>
				<div>You cannot create jobs, please renew your subscription or buy new jobs</div>
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox>
					<Link to={`/settings/subscription`}>
						<Button>Subscribe Now</Button>
					</Link>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default EnableJobModal;
