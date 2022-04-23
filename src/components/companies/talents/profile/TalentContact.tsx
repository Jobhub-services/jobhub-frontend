import { EmailIcon, HomeIcon, LinkedInSolidIcon, PhoneIcon, TwitterIcon, WorldIcon } from '@/assets/icons';
import { GithubIcon } from 'staak-ui';
import { FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
	display: block;
`;
const SSpan = styled.span`
	color: ${colors.BLACK_7};
`;
const TalentContact = () => {
	return (
		<div style={{ flexGrow: '1' }}>
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<HomeIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Address</SSpan>
					<div>Austria. Los Angeles, CA</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<EmailIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Email</SSpan>
					<div>jerombell45@gmail.com</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<PhoneIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Phone</SSpan>
					<div>+973 253 569 45</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<LinkedInSolidIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>LinkedIn</SSpan>
					<div style={{ color: `${colors.PURPLE_BASE}` }}>https://www.linkedin.com/in/</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Website</SSpan>
					<SLink target="_blank" href="https://www.jerombell45.com">
						https://www.jerombell45.com
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Git</SSpan>
					<SLink target="_blank" href="https://gitlab.com/jerombell45">
						https://gitlab.com/jerombell45
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<TwitterIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Twiter</SSpan>
					<SLink target="_blank" href="https://twiter.com/jerombell45">
						https://twiter.com/jerombell45
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
		</div>
	);
};

export default TalentContact;
