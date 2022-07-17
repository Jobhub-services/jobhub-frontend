import ProfileAvatar from '@/components/developers/_common/ProfileAvatar';
import Education from '@/components/developers/profile/details/utils/Education';
import Location from '@/components/developers/profile/details/utils/Location';
import Languages from '@/components/developers/profile/details/utils/Languages';
import Skills from '@/components/developers/profile/details/utils/Skills';
import SocialProfile from '@/components/developers/profile/details/utils/SocialProfile';
import Summary from '@/components/developers/profile/details/utils/Summary';
import WorkExperience from '@/components/developers/profile/details/utils/WorkExperience';
import Roles from '@/components/developers/profile/details/utils/Roles';
import Certification from '@/components/developers/profile/details/utils/Certification';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LefSide = styled.div`
	width: 28%;
	background-color: white;
	border-radius: 7px;
	padding: 15px 10px;
`;
const RightSide = styled.div`
	width: 72%;
	background-color: white;
	padding: 15px 25px;
	border-left: 1px solid ${colors.BLACK_12};
`;
const ProfileDetails = () => {
	const { developerInfo } = useAppSelector(({ user }) => user.userInfo);
	const { address, avatar } = useAppSelector((state) => state.developerProfile.profile);

	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between">
				<ProfileAvatar
					firstname={developerInfo?.firstName.charAt(0).toUpperCase() + developerInfo?.firstName.slice(1)!}
					lastname={developerInfo?.lastName.charAt(0).toUpperCase() + developerInfo?.lastName.slice(1)!}
					location={address}
					avatar={avatar}
				/>
				<Link to="/settings/account">
					<Button>Account settings</Button>
				</Link>
			</FlexBox>
			<FlexBox width="100%" gap={15} align="start">
				<LefSide>
					<Location />
					<HrDivider top={25} />
					<Skills />
					<HrDivider top={25} />
					<Languages />
				</LefSide>
				<RightSide>
					<Summary />
					<HrDivider top={15} />
					<Roles />
					<HrDivider top={15} />
					<SocialProfile />
					<HrDivider top={15} />
					<WorkExperience />
					<HrDivider top={15} />
					<Education />
					<HrDivider top={15} />
					<Certification />
				</RightSide>
			</FlexBox>
		</div>
	);
};

export default ProfileDetails;
