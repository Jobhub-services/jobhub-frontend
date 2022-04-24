import { IconProps } from '@/models/component';

const DescriptionIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M35.83333,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v100.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h80.0651l-14.33333,-14.33333h-65.73177v-100.33333h100.33333v65.73177l14.33333,14.33333v-80.0651c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM50.16667,50.16667v14.33333h71.66667v-14.33333zM50.16667,78.83333v14.33333h35.83333v-14.33333zM107.5,107.5v14.33333l36.88314,36.88314l14.33333,-14.33333l-36.88314,-36.88314zM163.78353,149.4502l-14.33333,14.33333l7.16667,7.16667c1.3975,1.3975 3.66956,1.3975 5.06706,0l9.26628,-9.26628c1.3975,-1.40467 1.3975,-3.66956 0,-5.06706z"></path>
				</g>
			</g>
		</svg>
	);
};

DescriptionIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default DescriptionIcon;
