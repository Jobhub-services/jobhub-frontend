import { IconProps } from '@/models/component';

const JobColorIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<defs>
				<linearGradient x1="86" y1="32.17475" x2="86" y2="22.60367" gradientUnits="userSpaceOnUse" id="color-01">
					<stop offset="0" stop-color="#1ea2e4"></stop>
					<stop offset="0.129" stop-color="#1ea2e4"></stop>
					<stop offset="0.295" stop-color="#1ea2e4"></stop>
					<stop offset="0.469" stop-color="#1ea2e4"></stop>
					<stop offset="0.659" stop-color="#1ea2e4"></stop>
				</linearGradient>
				<radialGradient cx="85.398" cy="21.47121" r="163.90167" gradientUnits="userSpaceOnUse" id="color-02">
					<stop offset="0" stop-color="#0d61a9"></stop>
					<stop offset="0.156" stop-color="#0d61a9"></stop>
					<stop offset="0.417" stop-color="#0e70c4"></stop>
					<stop offset="0.645" stop-color="#0f82bd"></stop>
					<stop offset="0.828" stop-color="#1670c4"></stop>
					<stop offset="0.944" stop-color="#0d61a9"></stop>
				</radialGradient>
				<linearGradient x1="86" y1="32.35033" x2="86" y2="96.48842" gradientUnits="userSpaceOnUse" id="color-03">
					<stop offset="0" stop-color="#0d61a9"></stop>
					<stop offset="0.06" stop-color="#0d61a9"></stop>
					<stop offset="0.18" stop-color="#0d61a9"></stop>
					<stop offset="0.326" stop-color="#0d61a9"></stop>
					<stop offset="0.523" stop-color="#0d61a9"></stop>
					<stop offset="1" stop-color="#0d61a9"></stop>
				</linearGradient>
				<linearGradient x1="111.08333" y1="136.16667" x2="161.25" y2="136.16667" gradientUnits="userSpaceOnUse" id="color-04">
					<stop offset="0" stop-color="#0d61a9"></stop>
					<stop offset="1" stop-color="#0d61a9"></stop>
				</linearGradient>
			</defs>
			<g fill="none" stroke="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path
						d="M102.125,21.5h-32.25c-2.967,0 -5.375,2.408 -5.375,5.375v5.375h43v-5.375c0,-2.967 -2.408,-5.375 -5.375,-5.375z"
						fill="url(#color-01)"
					></path>
					<path
						d="M150.5,146.91667h-129c-3.94167,0 -7.16667,-3.225 -7.16667,-7.16667v-93.16667c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h114.66667c7.88333,0 14.33333,6.45 14.33333,14.33333v93.16667c0,3.94167 -3.225,7.16667 -7.16667,7.16667z"
						fill="url(#color-02)"
					></path>
					<path
						d="M151.56425,90.49708l-65.56425,9.83625l-65.56425,-9.83625c-3.50808,-0.52317 -6.10242,-3.53675 -6.10242,-7.08425v-36.8295c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h114.66667c7.88333,0 14.33333,6.45 14.33333,14.33333v36.8295c0,3.5475 -2.59433,6.56108 -6.10242,7.08425z"
						fill="url(#color-03)"
					></path>
					<path
						d="M91.375,75.25h-10.75c-0.989,0 -1.79167,0.80267 -1.79167,1.79167v10.75c0,0.989 0.80267,1.79167 1.79167,1.79167h10.75c0.989,0 1.79167,-0.80267 1.79167,-1.79167v-10.75c0,-0.989 -0.80267,-1.79167 -1.79167,-1.79167z"
						fill="#1ea2e4"
					></path>
					<path
						d="M136.16667,100.33333l8.34558,4.68342l9.57108,0.11825l4.88767,8.22733l8.22733,4.88767l0.11825,9.57108l4.68342,8.34558l-4.68342,8.34558l-0.11825,9.57108l-8.22733,4.88767l-4.88767,8.22733l-9.57108,0.11825l-8.34558,4.68342l-8.34558,-4.68342l-9.57108,-0.11825l-4.88767,-8.22733l-8.22733,-4.88767l-0.11825,-9.57108l-4.68342,-8.34558l4.68342,-8.34558l0.11825,-9.57108l8.22733,-4.88767l4.88767,-8.22733l9.57108,-0.11825z"
						fill="#1ea2e4"
					></path>
					<circle cx="38" cy="38" transform="scale(3.58333,3.58333)" r="7" fill="url(#color-04)"></circle>
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
