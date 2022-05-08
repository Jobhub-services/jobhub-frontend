import { useLocation, useNavigate } from 'react-router-dom';
import { AssesmentsIcon, MessageIcon, NavItem, ScheduleIcon, JobIcon, HealthIcon, SettingIcon, InvitationIcon, ApplicantIcon } from 'staak-ui';
import { NewCompanyIcon } from '@/assets/icons';

const DeveloperSide = () => {
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
				icon={<HealthIcon />}
				width={widthItems}
				active={pathname === '/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, '/')}
			>
				<NavItem.Content>Overview</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<JobIcon />}
				width={widthItems}
				active={pathname.startsWith('/jobs')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'jobs')}
			>
				<NavItem.Content>Jobs</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<NewCompanyIcon />}
				width={widthItems}
				active={pathname === '/talents'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'talents')}
			>
				<NavItem.Content>Companies</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<ApplicantIcon />}
				width={widthItems}
				active={pathname.startsWith('/applicants')}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'Applications/new')}
			>
				<NavItem.Content>Applications</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<MessageIcon />}
				width={widthItems}
				active={pathname === '/messages'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'messages')}
			>
				<NavItem.Content>Messages</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<InvitationIcon />}
				width={widthItems}
				active={pathname === '/invitation'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'invitations')}
			>
				<NavItem.Content>Invitations</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<ScheduleIcon />}
				width={widthItems}
				active={pathname === '/schedule'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'schedule')}
			>
				<NavItem.Content>Schedule</NavItem.Content>
			</NavItem>
			<NavItem
				className="mb-5"
				icon={<AssesmentsIcon />}
				width={widthItems}
				active={pathname === 'assesments/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'assesments/')}
			>
				<NavItem.Content>Assements</NavItem.Content>
			</NavItem>
			<NavItem
				icon={<SettingIcon />}
				width={widthItems}
				active={pathname === 'settings/'}
				onClick={(event: React.SyntheticEvent) => changeRoute(event, 'settings/')}
			>
				<NavItem.Content>Settings</NavItem.Content>
			</NavItem>
		</>
	);
};

export default DeveloperSide;
