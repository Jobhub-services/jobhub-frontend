import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import ProfileAvatar from '@/components/developers/_common/ProfileAvatar';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { Link } from 'react-router-dom';
import { LoadingIcon } from '@/assets/icons';

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
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!profile.summary || profile.summary !== '') {
			profileAction.getProfile(false);
		}
	}, []);
	useEffect(() => {
		if (profile._id) {
			setLoading(false);
		}
	}, [profile]);
	return (
		<SContainer>
			<FlexBox align="start" justify="space-between">
				{loading ? (
					<FlexBox width="100%" height="90px">
						<LoadingIcon color={colors.PURPLE_BASE} width="50px" height="50px" />
					</FlexBox>
				) : (
					<ProfileAvatar
						statusEditable
						firstname={userInfo?.firstName?.charAt(0).toUpperCase() + userInfo?.firstName?.slice(1)!}
						lastname={userInfo?.lastName?.charAt(0).toUpperCase() + userInfo?.lastName?.slice(1)!}
						location={profile?.address}
						role={profile?.role?.primary_role?.name}
						experience={profile?.role?.experience}
						overview
						status={profile?.status}
						avatar={profile?.avatar}
					/>
				)}
				<Link to={`/profile/${userInfo.username}`}>
					<Button variant="text" size="sm">
						Edit profile
					</Button>
				</Link>
			</FlexBox>
		</SContainer>
	);
};

export default Header;
