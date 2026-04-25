import { IconProps } from '@/models/component';

const UnavailableIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none" stroke="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill="#d50000">
					<path d="M34.50863,127.43188l93.24219,-93.24544l10.13537,10.13502l-93.24219,93.24544z"></path>
					<path d="M86,14.33333c-39.41667,0 -71.66667,32.25 -71.66667,71.66667c0,39.41667 32.25,71.66667 71.66667,71.66667c39.41667,0 71.66667,-32.25 71.66667,-71.66667c0,-39.41667 -32.25,-71.66667 -71.66667,-71.66667zM86,143.33333c-31.53333,0 -57.33333,-25.8 -57.33333,-57.33333c0,-31.53333 25.8,-57.33333 57.33333,-57.33333c31.53333,0 57.33333,25.8 57.33333,57.33333c0,31.53333 -25.8,57.33333 -57.33333,57.33333z"></path>
				</g>
			</g>
		</svg>
	);
};

UnavailableIcon.defaultProps = {
	width: '20px',
	height: '20px',
};
export default UnavailableIcon;
