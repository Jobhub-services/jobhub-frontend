import { colors } from '@/assets/theme';
import { HeaderTabProps } from '@/models/component/companies/subscription/subscription.interface';
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
	box-shadow: 0 5px 29px rgb(0 0 0 / 10%);
	gap: 20px;
	background-color: ${(props) => (props.active ? colors.PURPLE_2 : 'white')};
	font-weight: ${(props) => (props.active ? '500' : '500')};
	color: ${(props) => (props.active ? 'white' : colors.PURPLE_2)};
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

const HeaderTab = ({ title, active = false, onClick, status }: HeaderTabProps) => {
	return (
		<SHeaderTab active={active} onClick={(event: any) => onClick(status!, event)}>
			<span>{title}</span>
		</SHeaderTab>
	);
};

export default HeaderTab;
