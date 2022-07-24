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
	show?: boolean;
	onCloseCallback?: () => void;
}
const AlertColors: { [x in 'red' | 'green']: { background: string; icon: string } } = {
	red: { background: colors.RED_CLEAR_5, icon: colors.RED_BASE },
	green: { background: colors.GREEN_CLEAR_3, icon: colors.GREEN_BASE },
};

const AlertIcon = { red: <ErrorIcon />, green: <SuccessIcon /> };
const SAlert = styled.div<PAlert>`
	width: 100%;
	background-color: white;
	border-radius: 8px;
	//padding: 8px 12pximportant; !
	display: ${(props) => (props.closed ? 'none' : 'block')};
	animation: ${(props) => (props.closed ? hide : show)} 0.15s linear;
	box-shadow: 0px 0px 10px -2px ${colors.BLACK_10};
	background-color: ${(props) => (props.color === 'red' ? colors.RED_CLEAR_5 : colors.GREEN_CLEAR_4)};
`;
const SSpan = styled.span`
	cursor: pointer;
`;
const STitle = styled.span<PAlert>`
	color: ${(props) => AlertColors[props.color!].icon};
`;
const Header = styled(FlexBox)`
	//background-color: ${(props) => (props.color === 'red' ? colors.RED_CLEAR_5 : colors.RED_CLEAR_5)};
	padding: 8px 12px;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;
const SBody = styled.div`
	padding: 0 12px 8px 12px;
`;
const Alert = (props: PAlert) => {
	const [closed, setClosed] = useState(false);
	useEffect(() => {
		setClosed(props.show ?? false);
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
			<Header justify="space-between" color={props.color}>
				<FlexBox gap={10}>
					{AlertIcon[props.color!]}
					<STitle color={props.color}>{props.color === 'red' ? 'Errors' : 'Success'}</STitle>
				</FlexBox>
				<SSpan onClick={handleClose}>
					<CloseIcon width="15px" height="15px" color={AlertColors[props.color!].icon} />
				</SSpan>
			</Header>
			<SBody className="mt-10">{props.children}</SBody>
		</SAlert>
	);
};

Alert.defaultProps = {
	color: 'red',
};
export default Alert;
