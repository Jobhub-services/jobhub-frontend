import { colors } from '@/assets/theme';
import styled from 'styled-components';

const ProgressBarStyled = styled.div<any>`
	position: relative;
	border-radius: ${(props) => props.radius ?? '10px'};
	height: ${(props) => props.height ?? '15px'};
	width: ${(props) => props.width ?? '260px'};
	//margin-top: 12px;
	padding: 1px;
	overflow: hidden;
`;
const AnimatedSpan = styled.span`
	transition: 0.2s ease;
	display: block;
	border-radius: 10px;
	height: 100%;
	animation: animateProgressBar 1s linear infinite;
	background-image: linear-gradient(90deg, ${'#e0e0e085'}, ${colors.BLACK_13}, ${'#e0e0e085'}, ${colors.BLACK_13});
	background-size: 300% 100%;
`;

export { ProgressBarStyled, AnimatedSpan };
