import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import ProfileAvatar from '@/components/developers/_common/ProfileAvatar';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';

const SContainer = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	width: 60%;
	padding: 15px 20px;
	margin-top: 30px;
`;

const Header = () => {
	const { userInfo } = useAppSelector(({ user }) => user);
	const { profile } = useAppSelector((state) => state.developerProfile);
	useEffect(() => {
		if (!profile.summary || profile.summary !== '') {
			profileAction.getProfile(false);
		}
	}, []);
	return (
		<SContainer>
			<FlexBox align="start" justify="space-between">
				<ProfileAvatar
					firstname={userInfo?.firstName?.charAt(0).toUpperCase() + userInfo?.firstName?.slice(1)!}
					lastname={userInfo?.lastName?.charAt(0).toUpperCase() + userInfo?.lastName?.slice(1)!}
					location={profile?.address}
					role={profile?.role?.primary_role?.name}
					experience={profile?.role?.experience}
					overview
					status={profile?.status}
					avatar={profile?.avatar}
				/>
				<Button variant="text" size="sm">
					Edit profile
				</Button>
			</FlexBox>
		</SContainer>
	);
};

export default Header;
