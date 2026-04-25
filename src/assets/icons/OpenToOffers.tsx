import { IconProps } from '@/models/component';

const OpenToOffers = ({ width, height, color }: IconProps) => {
	return (
		<svg viewBox="0 0 20 14" width={width} height={height}>
			<path
				d="M8.85 5.765L14.507.108l1.457 1.457-7.07 7.071L4.52 4.264 5.935 2.85 8.85 5.765zM18 6.787h2C20 10.77 16.866 14 13 14H7c-3.866 0-7-3.23-7-7.213h2c0 2.845 2.239 5.152 5 5.152h6c2.761 0 5-2.307 5-5.152z"
				fill={color}
			></path>
		</svg>
	);
};

OpenToOffers.defaultProps = {
	height: '14px',
	width: '20px',
};
export default OpenToOffers;
