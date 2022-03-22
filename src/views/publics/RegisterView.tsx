import { FlexBox,Headline,TabPane } from "staak-ui"
import { SideBar,AuthFooter, CompanyForm , DeveloperForm} from '@/components';
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import {  RegisterProps } from "@/models/component";

const MainFlexBox = styled(FlexBox)`
	padding:0px !important;
`

const FormFlexBox = styled(FlexBox)`
	background-color:white;
	box-shadow: 0px 0px 20px -15px black;
	border-radius: 8px;
`
const SignUpFlexBox = styled(FlexBox)`
	background-color:white;
    padding: 10px 10px !important;
`
const RegisterView = (props:RegisterProps) => {
    const navigate = useNavigate()
    function changeTab(name:string){
        navigate(`/register/${name}`,{replace:true})
    }
    return (
        <MainFlexBox height='100%' justify='flex-start'>
			<SideBar color='second' width='27%' src='/assets/loginimg.PNG'>
				<SideBar.Title>Discover the world’s top Companies & Developers.</SideBar.Title>
			</SideBar>
			<FlexBox width='65%' flexDirection='column'>
				<Headline size='md' variant='h2' >Sign Up to staak</Headline>
				<FormFlexBox flexDirection='column'>
					<TabPane activeItem={props.for} onChange={changeTab}>
						<TabPane.Pane name='company' title='Company'>
							<SignUpFlexBox>
								<CompanyForm />
							</SignUpFlexBox>
						</TabPane.Pane>
						<TabPane.Pane name='developer' title='Developer'>
							<SignUpFlexBox flexDirection='column'>
								<DeveloperForm />
							</SignUpFlexBox>
						</TabPane.Pane>
					</TabPane>
					<AuthFooter title="Already have a Staak account?" link='Log In Now' to='/login' />
				</FormFlexBox>
			</FlexBox>
		</MainFlexBox>
    )
}


export default RegisterView