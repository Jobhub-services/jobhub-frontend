import { IconProps } from '@/models/component';

const FacebookIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,34.49173 25.41013,62.97493 58.5144,67.95147v-49.71947h-17.02227v-18.08293h17.02227v-12.03427c0,-19.92333 9.70653,-28.66667 26.2644,-28.66667c7.9292,0 12.126,0.59053 14.10973,0.85427v15.78387h-11.29467c-7.02907,0 -9.48293,6.66787 -9.48293,14.17853v9.88427h20.59987l-2.79213,18.08293h-17.80773v49.8628c33.58013,-4.55227 59.48907,-33.2648 59.48907,-68.0948c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path>
				</g>
			</g>
		</svg>
	);
};
FacebookIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default FacebookIcon;
