import { IconProps } from '@/models/component';

const ClosedToOffers = ({ width, height, color }: IconProps) => {
	return (
		<svg height={height} viewBox="0 0 20 14" width={width}>
			<path
				d="M10.012 2.768L12.84-.06l1.39 1.39-2.828 2.828 2.78 2.78-1.414 1.415-2.78-2.78L7.16 8.4l-1.39-1.39 2.828-2.829-2.78-2.78L7.232-.012l2.78 2.78zM18 7.12h2C20 10.92 16.866 14 13 14H7c-3.866 0-7-3.08-7-6.88h2c0 2.714 2.239 4.914 5 4.914h6c2.761 0 5-2.2 5-4.915z"
				fill={color}
			></path>
		</svg>
	);
};
ClosedToOffers.defaultProps = {
	height: '14px',
	width: '20px',
};
export default ClosedToOffers;
