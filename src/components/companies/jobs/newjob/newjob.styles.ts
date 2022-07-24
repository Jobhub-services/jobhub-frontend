import { Button, IconButton, FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';

const HEADER_STEP_HEIGHT = 65;

export const StyledHeadline = styled(Headline)`
	margin: 0px;
`;

export const SButton = styled(Button)`
	background-color: transparent !important;
	padding-left: 0px !important;
`;

export const SIcon = styled(IconButton)`
	border: 1px solid ${Colors.BLACK_4} !important;
	border-radius: 8px !important;
	padding: 2px !important;
	transition-duration: 0.5s;
	fill: ${Colors.BLACK_4};
	&:hover {
		fill: ${Colors.RED_BASE} !important;
		border: 1px solid ${Colors.RED_BASE} !important;
		background-color: ${Colors.RED_CLEAR_5} !important;
	}
`;

export const HeaderContainer = styled(FlexBox)`
	border-bottom: 1px solid ${Colors.BLACK_12};
	padding: 10px 20px;
	height: ${HEADER_STEP_HEIGHT}px;
`;

export const StepContent = styled.div`
	padding: 0px 20px;
	height: calc(100% - ${HEADER_STEP_HEIGHT}px);
	overflow-y: auto;
`;
