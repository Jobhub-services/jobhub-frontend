import { IconProps } from '@/models/component/app.interface';

const EmailIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v7.18066l-57.33333,35.81934l-57.33333,-35.81934zM28.66667,64.514l57.33333,35.81934l57.33333,-35.81934v64.486h-114.66667z"></path>
				</g>
			</g>
		</svg>
	);
};

EmailIcon.defaultProps = {
	color: 'black',
	width: '25px',
	height: '25px',
};
export default EmailIcon;
