import { colors } from '@/assets/theme';
import { HeaderTabProps } from '@/models/component/companies/applications/applications.interface';
import React from 'react';
import styled from 'styled-components';

const SBadge = styled.span<any>`
	display: inline-block;
	padding: 3px 7px;
	color: white;
	background-color: ${colors.PURPLE_BASE};
	border-radius: 8px;
	transition-duration: 0.2s;
	font-size: 10px;
`;

const SHeaderTab = styled.div<any>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	background-color: ${(props) => (props.active ? colors.PURPLE_1 : '#eaf0f7')};
	font-weight: ${(props) => (props.active ? '500' : '500')};
	color: ${(props) => (props.active ? colors.PURPLE_BASE : colors.BLACK_2)};
	padding: 10px 15px;
	border-radius: 8px;
	cursor: pointer;
	transition-duration: 0.2s;
	&:hover {
		background-color: ${colors.PURPLE_1};
		color: ${colors.PURPLE_BASE};
	}
	&:hover ${SBadge} {
		background-color: ${colors.PURPLE_BASE};
		color: white;
	}
`;

const HeaderTab = ({ title, badge, active = false, onClick, status }: HeaderTabProps) => {
	return (
		<SHeaderTab active={active} onClick={(event: React.SyntheticEvent) => onClick(status!, event)}>
			<span>{title}</span>
			{active && <SBadge>{badge}</SBadge>}
		</SHeaderTab>
	);
};

export default HeaderTab;
