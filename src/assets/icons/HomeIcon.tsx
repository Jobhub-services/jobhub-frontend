import { IconProps } from '@/models/component';

const HomeIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h43v-43h28.66667v43h43v-64.5h21.5l-28.66667,-25.7972v-31.53613h-14.33333v18.63053zM86,34.33561l43,38.7028v5.79492v57.33333h-14.33333v-43h-57.33333v43h-14.33333v-63.12826z"></path>
				</g>
			</g>
		</svg>
	);
};

HomeIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default HomeIcon;
