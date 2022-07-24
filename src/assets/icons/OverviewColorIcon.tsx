import { IconProps } from '@/models/component';

const OverviewColorIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<defs>
				<linearGradient x1="34.76908" y1="93.59308" x2="59.42958" y2="134.6975" gradientUnits="userSpaceOnUse" id="color-1">
					<stop offset="0" stop-color="#1784d8"></stop>
					<stop offset="1" stop-color="#0864c5"></stop>
				</linearGradient>
				<linearGradient x1="88.16433" y1="97.21583" x2="159.61958" y2="146.54042" gradientUnits="userSpaceOnUse" id="color-2">
					<stop offset="0" stop-color="#31abec"></stop>
					<stop offset="1" stop-color="#1582d5"></stop>
				</linearGradient>
				<linearGradient x1="29.1755" y1="41.92142" x2="92.407" y2="98.83192" gradientUnits="userSpaceOnUse" id="color-3">
					<stop offset="0" stop-color="#31abec"></stop>
					<stop offset="1" stop-color="#1582d5"></stop>
				</linearGradient>
				<linearGradient x1="92.85492" y1="36.36008" x2="200.77775" y2="109.7145" gradientUnits="userSpaceOnUse" id="color-4">
					<stop offset="0" stop-color="#54daff"></stop>
					<stop offset="1" stop-color="#25a2e5"></stop>
				</linearGradient>
			</defs>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path
						d="M71.66667,89.6765l-53.71058,-0.09317l0.00358,39.42383c0,3.57975 2.64092,6.60767 6.18483,7.09858l47.52217,6.57542z"
						fill="url(#color-1)"
					></path>
					<path
						d="M78.83333,89.69083v53.98292l67.08717,9.28083c4.30717,0.59483 8.1485,-2.74842 8.1485,-7.09858l0.01433,-56.03617z"
						fill="url(#color-2)"
					></path>
					<path
						d="M71.66667,29.584l-47.5795,6.73667c-3.53675,0.50167 -6.16692,3.52958 -6.16333,7.10217l0.043,38.99383h53.69983z"
						fill="url(#color-3)"
					></path>
					<path d="M78.83333,28.56992v53.84675h75.23208v-56.24758c0,-4.35733 -3.85567,-7.70775 -8.17,-7.095z" fill="url(#color-4)"></path>
				</g>
			</g>
		</svg>
	);
};

OverviewColorIcon.defaultProps = {
	width: '25px',
	height: '25px',
};
export default OverviewColorIcon;
