import { IconProps } from '@/models/component';

const PlusIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M50.16667,93.16667h71.66667c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667h-71.66667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667z"></path>
					<path d="M93.16667,121.83333v-71.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v71.66667c0,3.956 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667z"></path>
				</g>
			</g>
		</svg>
	);
};

PlusIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default PlusIcon;
