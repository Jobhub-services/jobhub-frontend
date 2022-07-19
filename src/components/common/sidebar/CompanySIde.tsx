import { JobColorIcon, MessageColorIcon } from '@/assets/icons';
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

const CompanySide = () => {
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
				icon={<HealthIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname === '/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, '/')}
			>
				<NavItem.Content>Overview</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<JobColorIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname.startsWith('/jobs')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'jobs')}
			>
				<NavItem.Content>Jobs</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<TalentIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname.startsWith('/talents')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'talents')}
			>
				<NavItem.Content>Talents</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<ApplicantIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname.startsWith('/applicants')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'applicants/new')}
			>
				<NavItem.Content>Applicants</NavItem.Content>
			</NavItem>
			<NavItem
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
			</NavItem>
			<NavItem
				icon={<SettingIcon width="20px" height="20px" />}
				width={widthItems}
				active={pathname.startsWith('/settings')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, '/settings/account')}
			>
				<NavItem.Content>Settings</NavItem.Content>
			</NavItem>
		</>
	);
};

export default CompanySide;
