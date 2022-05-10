import { IconProps } from '@/models/component/app.interface';

const SuccessIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path
						d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z"
						fill="#4caf50"
					></path>
					<path
						d="M123.9905,52.32383l-48.7405,48.72258l-20.07383,-20.0595l-10.02258,10.02258l30.09642,30.11075l58.7595,-58.77383z"
						fill="#ffffff"
					></path>
				</g>
			</g>
		</svg>
	);
};

SuccessIcon.defaultProps = {
	width: '25px',
	height: '25px',
};
export default SuccessIcon;
