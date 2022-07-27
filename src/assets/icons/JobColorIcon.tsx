import { IconProps } from '@/models/component';

const JobColorIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<defs>
				<linearGradient x1="86" y1="32.17475" x2="86" y2="22.60367" gradientUnits="userSpaceOnUse" id="color-1">
					<stop offset="0" stopColor="#b33f20"></stop>
					<stop offset="0.129" stopColor="#c74724"></stop>
					<stop offset="0.295" stopColor="#d94f29"></stop>
					<stop offset="0.469" stopColor="#e4532b"></stop>
					<stop offset="0.659" stopColor="#e8552c"></stop>
				</linearGradient>
				<radialGradient cx="85.398" cy="21.47121" r="163.90167" gradientUnits="userSpaceOnUse" id="color-2">
					<stop offset="0" stopColor="#40150b"></stop>
					<stop offset="0.156" stopColor="#622110"></stop>
					<stop offset="0.417" stopColor="#953218"></stop>
					<stop offset="0.645" stopColor="#ba3f1e"></stop>
					<stop offset="0.828" stopColor="#d14722"></stop>
					<stop offset="0.944" stopColor="#d94a23"></stop>
				</radialGradient>
				<linearGradient x1="86" y1="32.35033" x2="86" y2="96.48842" gradientUnits="userSpaceOnUse" id="color-3">
					<stop offset="0" stopColor="#fc7d5b"></stop>
					<stop offset="0.06" stopColor="#f8734f"></stop>
					<stop offset="0.18" stopColor="#f3653d"></stop>
					<stop offset="0.326" stopColor="#f05b31"></stop>
					<stop offset="0.523" stopColor="#ee552a"></stop>
					<stop offset="1" stopColor="#ed5328"></stop>
				</linearGradient>
				<radialGradient cx="132.37192" cy="132.28233" r="35.32092" gradientUnits="userSpaceOnUse" id="color-4">
					<stop offset="0.627" stopColor="#000000"></stop>
					<stop offset="1" stopColor="#000000" stopOpacity="0"></stop>
				</radialGradient>
				<radialGradient cx="132.62633" cy="132.75533" r="35.12383" gradientUnits="userSpaceOnUse" id="color-5">
					<stop offset="0.693" stopColor="#006185"></stop>
					<stop offset="0.921" stopColor="#35c1f1"></stop>
				</radialGradient>
				<linearGradient x1="112.71375" y1="112.71375" x2="152.89725" y2="152.89725" gradientUnits="userSpaceOnUse" id="color-6">
					<stop offset="0" stopColor="#a3ffff"></stop>
					<stop offset="0.223" stopColor="#9dfbff"></stop>
					<stop offset="0.53" stopColor="#8bf1ff"></stop>
					<stop offset="0.885" stopColor="#6ee0ff"></stop>
					<stop offset="1" stopColor="#63daff"></stop>
				</linearGradient>
			</defs>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path
						d="M102.125,21.5h-32.25c-2.967,0 -5.375,2.408 -5.375,5.375v5.375h43v-5.375c0,-2.967 -2.408,-5.375 -5.375,-5.375z"
						fill="url(#color-1)"
					></path>
					<path
						d="M150.5,146.91667h-129c-3.94167,0 -7.16667,-3.225 -7.16667,-7.16667v-93.16667c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h114.66667c7.88333,0 14.33333,6.45 14.33333,14.33333v93.16667c0,3.94167 -3.225,7.16667 -7.16667,7.16667z"
						fill="url(#color-2)"
					></path>
					<path
						d="M151.56425,90.49708l-65.56425,9.83625l-65.56425,-9.83625c-3.50808,-0.52317 -6.10242,-3.53675 -6.10242,-7.08425v-36.8295c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h114.66667c7.88333,0 14.33333,6.45 14.33333,14.33333v36.8295c0,3.5475 -2.59433,6.56108 -6.10242,7.08425z"
						fill="url(#color-3)"
					></path>
					<path
						d="M91.375,75.25h-10.75c-0.989,0 -1.79167,0.80267 -1.79167,1.79167v10.75c0,0.989 0.80267,1.79167 1.79167,1.79167h10.75c0.989,0 1.79167,-0.80267 1.79167,-1.79167v-10.75c0,-0.989 -0.80267,-1.79167 -1.79167,-1.79167z"
						fill="#f6eca5"
					></path>
					<path
						d="M132.58333,96.75c-19.79075,0 -35.83333,16.04258 -35.83333,35.83333c0,5.09908 1.08217,9.94017 3.00283,14.33333h50.74717c3.94167,0 7.16667,-3.225 7.16667,-7.16667v-32.73733c-6.46433,-6.3425 -15.31158,-10.26267 -25.08333,-10.26267z"
						fill="url(#color-4)"
						opacity="0.15"
					></path>
					<path
						d="M161.22133,154.886l-6.33533,6.33533l10.51708,10.51708c0.35117,0.35117 0.91733,0.35117 1.2685,0l5.06683,-5.06683c0.35117,-0.35117 0.35117,-0.91733 0,-1.2685z"
						fill="#199be2"
					></path>
					<path d="M153.36667,147.03492l-6.33175,6.33175l7.85108,7.85467l6.33533,-6.33533z" fill="url(#color-5)"></path>
					<circle cx="37" cy="37" transform="scale(3.58333,3.58333)" r="8" fill="url(#color-6)"></circle>
				</g>
			</g>
		</svg>
	);
};
JobColorIcon.defaultProps = {
	width: '25px',
	height: '25px',
};
export default JobColorIcon;
