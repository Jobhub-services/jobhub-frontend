import { IconProps } from '@/models/component';

const GraduationCapIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M86,10.33008l-86,34.43359v84.23632h10.75v-69.03516l21.5,7.55859v45.6875l2.60352,1.59571c0,0 23.30566,14.19335 51.14648,14.19335c27.84082,0 51.14649,-14.19335 51.14649,-14.19335l2.60351,-1.59571v-45.6875l32.25,-11.2959v-11.46386zM86,21.91993l70.71484,28.26074l-70.71484,24.7334l-70.71484,-24.7334zM43,71.26074l43,15.0752l1.76368,-0.62989l41.23632,-14.40331v35.44141c-3.52734,1.97362 -21.16406,11.50585 -43,11.50585c-21.83594,0 -39.47266,-9.53223 -43,-11.50585zM5.375,139.75c-2.98145,0 -5.375,2.39355 -5.375,5.375c0,2.98145 2.39355,5.375 5.375,5.375c2.98145,0 5.375,-2.39355 5.375,-5.375c0,-2.98145 -2.39355,-5.375 -5.375,-5.375z"></path>
				</g>
			</g>
		</svg>
	);
};

GraduationCapIcon.defaultProps = {
	color: 'black',
	widht: '20px',
	height: '20px',
};
export default GraduationCapIcon;
