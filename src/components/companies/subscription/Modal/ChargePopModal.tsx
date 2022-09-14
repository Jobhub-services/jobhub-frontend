import { colors } from '@/assets/theme';
import { PopModel } from '@/components/common';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
type PCharge = {
	open?: boolean;
	message?: string;
	paymentUrl?: string;
	onClose: () => void;
};
const SA = styled.a`
	text-decoration: underline;
	color: ${colors.PURPLE_2};
	font-weight: bold;
`;
//Please complete the payment in the given url
const ChargePopModal = ({ open, message, paymentUrl, onClose }: PCharge) => {
	return (
		<PopModel closed={!open} width="30%" onClose={() => onClose()}>
			<PopModel.Header>
				<h3 style={{ margin: '0' }}>Charge Jobs</h3>
			</PopModel.Header>
			<PopModel.Body>
				<FlexBox justify="start" gap={10}>
					<div>{message}</div>
					<SA href={paymentUrl} target="_blanc">
						Click Here
					</SA>
				</FlexBox>
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox gap={15} width="100%" justify="end">
					<Button variant="light" onClick={() => onClose()}>
						Cancel
					</Button>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default ChargePopModal;
