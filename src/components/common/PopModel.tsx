import styled, { keyframes } from 'styled-components';
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
	align-items: center;
	background: #27272736;
	animation: ${opacity} 0.15s ease-out;
	overflow: hidden;
	z-index: 150;
`;
const SPopUp = styled.div<any>`
	width: ${(props) => props.width};
	border-radius: 7px;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	background-color: white;
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
	function onClose() {
		setClosed(true);
		if (props.onClose) props.onClose(true);
	}
	const handleClose = (event: React.SyntheticEvent) => {
		const target = event.target;
		if (target === ref.current) onClose();
	};
	return (
		<Container closed={closed} onClick={handleClose} ref={ref}>
			<SPopUp width={props.width}>
				<FlexBox justify="space-between" style={{ padding: '10px 15px' }}>
					{header}
					<IconButton width="30px" height="30px" circle onClick={onClose}>
						<CloseIcon color={colors.BLACK_8} />
					</IconButton>
				</FlexBox>
				<HrDivider />
				<div style={{ padding: '15px 15px' }}>{body}</div>
				<HrDivider />
				<FlexBox style={{ padding: '10px 15px' }}>{footer}</FlexBox>
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
