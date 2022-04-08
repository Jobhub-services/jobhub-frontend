import { Logo } from '@/components/common';
import { CompaniesOverview } from '@/models/component';
import styled from 'styled-components';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { FlexBox, MessageIcon, NavItem, ScheduleIcon, TalentIcon, JobIcon, HealthIcon, SettingIcon, InvitationIcon, ApplicantIcon } from 'staak-ui';
import { AssesmentsIcon } from 'staak-ui';
import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ASIDE_WIDTH } from '@/constants/app.constants';

const SyledContainer = styled.div<CompaniesOverview.SideBarProps>`
	border-right: 1px solid ${Colors.BLACK_12};
	background-color: ${Colors.WHITE};
	width: ${ASIDE_WIDTH}px;
	height: 100%;
	padding: 0px 10px 0px 0px;
`;
const SideBar = (props: CompaniesOverview.SideBarProps) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	console.log(pathname);
	const widthItems = '96%';
	function changeRoute(event: React.SyntheticEvent, index: string) {
		navigate(index, { replace: true });
	}
	return (
		<SyledContainer width={props.width}>
			<h1 style={{ color: Colors.PURPLE_BASE, paddingLeft: '15px' }}>{'</> staak'}</h1>
			<FlexBox flexDirection="column" align="flex-start">
				<NavItem
					icon={<HealthIcon />}
					width={widthItems}
					active={pathname === '/'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, '/')}
				>
					<NavItem.Content>Overview</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<JobIcon />}
					width={widthItems}
					active={pathname.startsWith('/jobs')}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'jobs')}
				>
					<NavItem.Content>Jobs</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<TalentIcon />}
					width={widthItems}
					active={pathname === '/talents'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'talents')}
				>
					<NavItem.Content>Talents</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<ApplicantIcon />}
					width={widthItems}
					active={pathname === '/applicants'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'applicants')}
				>
					<NavItem.Content>Applicants</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<MessageIcon />}
					width={widthItems}
					active={pathname === '/messages'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'messages')}
				>
					<NavItem.Content>Messages</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<InvitationIcon />}
					width={widthItems}
					active={pathname === '/invitation'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'invitations')}
				>
					<NavItem.Content>Invitations</NavItem.Content>
				</NavItem>
				<NavItem
					icon={<ScheduleIcon />}
					width={widthItems}
					active={pathname === '/schedule'}
					onClick={(event: React.SyntheticEvent) => changeRoute(event, 'schedule')}
				>
					<NavItem.Content>Schedule</NavItem.Content>
				</NavItem>
				<NavItem
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
			</FlexBox>
		</SyledContainer>
	);
};

SideBar.defaultProps = {
	width: '260px',
};
export default SideBar;
