import { IconProps } from '@/models/component';

const HeartFilledIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="inherit">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667z"></path>
				</g>
			</g>
		</svg>
	);
};

HeartFilledIcon.defaultProps = {
	width: '25px',
	height: '25px',
	color: 'black',
};

export default HeartFilledIcon;
