import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { ILocationElem } from '@/models/component';

const SSpan = styled.span<any>`
	font-size: ${(props) => props.size}px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SDash = styled.span<any>`
	display: inline-block;
	width: 6px;
	height: 3px;
	background: ${colors.BLUE_DARK_4};
`;
const LocationElem = ({ country, city, size }: ILocationElem) => {
	return (
		<FlexBox justify="start" gap={2}>
			{country && <SSpan size={size}>{country}</SSpan>}
			{city && country && <SDash />}
			{city && <SSpan size={size}>{city}</SSpan>}
		</FlexBox>
	);
};
LocationElem.defaultProps = {
	size: 14,
};
export default LocationElem;
