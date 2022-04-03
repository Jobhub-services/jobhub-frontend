import { FlexBox,SimpleLink } from "staak-ui"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { AuthFooterProps } from "@/models/component"
const SignUpFlexBox = styled(FlexBox)`
	background: #f9f9f9;
	padding: 10px 0px !important;
`
const StyledDiv = styled.div`
	margin-left:20px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`
const AuthFooter = (props:AuthFooterProps)=>{
    return (
        <SignUpFlexBox width='100%' flexDirection='column' align='flex-start' justify='flex-start'>
            <StyledDiv>
                <div>{props.title}</div>
                <Link to={props.to}>
                    <SimpleLink>{props.link}</SimpleLink>
                </Link>
            </StyledDiv>
        </SignUpFlexBox>
    )
}

export default AuthFooter