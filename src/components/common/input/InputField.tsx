import React from 'react'
import {Input} from 'staak-ui'
import { InputProps } from '@/models/component'
import { SLabel,ErrorSpan } from './input.styles'



const InputField = (props:InputProps)=>{
    let wrapper = undefined
    if(React.isValidElement(props.children)) wrapper=props.children.props
    
    return (
        <div>
            <SLabel>{wrapper?wrapper.children:props.children}</SLabel>
            <Input onChange={props.onChange}  startIcon={props.startIcon} width={props.width} name={props.name} type={props.type} placeholder={props.placeholder} required={props.required} />
            { wrapper && wrapper.error &&  <ErrorSpan>{wrapper.message}</ErrorSpan>}
        </div>
    )
}

export default InputField