import { FaceBookLogo, FlexBox, LinkedinLogo } from 'staak-ui';
import styled from 'styled-components';
import { TwitterLogo, WorldIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { TCompanyDetail } from '@/types/developer/comanies.type';
const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
`;
const SocialProfile = ({ social_profile }: TCompanyDetail) => {
	return (
		<FlexBox justify="start" className="mt-10" gap={20}>
			{social_profile?.website !== '' && (
				<SLink href={social_profile?.website} target="_blank">
					<WorldIcon width="25px" height="25px" color={colors.PURPLE_BASE} />
				</SLink>
			)}
			{social_profile?.linkedin && (
				<SLink href={social_profile?.linkedin} target="_blank">
					<LinkedinLogo width="25px" height="25px" />
				</SLink>
			)}
			{social_profile?.facebook && (
				<SLink href={social_profile?.facebook} target="_blank">
					<FaceBookLogo width="25px" height="25px" />
				</SLink>
			)}
			{social_profile?.twitter && (
				<SLink href={social_profile?.twitter} target="_blank">
					<TwitterLogo width="25px" height="25px" />
				</SLink>
			)}
		</FlexBox>
	);
};

export default SocialProfile;
