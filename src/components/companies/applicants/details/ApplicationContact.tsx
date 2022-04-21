import { FlexBox, GithubIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { EmailIcon, PhoneIcon, LinkedInSolidIcon, WorldIcon } from '@/assets/icons';

const ApplicationContact = () => {
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
						<div style={{ color: `${colors.PURPLE_BASE}` }}>https://www.linkedin.com/in/</div>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10} className="mb-15">
					<WorldIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Website</div>
						<div style={{ color: `${colors.PURPLE_BASE}` }}>https://www.jerombell45.com</div>
					</div>
				</FlexBox>
				<FlexBox justify="start" align="start" gap={10}>
					<GithubIcon width="20px" height="20px" color={colors.BLACK_7} />
					<div>
						<div style={{ color: `${colors.BLACK_7}` }}>Git</div>
						<div style={{ color: `${colors.PURPLE_BASE}` }}>https://gitlab.com/jerombell45</div>
					</div>
				</FlexBox>
			</div>
		</div>
	);
};

export default ApplicationContact;
