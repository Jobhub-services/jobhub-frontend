import { IconProps } from '@/models/component/app.interface';

const SandboxIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 171 171">
			<defs>
				<linearGradient x1="85.5" y1="110.26294" x2="85.5" y2="127.14919" gradientUnits="userSpaceOnUse" id="sandbox-color-1">
					<stop offset="0" stopColor="#484b4f"></stop>
					<stop offset="0.192" stopColor="#656d75"></stop>
					<stop offset="0.236" stopColor="#687179"></stop>
					<stop offset="0.422" stopColor="#727d86"></stop>
				</linearGradient>
				<linearGradient x1="69.1695" y1="47.65913" x2="103.75425" y2="112.70681" gradientUnits="userSpaceOnUse" id="sandbox-color-2">
					<stop offset="0" stopColor="#a1aab3"></stop>
					<stop offset="1" stopColor="#8f979e"></stop>
				</linearGradient>
				<radialGradient cx="141.07144" cy="234.59419" r="207.80775" gradientUnits="userSpaceOnUse" id="sandbox-color-3">
					<stop offset="0.323" stopColor="#23d9d6"></stop>
					<stop offset="0.427" stopColor="#23d4d7"></stop>
					<stop offset="0.542" stopColor="#21c7dc"></stop>
					<stop offset="0.664" stopColor="#1fb0e2"></stop>
					<stop offset="0.789" stopColor="#1c91ec"></stop>
					<stop offset="0.917" stopColor="#1969f8"></stop>
					<stop offset="0.944" stopColor="#1860fb"></stop>
				</radialGradient>
			</defs>
			<g
				fill="none"
				fillRule="nonzero"
				stroke="none"
				strokeWidth="1"
				strokeLinecap="butt"
				strokeLinejoin="miter"
				strokeMiterlimit="10"
				strokeDasharray=""
				strokeDashoffset="0"
				fontFamily="none"
				fontWeight="none"
				fontSize="none"
				textAnchor="none"
			>
				<path d="M0,171.99504v-171.99504h171.99504v171.99504z" fill="none"></path>
				<g>
					<path
						d="M135.375,21.375h-99.75c-7.86956,0 -14.25,6.38044 -14.25,14.25v99.75c0,7.86956 6.38044,14.25 14.25,14.25h99.75c7.86956,0 14.25,-6.38044 14.25,-14.25v-99.75c0,-7.86956 -6.38044,-14.25 -14.25,-14.25z"
						fill="#e3a600"
					></path>
					<path
						d="M138.9375,135.375c0,1.97006 -1.59244,3.5625 -3.5625,3.5625h-99.75c-1.9665,0 -3.5625,-1.59244 -3.5625,-3.5625v-99.75c0,-1.9665 1.596,-3.5625 3.5625,-3.5625h99.75c1.97006,0 3.5625,1.596 3.5625,3.5625z"
						fill="#fee119"
					></path>
					<path
						d="M106.875,121.125v0c0,1.9665 -1.596,3.5625 -3.5625,3.5625h-35.625c-1.9665,0 -3.5625,-1.596 -3.5625,-3.5625v0c0,-1.9665 1.596,-3.5625 3.5625,-3.5625h7.125v-7.125l10.6875,-3.5625l10.6875,3.5625v7.125h7.125c1.9665,0 3.5625,1.596 3.5625,3.5625z"
						fill="url(#sandbox-color-1)"
					></path>
					<path
						d="M121.125,110.4375h-71.25c-3.93656,0 -7.125,-3.18844 -7.125,-7.125v-49.875c0,-3.93656 3.18844,-7.125 7.125,-7.125h71.25c3.93656,0 7.125,3.18844 7.125,7.125v49.875c0,3.93656 -3.18844,7.125 -7.125,7.125z"
						fill="url(#sandbox-color-2)"
					></path>
					<rect x="14" y="15" transform="scale(3.5625,3.5625)" width="20" height="14" fill="url(#sandbox-color-3)"></rect>
				</g>
			</g>
		</svg>
	);
};
export default SandboxIcon;
