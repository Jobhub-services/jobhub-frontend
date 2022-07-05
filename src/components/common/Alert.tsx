import { ErrorIcon, SuccessIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import React, { useEffect, useState } from 'react';
import { CloseIcon, FlexBox } from 'staak-ui';
import styled, { keyframes } from 'styled-components';

const hide = keyframes`
	from{opacity:1}
	to{opacity:0}
`;
const show = keyframes`
	from{opacity:0}
	to{opacity:1}
`;
interface PAlert {
	children?: React.ReactNode;
	className?: string;
	color?: 'red' | 'green';
	closed?: boolean;
	onCloseCallback?: () => void;
}
const AlertColors: { [x in 'red' | 'green']: { background: string; icon: string } } = {
	red: { background: colors.RED_CLEAR_2, icon: colors.RED_BASE },
	green: { background: colors.GREEN_CLEAR_3, icon: colors.GREEN_BASE },
};

const AlertIcon = { red: <ErrorIcon />, green: <SuccessIcon /> };
const SAlert = styled.div<PAlert>`
	width: 100%;
	background-color: ${(props: PAlert) => AlertColors[props.color!].background};
	border-radius: 8px;
	padding: 8px 12px !important;
	color: white;
	display: ${(props) => (props.closed ? 'none' : 'block')};
	animation: ${(props) => (props.closed ? hide : show)} 0.15s linear;
	box-shadow: 0px 0px 10px -2px ${colors.BLACK_10};
`;
const SSpan = styled.span`
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
	const handleClose = () => {
		if (props.onCloseCallback) props.onCloseCallback();
		setClosed(true);
	};
	return (
		<SAlert className={props.className} color={props.color} closed={closed}>
			<FlexBox justify="space-between">
				<FlexBox gap={10}>
					{AlertIcon[props.color!]}
					<span>{props.color === 'red' ? 'Errors' : 'Success'}</span>
				</FlexBox>
				<SSpan onClick={handleClose}>
					<CloseIcon width="15px" height="15px" color={'white'} />
				</SSpan>
			</FlexBox>
			<div className="mt-10">{props.children}</div>
		</SAlert>
	);
};

Alert.defaultProps = {
	color: 'red',
};
export default Alert;
