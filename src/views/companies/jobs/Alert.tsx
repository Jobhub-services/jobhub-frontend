import { ErrorIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useEffect, useState } from 'react';
import { CloseIcon, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SAlert = styled(FlexBox)<any>`
	width: 50%;
	background-color: ${(props) => props.color};
	border-radius: 8px;
	padding: 8px 12px !important;
	color: white;
	display: ${(props) => (props.closed ? 'none' : 'flex')};
	opacity: ${(props) => (props.closed ? 0 : 1)};
	transition: opacity 300ms;
	//background-color: red;
`;
const SIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.RED_BASE};
	padding: 5px;
	border-radius: 50%;
	cursor: pointer;
`;
const Alert = (props: any) => {
	const [closed, setClosed] = useState(false);
	useEffect(() => {
		console.log('alert here');
		setClosed(false);
		const interval = setInterval(() => {
			setClosed(true);
		}, 10000);
		return () => clearInterval(interval);
	}, []);
	return (
		<SAlert className={props.className} style={{ ...props.style }} color={props.color} closed={closed} justify="space-between" gap={20}>
			<FlexBox gap={10}>
				<ErrorIcon />
				<span>{props.children}</span>
			</FlexBox>
			<SIcon
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
	color: colors.RED_CLEAR_2,
};
export default Alert;
