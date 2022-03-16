import React from 'react'
import { Logo } from "@/components/common"
import { SideBarProps, StandardProps } from "@/models"
import { FlexBox, Headline } from "staak-ui"
import styled from "styled-components"
import { SideBarColors } from '@/constants';

const StyledContainer = styled(FlexBox)`
    background-color:${(props:SideBarProps)=>SideBarColors[props.color!]};
    height:100%;
`
const StyledFlexBox = styled(FlexBox)`
    padding: 70px !important;
`
const SideBar = (props:SideBarProps)=>{
    return (
        <StyledContainer width={props.width} color={props.color} flexDirection='column' justify='flex-start'>
            <StyledFlexBox flexDirection='column' align='flex-start'>
                <Logo />
                <Headline color='white' size='xs'>{props.children}</Headline>
            </StyledFlexBox>
            <FlexBox>
                {props.src?<img width='100%' src={props.src} alt={props.src} />:<img src={props.src} alt={props.src} />}
            </FlexBox>
        </StyledContainer>
    )
}
const Title = (props:StandardProps)=><>{props.children}</>
SideBar.Title = Title


SideBar.defaultProps = {
    color:'first'
}
export default SideBar