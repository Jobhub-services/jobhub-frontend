import { TwitterLogo, WebsiteLogo } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, GithubIcon, HrDivider, LinkedinLogo } from 'staak-ui';
import styled from 'styled-components';
import ProfileAvatar from './ProfileAvatar';

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
const SLink = styled.a``;
const ProfileOverview = () => {
	const { developerInfo } = useAppSelector(({ user }) => user.userInfo);
	const { social_profile, role, resume } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between" align="start">
				<ProfileAvatar
					firstname={developerInfo?.firstName.charAt(0).toUpperCase() + developerInfo?.firstName.slice(1)!}
					lastname={developerInfo?.lastName.charAt(0).toUpperCase() + developerInfo?.lastName.slice(1)!}
					location={{ country: 'Germany', city: 'Berlin' }}
					role={role?.primary_role?.label}
					experience={role?.experience?.label}
				/>
				<FlexBox gap={10}>
					<SLink href={social_profile?.website} target="_blank">
						<WebsiteLogo />
					</SLink>
					<SLink href={social_profile?.linkedin} target="_blank">
						<LinkedinLogo width="25px" height="25px" />
					</SLink>
					<SLink href={social_profile?.git} target="_blank">
						<GithubIcon />
					</SLink>
					<SLink href={social_profile?.twitter} target="_blank">
						<TwitterLogo />
					</SLink>
					<SLink href={resume} target="_blank">
						<Button size="sm" variant="light" style={{ padding: '5px 10px', fontSize: '13px' }}>
							Resume
						</Button>
					</SLink>
				</FlexBox>
			</FlexBox>
			<FlexBox width="100%" gap={15} align="start">
				<LefSide>
					{/*
					<Skills />
					<HrDivider top={25} />
	<Languages />*/}
				</LefSide>
				<RightSide>
					{/*
					<Summary />
					<HrDivider top={15} />
					<Roles />
					<HrDivider top={15} />
					<WorkExperience />
					<HrDivider top={15} />
					<Education />
					<HrDivider top={15} />
					<Certification />*/}
				</RightSide>
			</FlexBox>
		</div>
	);
};

export default ProfileOverview;
