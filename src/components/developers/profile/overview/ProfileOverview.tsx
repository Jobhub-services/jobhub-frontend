import { TwitterLogo, WebsiteLogo } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, GithubIcon, HrDivider, LinkedinLogo } from 'staak-ui';
import {
	Languages,
	Skills,
	WorkExperience,
	Education,
	Certification,
	Summary,
	SocialProfile,
	DesiredLocation,
	DesiredRoles,
	Salary,
	JobType,
} from '@/components/developers/profile/overview/utils';
import styled from 'styled-components';
import { WantsElem } from '@/components/developers/profile/common/';
import ProfileAvatar from '@/components/developers/_common/ProfileAvatar';

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
	const { userInfo } = useAppSelector(({ user }) => user);
	const { role, address, status, avatar } = useAppSelector((state) => state.developerProfile.profile);

	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between" align="start">
				<ProfileAvatar
					firstname={userInfo?.firstName?.charAt(0).toUpperCase() + userInfo?.firstName?.slice(1)!}
					lastname={userInfo?.lastName?.charAt(0).toUpperCase() + userInfo?.lastName?.slice(1)!}
					location={address}
					role={role?.primary_role?.name}
					experience={role?.experience}
					overview
					status={status}
					avatar={avatar}
				/>
				<SocialProfile />
			</FlexBox>
			<FlexBox width="100%" gap={15} align="start">
				<LefSide>
					<Salary />
					<HrDivider top={15} />
					<JobType />
					<HrDivider top={15} />
					<Skills />
					<HrDivider top={15} />
					<Languages />
					<HrDivider top={15} />
					<DesiredRoles />
					<HrDivider top={15} />
					<DesiredLocation />
				</LefSide>
				<RightSide>
					<Summary />
					<HrDivider top={15} />
					<WorkExperience />
					<HrDivider top={15} />
					<Education />
					<HrDivider top={15} />
					<Certification />
					<HrDivider top={15} />
					<WantsElem />
				</RightSide>
			</FlexBox>
		</div>
	);
};

export default ProfileOverview;
