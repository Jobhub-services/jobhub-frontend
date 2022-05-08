import { AvatarDropDownProps } from '@/models/component';
import Jerom from '@/assets/icons/jerome.jpg';
import styled from 'styled-components';
import { DropDown, FlexBox, SettingIcon } from 'staak-ui';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';
import { UserIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { LogOutIcon } from '@/assets/icons';

const StyledIcon = styled.img`
	border-radius: 50%;
	transition-duration: 0.4s;
	cursor: pointer;
`;
const AvatarDropDown = (props: AvatarDropDownProps) => {
	const { userInfo } = useAppSelector((state) => state.user);
	// click item not working
	const logout = () => {
		authActions.logout();
	};
	return (
		<DropDown trigger="hover" listPosition="right" onSelect={props.onClick}>
			<DropDown.Title>
				<FlexBox gap={10}>
					<StyledIcon width={40} src={Jerom} />
					<span>{userInfo.username}</span>
				</FlexBox>
			</DropDown.Title>
			<DropDown.Item value="profile">
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<UserIcon width="20px" height="20px" />
					<span>My Profile</span>
				</FlexBox>
			</DropDown.Item>
			<DropDown.Item>
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<SettingIcon width="20px" height="20px" color={colors.BLACK_5} />
					<span>Settings</span>
				</FlexBox>
			</DropDown.Item>
			<DropDown.Item onClick={logout}>
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<LogOutIcon width="20px" height="20px" color={colors.BLACK_5} />
					<span>Log Out</span>
				</FlexBox>
			</DropDown.Item>
		</DropDown>
	);
};

export default AvatarDropDown;
