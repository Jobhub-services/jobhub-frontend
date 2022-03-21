import React from 'react'
import {Input} from 'staak-ui'
import { InputProps } from '@/models/component'
import styled from 'styled-components'
import { AppColors } from '@/constants'
const StyledLabel = styled.label`
    display:inline-block;
    margin: 5px 0px;
`
const StyledSpan = styled.span`
    display:inline-block;
    color: ${AppColors['red'].primary};
    margin-top:5px;
`
const InputField = (props:InputProps)=>{
    let wrapper = undefined
    if(React.isValidElement(props.children)) wrapper=props.children.props
    
    return (
        <div>
            <StyledLabel>{wrapper?wrapper.children:props.children}</StyledLabel>
            <Input onChange={props.onChange}  startIcon={props.startIcon} width={props.width} name={props.name} type={props.type} placeholder={props.placeholder} required={props.required} />
            { wrapper && wrapper.error &&  <StyledSpan>{wrapper.message}</StyledSpan>}
        </div>
    )
}

export default InputField