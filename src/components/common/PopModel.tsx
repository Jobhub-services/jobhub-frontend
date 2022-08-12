import styled, { css, keyframes } from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, IconButton, HrDivider } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import React, { useEffect, useRef, useState } from 'react';
import { PopModelProps } from '@/models/component';
const opacity = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const Container = styled.div<any>`
	position: fixed;
	top: 0;
	left: 0;
	width: ${(props) => (props.closed ? '0' : '100%')};
	height: ${(props) => (props.closed ? '0' : '100%')};
	display: flex;
	justify-content: center;
	${(props) =>
		!props.top &&
		css`
			align-items: center;
		`}
	background: #70628736;
	animation: ${opacity} 0.15s ease-out;
	overflow: hidden;
	z-index: 150;
	transition: opacity 0.15s linear;
`;
const SPopUp = styled.div<any>`
	position: relative;
	width: ${(props) => props.width};
	top: ${(props) => (props.closed ? '-50%' : '0')};
	border-radius: 0.42rem;
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
	background-color: white;
	border: 0 solid rgba(0, 0, 0, 0.2);
	height: fit-content;
	${(props) =>
		!props.top &&
		css`
			margin: 20px 0;
		`}
	transition: all 0.3s ease-in-out;
`;
const PopModel = (props: PopModelProps) => {
	const [closed, setClosed] = useState(true);
	const ref = useRef(null);
	const header = React.Children.map(props.children, (child) => (child?.type?.displayName === 'Header' ? child : null));
	const body = React.Children.map(props.children, (child) => (child?.type?.displayName === 'Body' ? child : null));
	const footer = React.Children.map(props.children, (child) => (child?.type?.displayName === 'Footer' ? child : null));
	useEffect(() => {
		setClosed(props.closed!);
	}, [props.closed]);
	const onClose = () => {
		setClosed(true);
		if (props.onClose) props.onClose(true);
	};
	const handleClose = (event: React.SyntheticEvent) => {
		const target = event.target;
		if (target === ref.current) onClose();
	};
	return (
		<Container closed={closed} onClick={handleClose} ref={ref} top={props.top}>
			<SPopUp width={props.width} closed={closed}>
				<FlexBox justify="space-between" style={{ padding: '10px 15px' }}>
					{header}
					<IconButton width="30px" height="30px" circle onClick={onClose}>
						<CloseIcon color={colors.BLACK_8} />
					</IconButton>
				</FlexBox>
				<HrDivider />
				<div style={{ padding: '15px 15px' }}>{body}</div>
				<HrDivider />
				<FlexBox style={{ padding: '15px 15px' }}>{footer}</FlexBox>
			</SPopUp>
		</Container>
	);
};

const ModelBody = ({ children }: PopModelProps) => <>{children}</>;
const ModelHeader = ({ children }: PopModelProps) => <>{children}</>;
const ModelFooter = ({ children }: PopModelProps) => <>{children}</>;

ModelBody.displayName = 'Body';
ModelHeader.displayName = 'Header';
ModelFooter.displayName = 'Footer';

PopModel.Body = ModelBody;
PopModel.Header = ModelHeader;
PopModel.Footer = ModelFooter;

PopModel.defaultProps = {
	width: '50%',
};
export default PopModel;
