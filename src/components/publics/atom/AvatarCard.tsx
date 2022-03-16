import React from 'react'
import { AvatarCardProps,AvatarCardItemProps } from "@/models/component/public.interface"
import { FlexBox } from "staak-ui"
import styled from 'styled-components'
import { AppColors,CardFontSize } from '@/constants'

/* define component style*/
//================================================================================================================//
const StyledImg = styled.img<AvatarCardProps>`
    box-shadow: 0px 0px 50px -20px gray;
    border-radius:50%;
    transition-duration: 0.4s;
`
const StyledDiv = styled(FlexBox)<AvatarCardProps>`
    &:hover ${StyledImg} {
        box-shadow: 0px 0px 50px -10px gray;
    }
`
const StyledContent = styled.div`
    width:80%;
    padding-left:15px;
`
const StyledH3 = styled.h3<AvatarCardItemProps>`
    margin-bottom: ${props=>props.marginBottom};
    font-size:${props=>CardFontSize[props.size!]};
    color:${props=>AppColors[props.color!].primary};
`
const SyledP = styled.p<AvatarCardItemProps>`
    margin-top:${props=>props.marginTop};
    font-size:${props=>CardFontSize[props.size!]};
    color:${props=>AppColors[props.color!].primary};
    text-align: ${props=>props.textAlign}
`
//================================================================================================================//
const AvatarCard = (props:AvatarCardProps)=>{
    const title = React.Children.map(props.children,(child)=>child?.type?.displayName==='Title'?child:null)
    const content = React.Children.map(props.children,(child)=>child?.type?.displayName==='Content'?child:null)
    return (
        <StyledDiv {...props} flexDirection={props.direction} justify='flex-start' className={props.className}>
            <div>
                {props.icon?props.icon
                :<StyledImg  width={props.imgSize} height={props.imgSize} src={props.src} alt={props.src} />}
            </div>
            {(title?.length!>0||content?.length!>0)&&<StyledContent >
                {title}
                {content}
            </StyledContent>}
        </StyledDiv>
    )
}

//============================================= define subcomponents ====================================================//
const Title  = (props:AvatarCardItemProps)=>{
    return (
        <StyledH3 size={props.size!} color={props.color} marginBottom={props.marginBottom}>{props.children}</StyledH3>
    )
}
const Content = (props:AvatarCardItemProps)=>{
    return (
        <SyledP textAlign={props.textAlign} size={props.size!} color={props.color} marginTop={props.marginTop} >{props.children}</SyledP>
    )
}

//============================================= assign props to components =================================================//
Title.defaultProps = {
    marginBottom:'0px',
    color:'black'
}
Content.defaultProps = {
    marginTop:'10px',
    color:'black'
}
Title.displayName = 'Title'
Content.displayName = 'Content'

AvatarCard.Title = Title
AvatarCard.Content = Content

AvatarCard.defaultProps = {
    imgSize:250,
    
}

export default AvatarCard