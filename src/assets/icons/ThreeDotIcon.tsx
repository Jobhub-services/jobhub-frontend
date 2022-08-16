import { IconProps } from '@/models/component';

const ThreeDotIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<circle cx="8" cy="32" transform="scale(2.6875,2.6875)" r="8"></circle>
					<circle cx="56" cy="32" transform="scale(2.6875,2.6875)" r="8"></circle>
					<circle cx="32" cy="32" transform="scale(2.6875,2.6875)" r="8"></circle>
				</g>
			</g>
		</svg>
	);
};
ThreeDotIcon.defaultProps = {
	width: '20px',
	height: '20px',
	color: 'black',
};
export default ThreeDotIcon;
