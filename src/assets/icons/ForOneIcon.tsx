import { IconProps } from '@/models/component';

const ForOneIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<defs>
				<linearGradient x1="36.81158" y1="36.81158" x2="136.568" y2="136.568" gradientUnits="userSpaceOnUse" id="color-f1">
					<stop offset="0" stop-color="#fede00"></stop>
					<stop offset="1" stop-color="#ffd000"></stop>
				</linearGradient>
			</defs>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<circle cx="24" cy="24" transform="scale(3.58333,3.58333)" r="20" fill="url(#color-f1)"></circle>
					<circle cx="24" cy="24" transform="scale(3.58333,3.58333)" r="17" fill="#f5be00"></circle>
					<path
						d="M109.90442,120.30683h-44.57667v-12.28367h14.59133v-43.903l-14.99267,3.23933v-12.58467l30.47267,-6.13467v59.383h14.50533z"
						fill="#fee119"
					></path>
				</g>
			</g>
		</svg>
	);
};
ForOneIcon.defaultProps = {
	width: '30px',
	height: '30px',
};
export default ForOneIcon;
