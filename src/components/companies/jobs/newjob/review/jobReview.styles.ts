import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';

export const SUl = styled.ul`
	margin-top: 0;
	padding-inline-start: 20px;
`;

export const StyledGap = styled(FlexBox)`
	margin-top: 10px;
	gap: 15px;
`;

export const SPre = styled.pre`
	white-space: pre-line;
	font-size: inherit;
	font-family: inherit;
	color: ${colors.BLACK_2};
	line-height: 25px;
	margin-top: 0;
`;

export const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
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
