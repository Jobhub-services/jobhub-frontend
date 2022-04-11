import { AvatarDropDownProps } from '@/models/component';
import styled from 'styled-components';
import { DropDown, FlexBox } from 'staak-ui';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';

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
		<DropDown trigger="hover" listPosition="right">
			<DropDown.Title>
				<FlexBox>
					<StyledIcon width={40} src="/assets/avatar2.JPG" />
					<span>{userInfo.username}</span>
				</FlexBox>
			</DropDown.Title>
			<DropDown.Item>My Profile</DropDown.Item>
			<DropDown.Item>Account Settings</DropDown.Item>
			<DropDown.Item onClick={logout}>Log Out</DropDown.Item>
		</DropDown>
	);
};

export default AvatarDropDown;
