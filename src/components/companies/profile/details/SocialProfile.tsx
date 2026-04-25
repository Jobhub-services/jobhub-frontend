import { EditIcon, FacebookIcon, LinkedInSolidIcon, WorldIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { PopModel } from '@/components/common';
import { SpanTitle, SButton, SSpan } from '@/components/companies/profile/common/common.style';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { TSocialProfile } from '@/types/company/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, FlexBox, Input, PlusIcon, TwitterIcon } from 'staak-ui';
import styled from 'styled-components';

const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
`;
const SocialProfile = () => {
	const { social_profile } = useAppSelector((state) => state.companyProfile.profile);
	const [social, setSocial] = useState<TSocialProfile>({ linkedin: '', website: '', facebook: '', twitter: '' });
	const [show, setShow] = useState(false);
	const dataEmpty =
		(!social_profile?.website || social_profile?.website === '') &&
		(!social_profile?.linkedin || social_profile?.linkedin === '') &&
		(!social_profile?.facebook || social_profile?.facebook === '') &&
		(!social_profile?.twitter || social_profile?.twitter === '');
	const onShow = () => {
		setShow(true);
		setSocial(social_profile!);
	};
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		let tmp = { ...social };
		tmp[name as 'linkedin' | 'facebook' | 'website' | 'twitter'] = value;
		setSocial(tmp);
	};
	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(social, 'social_profile');
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Social Profiles</SpanTitle>
				<SButton padding={dataEmpty ? 0 : 5} onClick={onShow}>
					{dataEmpty ? (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					) : (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					)}
				</SButton>
			</FlexBox>
			<div>
				{social_profile?.website && social_profile?.website !== '' && (
					<FlexBox justify="start" align="start" gap={10} className="mt-15">
						<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
						<FlexBox gap={10}>
							<div style={{ color: `${colors.BLACK_7}` }}>Website</div>
							<SLink href={social_profile?.website} target="_blank">
								{social_profile?.website}
							</SLink>
						</FlexBox>
					</FlexBox>
				)}
				{social_profile?.linkedin && social_profile?.linkedin !== '' && (
					<FlexBox justify="start" align="start" gap={10} className="mt-15">
						<LinkedInSolidIcon width="20px" height="20px" color={colors.BLACK_7} />
						<FlexBox gap={10}>
							<div style={{ color: `${colors.BLACK_7}` }}>LinkedIn</div>
							<SLink href={social_profile?.linkedin} target="_blank">
								{social_profile?.linkedin}
							</SLink>
						</FlexBox>
					</FlexBox>
				)}
				{social_profile?.facebook && social_profile?.facebook !== '' && (
					<FlexBox justify="start" align="start" gap={10} className="mt-15">
						<FacebookIcon width="20px" height="20px" color={colors.BLACK_7} />
						<FlexBox gap={10}>
							<div style={{ color: `${colors.BLACK_7}` }}>Facebook</div>
							<SLink href={social_profile?.facebook} target="_blank">
								{social_profile?.facebook}
							</SLink>
						</FlexBox>
					</FlexBox>
				)}
				{social_profile?.twitter && social_profile?.twitter !== '' && (
					<FlexBox justify="start" align="start" gap={10} className="mt-15">
						<TwitterIcon width="20px" height="20px" color={colors.BLACK_7} />
						<FlexBox gap={10}>
							<div style={{ color: `${colors.BLACK_7}` }}>Twitter</div>
							<SLink href={social_profile?.twitter} target="_blank">
								{social_profile?.twitter}
							</SLink>
						</FlexBox>
					</FlexBox>
				)}
				{dataEmpty && <SSpan className="mt-15">Where can people find you online?</SSpan>}
			</div>
			{show && (
				<PopModel closed={!show} onClose={() => setShow(false)}>
					<PopModel.Header>
						<SpanTitle>Add social profile</SpanTitle>
					</PopModel.Header>
					<PopModel.Body>
						<div className="mt-15">
							<div>
								<FlexBox justify="start" gap={5}>
									<WorldIcon width="20px" height="20px" />
									<span>Website</span>
								</FlexBox>
								<Input className="mt-5" placeholder="Website" name="website" onChange={handleInput} value={social_profile?.website} />
							</div>
							<div className="mt-20">
								<FlexBox justify="start" gap={5}>
									<LinkedInSolidIcon width="20px" height="20px" />
									<span>LinkedIn</span>
								</FlexBox>
								<Input className="mt-5" placeholder="LinkedIn" name="linkedin" onChange={handleInput} value={social_profile?.linkedin} />
							</div>
							<div className="mt-20">
								<FlexBox justify="start" gap={5}>
									<FacebookIcon width="20px" height="20px" />
									<span>Facebook</span>
								</FlexBox>
								<Input className="mt-5" placeholder="Facebook" name="facebook" onChange={handleInput} value={social_profile?.facebook} />
							</div>
							<div className="mt-20">
								<FlexBox justify="start" gap={5}>
									<TwitterIcon width="20px" height="20px" />
									<span>Twitter</span>
								</FlexBox>
								<Input className="mt-5" placeholder="Twitter" name="twitter" onChange={handleInput} value={social_profile?.twitter} />
							</div>
						</div>
					</PopModel.Body>
					<PopModel.Footer>
						<FlexBox className="mt-15" justify="end" gap={10} width="100%">
							<Button
								size="md"
								variant="text"
								onClick={() => {
									setShow(false);
								}}
							>
								Cancel
							</Button>
							<Button size="md" onClick={onSave}>
								Save
							</Button>
						</FlexBox>
					</PopModel.Footer>
				</PopModel>
			)}
		</div>
	);
};

export default SocialProfile;
