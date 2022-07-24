import { ApplicationColorIcon, JobColorIcon, MessageColorIcon, OverviewColorIcon, SettingsColorIcon, FindTalentsColorIcon } from '@/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
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

const CompanySide = ({ appExpanded }: { appExpanded: boolean }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const widthItems = '96%';
	function changeRoute(event: React.SyntheticEvent, index: string) {
		navigate(index, { replace: true });
	}
	return (
		<>
			<NavItem
				className="mb-5"
				icon={<OverviewColorIcon width="25px" height="25px" />}
				width={widthItems}
				active={pathname === '/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, '/')}
			>
				<NavItem.Content>{appExpanded ? 'Overview' : ''}</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<JobColorIcon width="25px" height="25px" />}
				width={widthItems}
				active={pathname.startsWith('/jobs')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'jobs')}
			>
				<NavItem.Content>{appExpanded ? 'Jobs' : ''}</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<FindTalentsColorIcon width="25px" height="25px" />}
				width={widthItems}
				active={pathname.startsWith('/talents')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'talents')}
			>
				<NavItem.Content>{appExpanded ? 'Talents' : ''}</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<ApplicationColorIcon width="25px" height="25px" />}
				width={widthItems}
				active={pathname.startsWith('/applicants')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'applicants/NEW')}
			>
				<NavItem.Content>{appExpanded ? 'Applicants' : ''}</NavItem.Content>
			</NavItem>
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
			<NavItem
				icon={<SettingsColorIcon width="25px" height="25px" />}
				width={widthItems}
				active={pathname.startsWith('/settings')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, '/settings/account')}
			>
				<NavItem.Content>{appExpanded ? 'Settings' : ''}</NavItem.Content>
			</NavItem>
		</>
	);
};

export default CompanySide;
