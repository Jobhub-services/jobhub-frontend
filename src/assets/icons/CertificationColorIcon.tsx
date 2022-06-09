import { IconProps } from '@/models/component';

const CertificationColorIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path d="M143.33333,161.25h-114.66667v-150.5h114.66667z" fill="#efeefc"></path>
					<rect x="13" y="10" transform="scale(3.58333,3.58333)" width="23" height="4" fill="#8c82ec"></rect>
					<rect x="13" y="18" transform="scale(3.58333,3.58333)" width="23" height="2" fill="#8c82ec"></rect>
					<rect x="13" y="22" transform="scale(3.58333,3.58333)" width="23" height="2" fill="#8c82ec"></rect>
					<rect x="13" y="26" transform="scale(3.58333,3.58333)" width="17" height="2" fill="#8c82ec"></rect>
					<path d="M121.83333,136.16667h-21.5v32.25l10.75,-7.16667l10.75,7.16667z" fill="#8c82ec"></path>
					<circle cx="31" cy="38" transform="scale(3.58333,3.58333)" r="5" fill="#4a3fde"></circle>
					<circle cx="31" cy="38" transform="scale(3.58333,3.58333)" r="3" fill="#5b4fe3"></circle>
				</g>
			</g>
		</svg>
	);
};

CertificationColorIcon.defaultProps = {
	width: '70px',
	height: '70px',
};
export default CertificationColorIcon;
