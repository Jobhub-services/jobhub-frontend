import React, { useState } from 'react';
import { LinkedInSolidIcon, TwitterIcon, WorldIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox, GithubIcon, Input, PlusIcon } from 'staak-ui';
import { SButton, SpanTitle } from './shared.style';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { SocialProfileType } from '@/types/developer/profile.type';
import { profileAction } from '@/modules/actions/developer/profile.actions';

const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
`;
const SocialProfile = () => {
	const { social_profile } = useAppSelector((state) => state.developerProfile.profile);
	const [social, setSocial] = useState<SocialProfileType>({ linkedin: '', website: '', git: '', twitter: '' });
	const [show, setShow] = useState(false);
	function onShow() {
		setShow(true);
	}
	function onSave() {
		profileAction.setAttribute(social, 'social_profile');
		setShow(false);
	}
	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		let tmp = { ...social };
		tmp[name as 'linkedin' | 'git' | 'website' | 'twitter'] = value;
		setSocial(tmp);
	}
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Social profiles</SpanTitle>
				<SButton padding={0} onClick={onShow}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div>
				{social_profile?.website !== '' && (
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
				{social_profile?.linkedin !== '' && (
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
				{social_profile?.git !== '' && (
					<FlexBox justify="start" align="start" gap={10} className="mt-15">
						<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
						<FlexBox gap={10}>
							<div style={{ color: `${colors.BLACK_7}` }}>Git</div>
							<SLink href={social_profile?.git} target="_blank">
								{social_profile?.git}
							</SLink>
						</FlexBox>
					</FlexBox>
				)}
				{social_profile?.twitter !== '' && (
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
			</div>
			{show && (
				<div className="mt-15">
					<div>
						<FlexBox justify="start" gap={5}>
							<WorldIcon width="18px" height="18px" />
							<span>Website</span>
						</FlexBox>
						<Input className="mt-5" placeholder="Website" name="website" onChange={handleInput} />
					</div>
					<div className="mt-20">
						<FlexBox justify="start" gap={5}>
							<LinkedInSolidIcon width="20px" height="20px" />
							<span>LinkedIn</span>
						</FlexBox>
						<Input className="mt-5" placeholder="LinkedIn" name="linkedin" onChange={handleInput} />
					</div>
					<div className="mt-20">
						<FlexBox justify="start" gap={5}>
							<GithubIcon width="20px" height="20px" />
							<span>Git</span>
						</FlexBox>
						<Input className="mt-5" placeholder="Git" name="git" onChange={handleInput} />
					</div>
					<div className="mt-20">
						<FlexBox justify="start" gap={5}>
							<TwitterIcon width="20px" height="20px" />
							<span>Twitter</span>
						</FlexBox>
						<Input className="mt-5" placeholder="Twitter" name="twitter" onChange={handleInput} />
					</div>
					<FlexBox className="mt-15" justify="end" gap={10}>
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
				</div>
			)}
		</div>
	);
};

export default SocialProfile;
