import React,{useState} from 'react'
import styled,{css} from 'styled-components'
import {FlexBox,Headline} from 'staak-ui'
import { CarouselProps } from '@/models/component/public.interface'
import { AppColors } from '@/constants'
import { StandardProps } from '@/models'

/* here start styles for CarouselCard components */
const StyledDiv = styled.div<CarouselProps>`
    border-radius: 8px;
    box-shadow: 0px 0px 50px -30px gray;
    width:${props=>props.width};
    background-color : ${props=>AppColors[props.color!].primary};
`
const StyledSpan = styled.span<CarouselProps>`
    display: inline-block;
    width:12px;
    height:12px;
    ${props=>props.active?css`
        background-color ${AppColors['purple'].primary};
    `:css`
        border:2px solid ${AppColors['purple'].primary};
    `}
    
    border-radius:50%;
    cursor:pointer;
    transition-duration: 0.5s;
    margin-left:5px;
    margin-right:5px;
    &:hover {
        background-color:${AppColors['purple'].primary};
        opacity: .5;
    }
`
const StyledPages = styled(FlexBox)`
    padding-top: 30px !important;
`

/* here start styles for Item components */

const StyledContent = styled(FlexBox)`
    padding-right: 100px !important;
    padding-left: 20px !important;
`
const StyledParagraph = styled.p`
    font-size: 18px;
    text-align:justify;
`
const StyledAvatar = styled.div`
    padding: 10px 10px;
`
const StyledHeadline = styled(Headline)`
    padding: 20px 30px;
`

/* CarpuselCard component start definition */

const CarouselCard = (props:CarouselProps)=>{
    const [currentItem,setCurrentItem] = useState(0)
    const items = React.Children.map(props.children,(child)=>child?.type?.displayName==='Item'?child:null)
    console.log(items)
    function changeActiveItem(event:React.SyntheticEvent,key:number){
        setCurrentItem(key)
    }
    return (
        <StyledDiv {...props}>
            <StyledPages size='lg' flexDirection='row-reverse' >
                {items?.map((elem:JSX.Element,index:number)=><StyledSpan active={currentItem===index} key={index} onClick={(event)=>changeActiveItem(event,index)} />)}
            </StyledPages>
            <div>
                {items?.map((elem:JSX.Element,index:number)=>{
                    if(currentItem===index) return elem
                    return null
                })}
            </div>
        </StyledDiv>
    )
}

/* Item component start definition */

const Item = (props:CarouselProps)=> {
    const title = React.Children.map(props.children,(child)=>child?.type?.displayName==='Title'?child:null)
    const description = React.Children.map(props.children,(child)=>child?.type?.displayName==='Description'?child:null)
    const avatar = React.Children.map(props.children,(child)=>child?.type?.displayName==='Avatar'?child:null)
    return (
        <FlexBox>
            <StyledHeadline size='md' textAlign='center'>{title}</StyledHeadline>
            <StyledContent align='flex-start' flexDirection='column'>
                <StyledParagraph>{description}</StyledParagraph>
                <StyledAvatar>{avatar}</StyledAvatar>
            </StyledContent>
        </FlexBox>
    )
}




const Title = (props:StandardProps)=><>{props.children}</>
Title.displayName = 'Title'

const Description = (props:StandardProps)=><>{props.children}</>
Description.displayName = 'Description'

const Avatar = (props:StandardProps)=><>{props.children}</>

Avatar.displayName = 'Avatar'
Item.Title = Title
Item.Description = Description
Item.Avatar = Avatar
Item.displayName = 'Item'
CarouselCard.Item = Item

CarouselCard.defaultProps = {
    color:'white'
}
export default CarouselCard