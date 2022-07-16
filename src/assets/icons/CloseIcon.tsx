import { IconProps } from '@/models/component';

const CloseIcon = ({ width, height, color }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill={color}>
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g fill={color}>
					<path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path>
				</g>
			</g>
		</svg>
	);
};

CloseIcon.defaultProps = {
	color: 'black',
	width: '20px',
	height: '20px',
};
export default CloseIcon;
