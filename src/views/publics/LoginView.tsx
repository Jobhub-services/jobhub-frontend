import React, { Component } from 'react';
import { LoginProps, LoginState } from '@/models/component/auth.interface';
import {SideBar} from '@/components';
import { AppleLogo, Divider, FaceBookLogo, FlexBox,GoogleLogo,Headline,LinkedinLogo,SimpleLink,IconButton } from 'staak-ui';
import { LoginForm } from '@/components/publics/organism/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FlexBoxPadding = styled(FlexBox)`
	padding: 15px 20px !important;
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
const SignUpFlexBox = styled(FlexBox)`
	background: #f9f9f9;
	padding: 10px 0px !important;
`
const StyledDiv = styled.div`
	margin-left:20px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
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
							<FlexBoxPadding width='100%' justify='space-between'>
								<IconButton><GoogleLogo /></IconButton>
								<IconButton><AppleLogo /></IconButton>
								<IconButton><FaceBookLogo /></IconButton>
								<IconButton><LinkedinLogo /></IconButton>
							</FlexBoxPadding>
						</LoginFlexBox>
						<SignUpFlexBox width='100%' flexDirection='column' align='flex-start' justify='flex-start'>
							<StyledDiv>
								<div>Don't have a Staak account?</div>
								<Link to='/register'>
									<SimpleLink>Sign Up Now</SimpleLink>
								</Link>
							</StyledDiv>
						</SignUpFlexBox>
					</FormFlexBox>
				</FlexBox>
			</FlexBox>
		)
	}
}
export default LoginView;
