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
	const widthItems = '96%';
	return (
		<>
			<SLink to="/" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<OverviewColorIcon width="25px" height="25px" />} width={widthItems} active={pathname === '/'}>
					<NavItem.Content>{appExpanded ? 'Overview' : ''}</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="jobs" expanded={appExpanded}>
				<NavItem className="mb-5" icon={<JobColorIcon width="25px" height="25px" />} width={widthItems} active={pathname.startsWith('/jobs')}>
					<NavItem.Content>{appExpanded ? 'Jobs' : ''}</NavItem.Content>
				</NavItem>
			</SLink>

			<SLink to="talents" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<FindTalentsColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/talents')}
				>
					<NavItem.Content>{appExpanded ? 'Talents' : ''}</NavItem.Content>
				</NavItem>
			</SLink>

			<SLink to="applicants/NEW" expanded={appExpanded}>
				<NavItem
					className="mb-5"
					icon={<ApplicationColorIcon width="25px" height="25px" />}
					width={widthItems}
					active={pathname.startsWith('/applicants')}
				>
					<NavItem.Content>{appExpanded ? 'Applicants' : ''}</NavItem.Content>
				</NavItem>
			</SLink>
			{/*<NavItem
				className="mb-5"
				icon={<MessageColorIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname === '/messages'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'messages')}
			>
				<NavItem.Content>Messages</NavItem.Content>
			</NavItem>
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
					<NavItem.Content>{appExpanded ? 'Settings' : ''}</NavItem.Content>
				</NavItem>
			</SLink>
		</>
	);
};

export default CompanySide;
