import { Link, useLocation } from 'react-router-dom';
import { AssesmentsIcon, MessageIcon, NavItem, ScheduleIcon, JobIcon, HealthIcon, SettingIcon, InvitationIcon, ApplicantIcon } from 'staak-ui';
import { NewCompanyIcon } from '@/assets/icons';
import styled from 'styled-components';

const SLink = styled(Link)`
	width: 100%;
`;
const DeveloperSide = () => {
	const { pathname } = useLocation();
	const widthItems = '96%';
	return (
		<>
			<SLink to="/">
				<NavItem className="mb-5" icon={<HealthIcon width="20px" height="20px" />} width={widthItems} active={pathname === '/'}>
					<NavItem.Content>Overview</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="jobs">
				<NavItem className="mb-5" icon={<JobIcon width="20px" height="20px" />} width={widthItems} active={pathname.startsWith('/jobs')}>
					<NavItem.Content>Jobs</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="companies">
				<NavItem className="mb-5" icon={<NewCompanyIcon width="20px" height="20px" />} width={widthItems} active={pathname.startsWith('/companies')}>
					<NavItem.Content>Companies</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="applications">
				<NavItem
					className="mb-5"
					icon={<ApplicantIcon width="20px" height="20px" />}
					width={widthItems}
					active={pathname.startsWith('/applications')}
				>
					<NavItem.Content>Applications</NavItem.Content>
				</NavItem>
			</SLink>
			<SLink to="messages">
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
			</SLink>

			<SLink to="/settings/account">
				<NavItem icon={<SettingIcon width="20px" height="20px" />} width={widthItems} active={pathname.startsWith('/settings')}>
					<NavItem.Content>Settings</NavItem.Content>
				</NavItem>
			</SLink>
		</>
	);
};

export default DeveloperSide;
