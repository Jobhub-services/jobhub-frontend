import { IconProps } from '@/models/component';

const PhoneIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M59.125,21.5c-8.83935,0 -16.125,7.28565 -16.125,16.125v96.75c0,8.83935 7.28565,16.125 16.125,16.125h53.75c8.83935,0 16.125,-7.28565 16.125,-16.125v-96.75c0,-8.83935 -7.28565,-16.125 -16.125,-16.125zM59.125,32.25h53.75c2.98145,0 5.375,2.39356 5.375,5.375v96.75c0,2.98145 -2.39355,5.375 -5.375,5.375h-53.75c-2.98144,0 -5.375,-2.39355 -5.375,-5.375v-96.75c0,-2.98144 2.39356,-5.375 5.375,-5.375zM86,123.625c-2.96045,0 -5.375,2.41455 -5.375,5.375c0,2.96045 2.41455,5.375 5.375,5.375c2.96045,0 5.375,-2.41455 5.375,-5.375c0,-2.96045 -2.41455,-5.375 -5.375,-5.375z"></path>
				</g>
			</g>
		</svg>
	);
};
PhoneIcon.defaultProps = {
	color: 'black',
	width: '25px',
	height: '25px',
};
export default PhoneIcon;
