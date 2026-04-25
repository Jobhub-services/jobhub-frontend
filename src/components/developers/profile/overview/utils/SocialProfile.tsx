import { TwitterLogo } from '@/assets/icons';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, GithubIcon, LinkedinLogo } from 'staak-ui';
import styled from 'styled-components';

const SLink = styled.a``;

const SocialProfile = () => {
	const { social_profile, resume } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<FlexBox gap={10}>
			{social_profile?.linkedin && (
				<SLink href={social_profile?.linkedin} target="_blank">
					<LinkedinLogo width="25px" height="25px" />
				</SLink>
			)}
			{social_profile?.git && (
				<SLink href={social_profile?.git} target="_blank">
					<GithubIcon />
				</SLink>
			)}
			{social_profile?.twitter && (
				<SLink href={social_profile?.twitter} target="_blank">
					<TwitterLogo />
				</SLink>
			)}
			{resume && (
				<SLink href={resume as string} target="_blank">
					<Button size="sm" variant="light" style={{ padding: '3px 10px', fontSize: '12px', textDecoration: 'underline' }}>
						Resume
					</Button>
				</SLink>
			)}
			{social_profile?.website && (
				<SLink href={social_profile?.website} target="_blank">
					<Button size="sm" variant="text" style={{ padding: '3px 10px', fontSize: '12px', textDecoration: 'underline' }}>
						Website
					</Button>
				</SLink>
			)}
		</FlexBox>
	);
};

export default SocialProfile;
