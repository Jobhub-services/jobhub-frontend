import styled from 'styled-components';
import { colors } from '@/assets/theme';

const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;
const SSubTitle = styled.h2`
	margin: 5px 0;
	font-size: 14px;
	color: ${colors.BLACK_5};
`;
const SSpan = styled.span`
	display: inline-block;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
`;
export { STitle, SSubTitle, SSpan, SLink };
