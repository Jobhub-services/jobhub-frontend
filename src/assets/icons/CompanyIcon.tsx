import { IconProps } from '@/models/component';

const CompanyIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M32.25,26.875v10.75h5.375v107.5h96.75v-107.5h5.375v-10.75zM48.375,37.625h75.25v96.75h-75.25zM59.125,48.375v10.75h21.5v-10.75zM91.375,48.375v10.75h21.5v-10.75zM59.125,69.875v10.75h21.5v-10.75zM91.375,69.875v10.75h21.5v-10.75zM59.125,91.375v10.75h21.5v-10.75zM91.375,91.375v10.75h21.5v-10.75zM59.125,112.875v10.75h21.5v-10.75zM91.375,112.875v10.75h21.5v-10.75z"></path>
				</g>
			</g>
		</svg>
	);
};

CompanyIcon.defaultProps = {
	color: 'black',
	width: '25px',
	height: '25px',
};
export default CompanyIcon;
