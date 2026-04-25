import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SButton = styled.span<any>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 50%;
	border: 1px solid ${(props) => props.color};
	padding: ${(props) => props.padding}px;
`;
SButton.defaultProps = {
	color: colors.PURPLE_3,
	padding: 5,
};
const SpanTitle = styled.span`
	font-weight: 600;
	font-size: 17px;
	color: ${colors.BLACK_4};
`;

const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;

const SIcon = styled.div`
	display: flex;
	justify-content: center;
`;
export { SButton, SpanTitle, SSpan, SIcon };
