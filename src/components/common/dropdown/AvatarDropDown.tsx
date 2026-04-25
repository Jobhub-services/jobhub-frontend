import { AvatarDropDownProps } from '@/models/component';
import styled from 'styled-components';
import { DropDown, FlexBox, SettingIcon } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { UserIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { LogOutIcon } from '@/assets/icons';
import { authActions } from '@/modules/actions/auth.actions';

const StyledIcon = styled.img`
	border-radius: 50%;
	transition-duration: 0.4s;
	cursor: pointer;
	object-fit: cover;
`;
const SIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid ${colors.BLACK_11};
`;
const SSpan = styled.span`
	color: white;
`;
const AvatarDropDown = (props: AvatarDropDownProps) => {
	const { userInfo } = useAppSelector((state) => state.user);
	const handleSelect = (event?: any, value?: string) => {
		if (value === 'logout') authActions.logout();
		else {
			if (props.onClick) props.onClick(event, value);
		}
	};
	// click item not working
	return (
		<DropDown trigger="click" listPosition="right" onSelect={handleSelect}>
			<DropDown.Title>
				<FlexBox gap={10}>
					{props.avatar ? (
						<StyledIcon width={40} height={40} src={props.avatar} />
					) : (
						<SIcon>
							<UserIcon width="40px" height="30px" color="white" />
						</SIcon>
					)}
					<SSpan>{userInfo.username}</SSpan>
				</FlexBox>
			</DropDown.Title>
			<DropDown.Item value="profile">
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<UserIcon width="20px" height="20px" />
					<span>My Profile</span>
				</FlexBox>
			</DropDown.Item>
			<DropDown.Item value="settings">
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<SettingIcon width="20px" height="20px" color={colors.BLACK_5} />
					<span>Settings</span>
				</FlexBox>
			</DropDown.Item>
			<DropDown.Item value="logout">
				<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
					<LogOutIcon width="20px" height="20px" color={colors.BLACK_5} />
					<span>Log Out</span>
				</FlexBox>
			</DropDown.Item>
		</DropDown>
	);
};

export default AvatarDropDown;
