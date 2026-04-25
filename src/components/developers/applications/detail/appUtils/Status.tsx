import { PStatus } from '@/models/component/developer/application.interface';
import { BCApplicationStatus, CApplicationStatus, IconStatus, TxtApplicationStatus } from '@/constants/developer/application.constants';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';

const Container = styled(FlexBox)`
	border: 2px solid ${(props: PStatus) => CApplicationStatus[props.status!]};
	background-color: ${(props: PStatus) => BCApplicationStatus[props.status!]};
	border-radius: 5px;
	padding: 15px 20px;
	color: ${colors.BLACK_3};
`;
const Status = ({ status, title, content, className }: PStatus) => {
	return (
		<Container className={className} status={status} justify="start" align="start" gap={15}>
			<span>{IconStatus[status!]}</span>
			<div>
				<div style={{ fontWeight: 500 }}>Application {TxtApplicationStatus[status!]}</div>
				<div className="mt-10">{content}</div>
			</div>
		</Container>
	);
};

Status.defaultProps = {
	status: 'NEW',
};
export default Status;
