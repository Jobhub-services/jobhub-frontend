import React from 'react'
import { InfoCardProps } from "@/models/component/public.interface"
import { FlexBox, Headline } from "staak-ui"
import styled from 'styled-components'
import { CardFontSize } from '@/constants'
import { AppColors } from '@/constants'
import { StandardProps } from '@/models'

const StyledImg = styled.img`
    border-radius: 8px;
    box-shadow: 0px 0px 30px -15px grey;
    transition-duration : 0.4s;
` 
const StyledParagraph = styled.p<InfoCardProps>`
    text-align: ${props=>props.contentAlign};
    font-size:${props=>CardFontSize[props.contentSize!]};
    color: ${props=>AppColors[props.contentColor!]?.primary};

`
const StyledDiv = styled.div<InfoCardProps>`
    width:${props=>props.width};
    
`
const InfoCard = (props:InfoCardProps)=>{
    const header = React.Children.map(props.children,(child)=>child?.type?.displayName ==='Header'?child:null)
    const footer = React.Children.map(props.children,(child)=>child?.type?.displayName==='Footer'?child:null)
    const body = React.Children.map(props.children,(child)=>child?.type?.displayName==='Body'?child:null)
    let icon:React.ReactNode = undefined
    if(props.src){
        icon = <><StyledImg width={350} height={420} src={props.src} alt={props.src}/></>
    }
    else if(props.icon){
        icon = props.icon
    }

    return (
        <StyledDiv width={props.width}>
            <FlexBox>
            {icon}
            </FlexBox>
            <div>
                <Headline variant={props.titleVariant} textAlign={props.titleAlign} color={props.titleColor} size={props.titleSize}>{header}</Headline>
                <StyledParagraph contentAlign={props.contentAlign} contentColor={props.contentColor} contentSize={props.contentSize} >{body}</StyledParagraph>
                <div>{footer}</div>
            </div>
        </StyledDiv>
    )
}
const Header= (props:StandardProps) => <>{props.children}</>
Header.displayName='Header'
InfoCard.Header = Header

const Footer= (props:StandardProps)=><>{props.children}</>
Footer.displayName='Footer'
InfoCard.Footer = Footer

const Body = (props:StandardProps)=><>{props.children}</>
Body.displayName='Body'
InfoCard.Body = Body


InfoCard.defaultProps = {
    titleSize:'sm',
    contentSize:'sm',
    contentAlign:'justify',
    titleVariant:'h1'
}
export default InfoCard