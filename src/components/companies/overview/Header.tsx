import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import ProfileAvatar from '@/components/companies/profile/common/ProfileAvatar';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { Link } from 'react-router-dom';

const SContainer = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	width: 60%;
	padding: 15px 20px;
	margin-top: 30px;
`;

const Header = () => {
	const { profile } = useAppSelector((state) => state.companyProfile);
	const { userInfo } = useAppSelector((state) => state.user);
	useEffect(() => {
		if (!profile._id || profile._id === '') {
			profileAction.getProfile(false);
		}
	}, []);
	return (
		<SContainer>
			<FlexBox align="start" justify="space-between">
				<ProfileAvatar overview />
				<Link to={`/company/profile/${userInfo.username}`}>
					<Button variant="text" size="sm">
						Edit profile
					</Button>
				</Link>
			</FlexBox>
		</SContainer>
	);
};

export default Header;
