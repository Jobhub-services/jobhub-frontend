import { IconDropDownProps } from '@/models/component';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { DropDown, NotificationIcon } from 'staak-ui';

const StyledIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 50%;
	transition-duration: 0.4s;
	cursor: pointer;
	background-color: ${colors.BLACK_13};
	fill: ${colors.BLACK_4};
	&:hover {
		background-color: ${colors.PURPLE_1};
		fill: ${colors.PURPLE_BASE};
	}
`;
const IconDropDown = (props: IconDropDownProps) => {
	return (
		<DropDown>
			<DropDown.Title>
				<StyledIcon>
					<NotificationIcon width="25px" height="25px" color="inherit" />
				</StyledIcon>
			</DropDown.Title>
		</DropDown>
	);
};

export default IconDropDown;
