import React, { Component } from 'react';
import { LoginProps, LoginState } from '@/models/component/auth.interface';
import LoginForm from '@/components/publics/auth/LoginForm';
import { AuthFooter } from '@/components';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const FlexBoxPadding = styled(FlexBox)`
	padding: 15px 20px 0px 20px !important;
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
					<FlexBoxPadding>{/*<SimpleLink size="xs">Forgot your password?</SimpleLink>*/}</FlexBoxPadding>
				</LoginFlexBox>
				<AuthFooter title="Don't have a Staak account?" link="Sign up Now" to="/register/company" />
			</>
		);
	}
}
export default LoginView;
