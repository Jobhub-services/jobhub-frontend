import { colors } from '@/assets/theme';
import { StandardProps } from '@/models/component';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const CSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const RSpan = styled.span`
	color: ${colors.BLACK_7};
`;
const PSpan = styled.span`
	display: inline-block;
	background-color: ${colors.BLACK_3};
	border-radius: 50%;
	width: 3px;
	height: 3px;
`;
const InfoItem = ({ title, value, className }: { title: string; value: string } & StandardProps) => {
	return (
		<FlexBox gap={5} justify="start" className={className}>
			<CSpan>{title}</CSpan>
			<PSpan></PSpan>
			<RSpan>{value}</RSpan>
		</FlexBox>
	);
};

export default InfoItem;
