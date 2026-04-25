import { IconProps } from '@/models/component';

const LoadingIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<circle cx="50" cy="50" fill="none" stroke={color} strokeWidth="7" r="25" strokeDasharray="117.80972450961724 41.269908169872416">
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="0.5076142131979695s"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
				></animateTransform>
			</circle>
		</svg>
	);
};
LoadingIcon.defaultProps = {
	color: 'black',
	width: '30px',
	height: '30px',
};
export default LoadingIcon;
