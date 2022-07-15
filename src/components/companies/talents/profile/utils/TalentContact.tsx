import { EmailIcon, HomeIcon, LinkedInSolidIcon, MoneyIcon, PhoneIcon, TwitterIcon, WorldIcon } from '@/assets/icons';
import { GithubIcon } from 'staak-ui';
import { FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { ContactProps } from '@/models/component/companies/talents/talents.interface';

const SLink = styled.a`
	color: ${colors.PURPLE_BASE};
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SSpan = styled.span`
	color: ${colors.BLACK_7};
`;
const SIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const TalentContact = (props: ContactProps) => {
	return (
		<div style={{ flexGrow: '1' }}>
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<SIcon>
					<MoneyIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
				<div>
					<SSpan>Salary</SSpan>
					<div>
						{props.salary} {props.currency}
					</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<SIcon>
					<HomeIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
				<div>
					<SSpan>Address</SSpan>
					<div>
						{props.address?.country}. {props.address?.city}
					</div>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<SIcon>
					<EmailIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
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
				<SIcon>
					<LinkedInSolidIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
				<div>
					<SSpan>LinkedIn</SSpan>
					<SLink target="_blank" href={props.linkedin}>
						{props.linkedin + 'sdfsdfkmsdlfmsdfkmsdlfksmdlfkmsldkfmlsdkfmlsdkfmlsdkfmlsdkf' ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10} className="mb-15">
				<SIcon>
					<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
				<div>
					<SSpan>Website</SSpan>
					<SLink target="_blank" href={props.website}>
						{props.website ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<SIcon>
					<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
				<div>
					<SSpan>Git</SSpan>
					<SLink target="_blank" href={props.git}>
						{props.git ?? 'N/A'}
					</SLink>
				</div>
			</FlexBox>
			<HrDivider top={10} side={20} />
			<FlexBox justify="start" align="start" gap={10}>
				<SIcon>
					<TwitterIcon width="20px" height="20px" color={colors.BLACK_7} />
				</SIcon>
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
