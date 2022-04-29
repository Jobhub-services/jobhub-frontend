import { StatusElemProps } from '@/models/component/companies/common.interface';
import { StatusColors } from '@/constants/company/common.constants';
import styled from 'styled-components';

const Circle = styled.span<StatusElemProps>`
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${(props) => StatusColors[props.status!]};
`;
const Status = styled.span<StatusElemProps>`
	color: ${(props) => StatusColors[props.status!]};
	font-weight: 500;
	margin-left: 10px;
`;
const StatusElem = ({ title, status, style }: StatusElemProps) => {
	return (
		<div style={{ ...style }} className="mt-10">
			<Circle status={status} />
			<Status status={status}>{title}</Status>
		</div>
	);
};

export default StatusElem;
