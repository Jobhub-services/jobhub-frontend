import { IconProps } from '@/models/component';

const ReadyToOffers = ({ width, height, color }: IconProps) => {
	return (
		<svg viewBox="0 0 20 14" height={height} width={width}>
			<g fill={color}>
				<path d="M7 0h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0zm0 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10H7z"></path>
				<circle cx="6" cy="7" r="1.5"></circle>
				<circle cx="10" cy="7" r="1.5"></circle>
				<circle cx="14" cy="7" r="1.5"></circle>
			</g>
		</svg>
	);
};

ReadyToOffers.defaultProps = {
	height: '14px',
	width: '20px',
};
export default ReadyToOffers;
