import { ApplicationColorIcon, JobColorIcon, MessageColorIcon, OverviewColorIcon, SettingsColorIcon, FindTalentsColorIcon } from '@/assets/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	AssesmentsIcon,
	MessageIcon,
	NavItem,
	ScheduleIcon,
	TalentIcon,
	JobIcon,
	HealthIcon,
	SettingIcon,
	InvitationIcon,
	ApplicantIcon,
} from 'staak-ui';
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
				<NavItem className="mb-5" icon={<OverviewColorIcon width="25px" height="25px" />} width={widthItems} active={pathname === '/'}>
					{appExpanded ? <NavItem.Content>Overview</NavItem.Content> : null}
				</NavItem>
			</SLink>
			<SLink to="jobs" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<JobColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/jobs')}>
					{appExpanded ? <NavItem.Content>Jobs</NavItem.Content> : null}
				</NavItem>
			</SLink>

			<SLink to="talents" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<FindTalentsColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/talents')}
				>
					{appExpanded ? <NavItem.Content>Talents</NavItem.Content> : null}
				</NavItem>
			</SLink>

			<SLink to="applicants/NEW" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<ApplicationColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/applicants')}
				>
					{appExpanded ? <NavItem.Content>Applicants</NavItem.Content> : null}
				</NavItem>
			</SLink>
			<SLink to="messages" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<MessageColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/messages')}>
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
				<NavItem icon={<SettingsColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/settings')}>
					{appExpanded ? <NavItem.Content>Settings</NavItem.Content> : null}
				</NavItem>
			</SLink>
		</>
	);
};

export default CompanySide;
