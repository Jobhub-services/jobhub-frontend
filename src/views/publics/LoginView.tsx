import React, { Component } from 'react';
import { LoginProps, LoginState } from '@/models/component/auth.interface';
import {SideBar,AuthFooter, LoginForm, ConnectionOptions} from '@/components';
import {  Divider, FlexBox,Headline,SimpleLink} from 'staak-ui';
import styled from 'styled-components';

const FlexBoxPadding = styled(FlexBox)`
	padding: 15px 20px 0px 20px !important;
`
const LoginFlexBox = styled(FlexBox)`
	background-color:white;
    padding: 15px 20px !important;
`
const FormFlexBox = styled(FlexBox)`
	background-color:white;
	box-shadow: 0px 0px 20px -15px black;
	border-radius: 8px;
`

class LoginView extends Component<LoginProps, LoginState> {
	
	render(): React.ReactNode {
		return ( 
			<FlexBox height='100%' justify='flex-start'>
				<SideBar width='27%' src='assets/loginimg.PNG'>
					<SideBar.Title>Discover the world’s top Companies & Developers.</SideBar.Title>
				</SideBar>
				<FlexBox width='65%'>
					<FormFlexBox flexDirection='column'>
						<LoginFlexBox flexDirection='column'>
							<Headline size='md' variant='h2' >Log In to staak</Headline>
							<LoginForm />
							<FlexBoxPadding>
								<SimpleLink size='xs'>Forgot your password?</SimpleLink>
							</FlexBoxPadding>
							<Divider width='350px' text='OR' />
							<ConnectionOptions />
						</LoginFlexBox>
						<AuthFooter title="Don't have a Staak account?" link='Sign Up Now' to='/register/company' />
					</FormFlexBox>
				</FlexBox>
			</FlexBox>
		)
	}
}
export default LoginView;
