import { IconProps } from '@/models/component';

const Plus = ({ color, width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<g transform="scale(7.16667,7.16667)">
					<path d="M12,6c-0.552,0 -1,0.448 -1,1v4h-4c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1h4v4c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1v-4h4c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1h-4v-4c0,-0.552 -0.448,-1 -1,-1z"></path>
				</g>
			</g>
		</svg>
	);
};

Plus.defaultProps = {
	width: '25px',
	height: '25px',
	color: 'black',
};

export default Plus;
