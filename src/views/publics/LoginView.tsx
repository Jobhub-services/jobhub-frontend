import React, { Component } from 'react';
import { LoginProps, LoginState } from '@/models/component/auth.interface';
import LoginForm from '@/components/publics/auth/LoginForm';
import { AuthFooter } from '@/components';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '@/assets/theme';

const FlexLink = styled(FlexBox)`
	padding: 0 20px 10px 20px;
`;
const SLink = styled(Link)`
	color: ${colors.PURPLE_BASE};
`;
const LoginFlexBox = styled.div`
	width: 100%;
	padding: 15px 20px !important;
`;

const TitleAuth = styled.h1`
	font-size: 1.6em;
	color: ${colors.PURPLE_BASE};
	margin: 8px 0 15px 0;
`;

class LoginView extends Component<LoginProps, LoginState> {
	render(): React.ReactNode {
		return (
			<>
				<LoginFlexBox>
					<TitleAuth>Sign in to Staak</TitleAuth>
					<LoginForm />
				</LoginFlexBox>
				<FlexLink justify="end" width="100%">
					<SLink to="/forgot-password">Forgot your password?</SLink>
				</FlexLink>
				<AuthFooter title="Don't have a Staak account?" link="Sign up Now" to="/register/company" />
			</>
		);
	}
}
export default LoginView;
