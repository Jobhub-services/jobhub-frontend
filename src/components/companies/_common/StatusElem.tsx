import { StatusElemProps } from '@/models/component/companies/common.interface';
import { StatusColors } from '@/constants/company/common.constants';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';

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
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const StatusElem = ({ title, status, style, className }: StatusElemProps) => {
	return (
		<FlexBox justify="start" style={{ ...style }} className={` ${className}`} gap={10}>
			<Circle status={status} />
			<Status status={status}>{title}</Status>
		</FlexBox>
	);
};

export default StatusElem;
