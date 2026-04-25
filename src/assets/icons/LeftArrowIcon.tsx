import { IconProps } from '@/models/component';

const LeftArrowIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M45.00219,44.65281c-2.02906,-0.06719 -3.9775,0.76594 -5.33469,2.27094l-36.14687,39.07625l36.14687,39.07625c1.65281,1.84094 4.17906,2.66063 6.61125,2.12313c2.41875,-0.5375 4.36719,-2.33813 5.09281,-4.71656c0.72562,-2.37844 0.12094,-4.95844 -1.59906,-6.75906l-21.13719,-22.84375h133.04469c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313h-133.04469l21.13719,-22.84375c1.86781,-1.97531 2.40531,-4.85094 1.37063,-7.36375c-1.02125,-2.49937 -3.42656,-4.17906 -6.14094,-4.25969z"></path>
				</g>
			</g>
		</svg>
	);
};

LeftArrowIcon.defaultProps = {
	color: 'black',
	width: '25px',
	height: '25px',
};
export default LeftArrowIcon;
