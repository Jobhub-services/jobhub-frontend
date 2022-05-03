import { EmailIcon, HomeIcon, LinkedInSolidIcon, PhoneIcon, TwitterIcon, WorldIcon } from '@/assets/icons';
import { GithubIcon } from 'staak-ui';
import { FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { ContactProps } from '@/models/component/companies/talents/talents.interface';

const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
	display: block;
`;
const SSpan = styled.span`
	color: ${colors.BLACK_7};
`;
const TalentContact = (props: ContactProps) => {
	return (
		<div style={{ flexGrow: '1' }}>
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<HomeIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Address</SSpan>
					<div>
						{props.address?.country}. {props.address?.city}
					</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<EmailIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Email</SSpan>
					<div>{props.email}</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<PhoneIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Phone</SSpan>
					<div>{props.phone ?? 'N/A'}</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<LinkedInSolidIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>LinkedIn</SSpan>
					<SLink target="_blank" href={props.linkedin}>
						{props.linkedin ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Website</SSpan>
					<SLink target="_blank" href={props.website}>
						{props.website ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Git</SSpan>
					<SLink target="_blank" href={props.git}>
						{props.git ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<TwitterIcon width="20px" height="20px" color={colors.BLACK_7} />
				<div>
					<SSpan>Twiter</SSpan>
					<SLink target="_blank" href="https://twiter.com/jerombell45">
						{props.twitter ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
		</div>
	);
};

export default TalentContact;
