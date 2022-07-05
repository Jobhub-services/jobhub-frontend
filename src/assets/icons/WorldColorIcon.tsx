import { IconProps } from '@/models/component';

const WorldColorIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<circle cx="24" cy="24" transform="scale(3.58333,3.58333)" r="20" fill="#3498db"></circle>
					<path
						d="M128.98925,28.65592l-14.32258,13.97142v16.49767l-21.5,23.29167v21.5h23.1555l11.59925,40.21575c18.017,-13.01825 29.74525,-34.2065 29.74525,-58.13242c0,-23.44933 -11.26242,-44.2685 -28.67742,-57.34408z"
						fill="#00b3e1"
					></path>
					<path
						d="M66.93667,111.08333l-6.94092,-10.75h-13.41242l-16.125,-17.91667h15.85625l21.76875,-21.5v-17.91667h-14.09325l-12.87133,-12.87133c-16.28267,13.0935 -26.71733,33.15658 -26.78542,55.65633l21.5,21.629l5.78708,34.85508c7.96933,6.29592 17.31108,10.93275 27.50208,13.3945l8.30258,-19.49692l8.57492,-4.472l0.04658,-20.61133z"
						fill="#00b3e1"
					></path>
				</g>
			</g>
		</svg>
	);
};
WorldColorIcon.defaultProps = {
	width: '25px',
	height: '25px',
};
export default WorldColorIcon;
