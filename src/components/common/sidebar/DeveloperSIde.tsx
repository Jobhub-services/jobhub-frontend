import { Link, useLocation } from 'react-router-dom';
import { AssesmentsIcon, MessageIcon, NavItem, ScheduleIcon, JobIcon, HealthIcon, SettingIcon, InvitationIcon, ApplicantIcon } from 'staak-ui';
import { ApplicationColorIcon, CompanyColorIcon, JobColorIcon, NewCompanyIcon, OverviewColorIcon, SettingsColorIcon } from '@/assets/icons';
import styled, { css } from 'styled-components';

const SLink = styled(Link)<any>`
	${(props) =>
		props.expanded &&
		css`
			width: 100%;
		`}
`;
const DeveloperSide = ({ appExpanded }: { appExpanded: boolean }) => {
	const { pathname } = useLocation();
	const widthItems = '96%';
	return (
		<>
			<SLink to="/" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<OverviewColorIcon width="25px" height="25px" />} width={widthItems} active={pathname === '/'}>
					{appExpanded ? <NavItem.Content>Overview</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
			<SLink to="jobs" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<JobColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/jobs')}>
					{appExpanded ? <NavItem.Content>Jobs</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
			{/*<HealthIcon width="20px" height="20px" /><NewCompanyIcon width="20px" height="20px" /><ApplicantIcon width="20px" height="20px" /> */}
			<SLink to="companies" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<CompanyColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/companies')}
				>
					{appExpanded ? <NavItem.Content>Companies</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
			<SLink to="applications" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<ApplicationColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/applications')}
				>
					{appExpanded ? <NavItem.Content>Applications</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
			{/*<SLink to="messages">
				<NavItem className="mb-5" icon={<MessageIcon width="20px" height="20px" />} width={widthItems} active={pathname === '/messages'}>
					<NavItem.Content>Messages</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="invitations">
				<NavItem className="mb-5" icon={<InvitationIcon width="20px" height="20px" />} width={widthItems} active={pathname === '/invitation'}>
					<NavItem.Content>Invitations</NavItem.Content>
				</NavItem>
			</SLink>

			<SLink to="schedule">
				<NavItem className="mb-5" icon={<ScheduleIcon width="20px" height="20px" />} width={widthItems} active={pathname === '/schedule'}>
					<NavItem.Content>Schedule</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="assesments">
				<NavItem className="mb-5" icon={<AssesmentsIcon width="20px" height="20px" />} width={widthItems} active={pathname === '/assesments'}>
					<NavItem.Content>Assements</NavItem.Content>
				</NavItem>
	</SLink>*/}

			<SLink to="/settings/account">
				<NavItem icon={<SettingsColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/settings')}>
					{appExpanded ? <NavItem.Content>Settings</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
		</>
	);
};

export default DeveloperSide;
