import { FlexBox, GithubIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { EmailIcon, PhoneIcon, LinkedInSolidIcon, WorldIcon } from '@/assets/icons';
import styled from 'styled-components';
import { PApplicationContact } from '@/models/component/companies/applications/applications.interface';

const Sa = styled.a`
	color: ${colors.PURPLE_BASE};
`;
const ApplicationContact = (props: PApplicationContact) => {
	return (
		<div>
			<h3>Contact</h3>
			<div>
				<FlexBox justify="start" align="start" gap={10} className="mb-15">
					<EmailIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Email</div>
						<div>jerombell45@gmail.com</div>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10} className="mb-15">
					<PhoneIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Phone</div>
						<div>+973 253 569 45</div>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10} className="mb-15">
					<LinkedInSolidIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>LinkedIn</div>
						<Sa href={props.linkedIn} target="_blank">
							{props.linkedIn}
						</Sa>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10} className="mb-15">
					<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Website</div>
						<Sa href={props.website} target="_blank">
							{props.website}
						</Sa>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10}>
					<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Git</div>
						<Sa href={props.git} target="_blank">
							{props.git}
						</Sa>
						{!props.git && <div>N/A</div>}
					</div>
				</FlexBox>
			</div>
		</div>
	);
};

export default ApplicationContact;
