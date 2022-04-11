import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthFooterProps } from '@/models/component';
import { colors } from '@/assets/theme';
const SignUpFlexBox = styled(FlexBox)`
	background: ${colors.GRAY_2};
	padding: 12px 20px !important;
`;

const LinkLogin = styled(Link)`
	color: ${colors.PURPLE_BASE};
`;
const AuthFooter = (props: AuthFooterProps) => {
	return (
		<SignUpFlexBox width="100%" flexDirection="column" align="flex-start" justify="flex-start">
			<div>{props.title}</div>
			<LinkLogin to={props.to}>{props.link}</LinkLogin>
		</SignUpFlexBox>
	);
};

export default AuthFooter;
