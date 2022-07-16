import { colors } from '@/assets/theme';
import styled from 'styled-components';

export const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;

export const SP = styled.pre`
	font-family: inherit;
	//margin-left: 20px;
	margin-top: 5px;
	color: ${colors.BLACK_2};
	white-space: pre-line;
`;

export const SSubTitle = styled.h2`
	margin: 5px 0;
	font-size: 14px;
	color: ${colors.BLACK_5};
`;

export const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
