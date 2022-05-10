import { ErrorIcon, SuccessIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import React, { useEffect, useState } from 'react';
import { CloseIcon, FlexBox } from 'staak-ui';
import styled from 'styled-components';

interface PAlert {
	children?: React.ReactNode;
	className?: string;
	color?: 'red' | 'green';
	onCloseCallback?: () => void;
}
const AlertColors: { [x in 'red' | 'green']: { background: string; icon: string } } = {
	red: { background: colors.RED_CLEAR_2, icon: colors.RED_BASE },
	green: { background: colors.GREEN_CLEAR_3, icon: colors.GREEN_BASE },
};

const AlertIcon = { red: <ErrorIcon />, green: <SuccessIcon /> };
const SAlert = styled(FlexBox)<PAlert>`
	width: 100%;
	background-color: ${(props: PAlert) => AlertColors[props.color!].background};
	border-radius: 8px;
	padding: 8px 12px !important;
	color: white;
	display: ${(props) => (props.closed ? 'none' : 'flex')};
	opacity: ${(props) => (props.closed ? 0 : 1)};
	transition: opacity 300ms;
	box-shadow: 0px 0px 10px -2px ${colors.BLACK_10};
`;
const SIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: PAlert) => AlertColors[props.color!].icon};
	padding: 5px;
	border-radius: 50%;
	cursor: pointer;
`;
const Alert = (props: PAlert) => {
	const [closed, setClosed] = useState(false);
	useEffect(() => {
		setClosed(false);
		const interval = setInterval(() => {
			setClosed(true);
			if (props.onCloseCallback) props.onCloseCallback();
		}, 10000);
		return () => clearInterval(interval);
	}, []);
	return (
		<SAlert className={props.className} color={props.color} closed={closed} justify="space-between" gap={20}>
			<FlexBox gap={10}>
				{AlertIcon[props.color!]}
				<span>{props.children}</span>
			</FlexBox>
			<SIcon
				color={props.color}
				onClick={() => {
					setClosed(true);
				}}
			>
				<CloseIcon width="13px" height="13px" color={'white'} />
			</SIcon>
		</SAlert>
	);
};

Alert.defaultProps = {
	color: 'red',
};
export default Alert;
