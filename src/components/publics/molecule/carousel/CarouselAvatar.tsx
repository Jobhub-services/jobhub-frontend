import React,{useState} from 'react'
import { CarouselProps,CarouselItemProps } from '@/models/component/public.interface'
import {AvatarCard} from '@/components/publics/atom'
import { FlexBox } from "staak-ui"
import { AppColors } from '@/constants'
import styled,{css} from 'styled-components'
import { StandardProps } from '@/models'

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
const StyledDiv = styled.div`
    display:flex;
    align-items:center;
    jusitfy-content:center;
    padding: 0px 40px;
    width:65%;
`
const StyledContainer = styled(FlexBox)`
    
    & .carousel{
        margin-left:-60px;
    }
    .carousel:last-child{
        margin-left:0px;
    }
`
const StyledAvatarCard = styled(AvatarCard)`
    z-index: ${(props:CarouselItemProps)=>props.order};
`
const CarouselAvatar = (props:CarouselProps)=>{
    const [currentItem,setCurrentItem] = useState(0)
    const [orderItems,setOrderItems] = useState(React.Children.map(props.children,(child)=>child?.props.order))
    
    const items = React.Children.map(props.children,(child)=>child?.type?.displayName==='Item'?child:null)
    function changeActiveItem(event:React.SyntheticEvent,key:number){
        if(currentItem!==key){
            setCurrentItem(key)
            const tmp = orderItems?.map(elem=>(Math.abs(key-currentItem)+elem)%(items?.length!))
            setOrderItems(tmp)
        }
    }
    function filterCurrentItem(elem:JSX.Element){
        const newOrder = orderItems![elem?.props.index!]
        if(newOrder===0){
            return React.cloneElement(elem,{active:true,order:newOrder})
        }
        return null
    }
    function displayOtherItems(elem:JSX.Element){
        const newOrder = orderItems![elem.props.index!]
        if(newOrder!==0){
            return React.cloneElement(elem,{active:false,order:newOrder})
        }
    }
    function sortItems(first:JSX.Element|undefined,second:JSX.Element|undefined){
        if(first?.props.order>second?.props.order) return -1
        if(first?.props.order<second?.props.order) return 1
        return 0
    }
    
    return (
        <div>
            <FlexBox height='350px' flexDirection='row-reverse'>
                <StyledDiv>
                    {items?.map(filterCurrentItem)}
                </StyledDiv>
                <StyledContainer flexDirection='row-reverse'>
                    {items?.map(displayOtherItems).sort(sortItems)}
                </StyledContainer>
            </FlexBox>
            <FlexBox flexDirection='row-reverse'>
                {items?.map((elem,index)=><StyledSpan active={currentItem===index} key={index} onClick={(event)=>changeActiveItem(event,index)} />)}
            </FlexBox>
        </div>
    )
}

const Item= (props:CarouselItemProps)=>{
    let title:JSX.Element[]|undefined = undefined,
        content:JSX.Element[]|undefined = undefined

    if(props.active){
        title = React.Children.map(props.children,(child)=>child?.type?.displayName==='Title'?child:null)
        content = React.Children.map(props.children,(child)=>child?.type?.displayName==='Content'?child:null)
    }
    return ( 
        <StyledAvatarCard align='flex-start' order={props.order} className='carousel' key={props?.index} src={props.src} imgSize={props.active?250:100+props.order!*30}>
            {title&&title.length>0?<AvatarCard.Title size={props.titleSize}>{title}</AvatarCard.Title>:<></>}
            {content&&content.length>0?<AvatarCard.Content textAlign='justify' size={props.contentSize}>{content}</AvatarCard.Content>:<></>}
        </StyledAvatarCard>
    )
}
const Title = (props:StandardProps)=><>{props.children}</>
const Content =(props:StandardProps)=><>{props.children}</>
Title.displayName = 'Title'
Content.displayName = 'Content'
Item.Title = Title
Item.Content = Content

Item.displayName = 'Item'
CarouselAvatar.Item = Item

export default CarouselAvatar