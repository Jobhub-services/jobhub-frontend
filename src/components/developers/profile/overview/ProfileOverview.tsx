import { TwitterLogo, WebsiteLogo } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, GithubIcon, HrDivider, LinkedinLogo } from 'staak-ui';
import { Languages, Skills, WorkExperience, Education, Certification, Summary, SocialProfile } from '@/components/developers/profile/overview/utils';
import styled from 'styled-components';
import { ProfileAvatar } from '@/components/developers/profile/common/';

const LefSide = styled.div`
	width: 25%;
	border-radius: 7px;
	padding: 15px 10px;
`;

const RightSide = styled.div`
	width: 75%;
	padding: 15px 25px;
	border-left: 1px solid ${colors.BLACK_12};
`;

const ProfileOverview = () => {
	const { developerInfo } = useAppSelector(({ user }) => user.userInfo);
	const { role, address } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between" align="start">
				<ProfileAvatar
					firstname={developerInfo?.firstName.charAt(0).toUpperCase() + developerInfo?.firstName.slice(1)!}
					lastname={developerInfo?.lastName.charAt(0).toUpperCase() + developerInfo?.lastName.slice(1)!}
					location={address}
					role={role?.primary_role?.name}
					experience={role?.experience}
				/>
				<SocialProfile />
			</FlexBox>
			<FlexBox width="100%" gap={15} align="start">
				<LefSide>
					<Skills />
					<HrDivider top={15} />
					<Languages />
				</LefSide>
				<RightSide>
					<Summary />
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

export default ProfileOverview;
