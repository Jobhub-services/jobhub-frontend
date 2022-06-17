import { FaceBookLogo, FlexBox, LinkedinLogo } from 'staak-ui';
import { SData } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { TwitterLogo, WorldIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
`;
const SocialProfile = () => {
	const { social_profile } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<div>
			{social_profile?.website !== '' && (
				<FlexBox gap={15}>
					<FlexBox gap={5}>
						<WorldIcon width="25px" height="25px" color={colors.BLACK_7} />
						<SData>Website</SData>
					</FlexBox>
					<SLink href={social_profile?.website}>{social_profile?.website?.split('//')[1]}</SLink>
				</FlexBox>
			)}
			<FlexBox justify="start" className="mt-10" gap={20}>
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
		</div>
	);
};

export default SocialProfile;
