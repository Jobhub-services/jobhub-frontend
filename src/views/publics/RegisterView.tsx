import React, { Component } from 'react';
import { RegisterProps, RegisterState } from '@/models/component/auth.interface';
import { SideBar } from '@/components';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
const FormFlexBox = styled(FlexBox)`
	background-color:white;
	box-shadow: 0px 0px 20px -15px black;
	border-radius: 8px;
`
class RegisterView extends Component<RegisterProps, RegisterState> {
	render(): React.ReactNode {
		return (
			<FlexBox height='100%' justify='flex-start'>
				<SideBar color='second' width='27%' src='assets/loginimg.PNG'>
					<SideBar.Title>Discover the world’s top Companies & Developers.</SideBar.Title>
				</SideBar>
				<FlexBox width='65%'>
					<FormFlexBox flexDirection='column'>
					</FormFlexBox>
				</FlexBox>
			</FlexBox>
		)
	}
}
export default RegisterView;
