import {
	MessageIcon,
	MessageFilledIcon,
	SettingsFilledIcon,
	SettingsIcon,
	JobIcon,
	JobFilledIcon,
	OverviewFilledIcon,
	OverviewIcon,
	FindTalentIcon,
	FindTalentFilledIcon,
	ApplicationIcon,
	ApplicationFilledIcon,
} from '@/assets/icons';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from 'staak-ui';
import styled, { css } from 'styled-components';

const SLink = styled(Link)<any>`
	${(props) =>
		props.expanded &&
		css`
			width: 100%;
		`}
`;

const CompanySide = ({ appExpanded }: { appExpanded: boolean }) => {
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
					{appExpanded ? <NavItem.Content>Overview</NavItem.Content> : null}
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

			<SLink to="talents" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname.startsWith('/talents') ? <FindTalentFilledIcon width="25px" height="25px" /> : <FindTalentIcon />}
					width={widthItems}
					active={pathname.startsWith('/talents')}
				>
					{appExpanded ? <NavItem.Content>Talents</NavItem.Content> : null}
				</NavItem>
			</SLink>

			<SLink to="applicants/NEW" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={pathname.startsWith('/applicants') ? <ApplicationFilledIcon width="25px" height="25px" /> : <ApplicationIcon />}
					width={widthItems}
					active={pathname.startsWith('/applicants')}
				>
					{appExpanded ? <NavItem.Content>Applicants</NavItem.Content> : null}
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
			{/*
			<NavItem
				className="mb-5"
				icon={<InvitationIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname === '/invitation'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'invitations')}
			>
				<NavItem.Content>Invitations</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<ScheduleIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname === '/schedule'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'schedule')}
			>
				<NavItem.Content>Schedule</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<AssesmentsIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname === 'assesments/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'assesments/')}
			>
				<NavItem.Content>Assements</NavItem.Content>
			</NavItem>*/}

			<SLink to="settings/account" expanded={appExpanded}>
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

export default CompanySide;
