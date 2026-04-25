import { IconProps } from '@/models/component';

const QuestionIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M28.73665,21.5c-7.89767,0 -14.32617,6.42167 -14.33333,14.31934l-0.06999,129l28.66667,-28.65267h100.33333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-86c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333zM28.73665,35.83333h114.59668v86h-106.26823l-8.37044,8.38444zM86,43c-14.663,0 -21.5,12.82833 -21.5,21.5h14.33333c0,-1.1825 1.247,-7.16667 7.16667,-7.16667c7.08783,0 7.16667,7.095 7.16667,7.16667c0,7.55367 -14.33333,21.67917 -14.33333,28.66667h14.33333c0,-7.06633 14.33333,-18.47567 14.33333,-28.66667c0,-10.57083 -8.041,-21.5 -21.5,-21.5zM78.83333,100.33333v14.33333h14.33333v-14.33333z"></path>
				</g>
			</g>
		</svg>
	);
};

QuestionIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default QuestionIcon;
