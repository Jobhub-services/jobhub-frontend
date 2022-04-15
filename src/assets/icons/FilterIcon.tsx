import { IconProps } from '@/models/component';

const FilterIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M13.76,6.88c-2.06937,0 -3.44,1.37063 -3.44,3.44v10.32c0,1.03469 0.38969,1.67969 1.075,2.365l55.04,58.48c0.68531,0.68531 1.67969,1.075 2.365,1.075h34.4c1.03469,0 1.67969,-0.38969 2.365,-1.075l55.04,-58.48c0.68531,-0.68531 1.075,-1.33031 1.075,-2.365v-10.32c0,-2.06937 -1.37062,-3.44 -3.44,-3.44zM65.36,89.44v51.6c0,1.37063 0.68531,2.43219 1.72,3.1175l34.4,20.64c0.34938,0.34938 1.03469,0.3225 1.72,0.3225c0.68531,0 1.03469,0.02688 1.72,-0.3225c1.03469,-0.68531 1.72,-1.74687 1.72,-3.1175v-72.24z"></path>
				</g>
			</g>
		</svg>
	);
};

FilterIcon.defaultProps = {
	width: '25px',
	height: '25px',
	color: 'black',
};
export default FilterIcon;
