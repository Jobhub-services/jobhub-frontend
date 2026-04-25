import { Link, useLocation } from 'react-router-dom';
import { NavItem } from 'staak-ui';
import {
	AppliedJobFilledIcon,
	AppliedJobIcon,
	CompanyFilledIcon,
	CompanyIcon,
	JobFilledIcon,
	JobIcon,
	MessageFilledIcon,
	MessageIcon,
	OverviewFilledIcon,
	OverviewIcon,
	SettingsFilledIcon,
	SettingsIcon,
} from '@/assets/icons';
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
	const widthItems = appExpanded ? '96%' : '100%';
	return (
		<>
			<SLink to="/" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname === '/' ? <OverviewFilledIcon /> : <OverviewIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname === '/'}
				>
					{appExpanded ? <NavItem.Content>Overview</NavItem.Content> : <></>}
				</NavItem>
			</SLink>
			<SLink to="jobs" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname.startsWith('/jobs') ? <JobFilledIcon /> : <JobIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/jobs')}
				>
					{appExpanded ? <NavItem.Content>Jobs</NavItem.Content> : null}
				</NavItem>
			</SLink>
			{/*<HealthIcon width="20px" height="20px" /><NewCompanyIcon width="20px" height="20px" /><ApplicantIcon width="20px" height="20px" /> */}
			<SLink to="companies" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname.startsWith('/companies') ? <CompanyFilledIcon /> : <CompanyIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/companies')}
				>
					{appExpanded ? <NavItem.Content>Companies</NavItem.Content> : null}
				</NavItem>
			</SLink>
			<SLink to="applications" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={
						pathname.startsWith('/applications') ? <AppliedJobFilledIcon width="25px" height="25px" /> : <AppliedJobIcon width="25px" height="25px" />
					}
					width={widthItems}
					active={pathname.startsWith('/applications')}
				>
					{appExpanded ? <NavItem.Content>Applications</NavItem.Content> : null}
				</NavItem>
			</SLink>
			<SLink to="messages" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname.startsWith('/messages') ? <MessageFilledIcon width="25px" height="25px" /> : <MessageIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/messages')}
				>
					{appExpanded ? <NavItem.Content>Messages</NavItem.Content> : null}
				</NavItem>
			</SLink>
			{/*<SLink to="invitations">
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

			<SLink to="/settings/account" expanded={appExpanded}>
				<NavItem
					icon={pathname.startsWith('/settings') ? <SettingsFilledIcon width="25px" height="25px" /> : <SettingsIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/settings')}
				>
					{appExpanded ? <NavItem.Content>Settings</NavItem.Content> : null}
				</NavItem>
			</SLink>
		</>
	);
};

export default DeveloperSide;
