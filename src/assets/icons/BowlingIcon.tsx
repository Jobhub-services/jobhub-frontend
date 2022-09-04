import { IconProps } from '@/models/component';

const BowlingIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 172 172">
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path d="M114.66667,157.66667l-28.66667,7.16667l-28.66667,-7.16667v-17.91667h57.33333z" fill="#6c19ff"></path>
					<rect x="18" y="34" transform="scale(3.58333,3.58333)" width="12" height="7" fill="#f5bc00"></rect>
					<circle cx="24" cy="21" transform="scale(3.58333,3.58333)" r="16" fill="#f5bc00"></circle>
					<rect x="18" y="39" transform="scale(3.58333,3.58333)" width="12" height="3" fill="#2100c4"></rect>
					<rect x="22" y="22" transform="scale(3.58333,3.58333)" width="4" height="17" fill="#eb7900"></rect>
					<path d="M86,103.10683l-25.08333,-24.2735h50.16667z" fill="#eb7900"></path>
					<rect x="22" y="0" transform="scale(3.58333,3.58333)" width="4" height="3" fill="#f5bc00"></rect>
					<rect x="0.22837" y="10.58496" transform="rotate(-44.421) scale(3.58333,3.58333)" width="3.999" height="3.213" fill="#f5bc00"></rect>
					<rect x="20.15198" y="29.82018" transform="rotate(-45.001) scale(3.58333,3.58333)" width="3.182" height="4" fill="#f5bc00"></rect>
				</g>
			</g>
		</svg>
	);
};

BowlingIcon.defaultProps = {
	width: '30px',
	height: '30px',
};
export default BowlingIcon;
