import { TalentStatusProps } from '@/models/component/companies/talents/talents.interface';
import { StatusColors } from '@/constants/company/talent.contants';
import styled from 'styled-components';

const Circle = styled.span<TalentStatusProps>`
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${(props) => StatusColors[props.status!]};
`;
const Status = styled.span<TalentStatusProps>`
	color: ${(props) => StatusColors[props.status!]};
	font-weight: 500;
	margin-left: 10px;
`;
const TalentStatus = ({ title, status, style }: TalentStatusProps) => {
	return (
		<div style={{ ...style }} className="mt-10">
			<Circle status={status} />
			<Status status={status}>{title}</Status>
		</div>
	);
};

TalentStatus.defaultProps = {
	status: 'ready',
};
export default TalentStatus;
