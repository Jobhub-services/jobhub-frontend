import React from 'react'
import InputField from "@/components/common/InputField"
import { InputProps,FormProps, ButtonProps } from "@/models"
import { Button, FlexBox } from 'staak-ui'
import styled from 'styled-components'
const StyledContainer = styled.div`
    margin-bottom:15px;
`
const Form = (props:FormProps)=>{
    const inputs = React.Children.map(props.children,(child)=>child?.type?.displayName==='Input'?child:null)
    const submit = React.Children.map(props.children,(child)=>child?.type?.displayName==='Submit'?child:null)
    function submitForm(){

    }
    return (
        <form method='post' onSubmit={submitForm}>
            <FlexBox flexDirection='column'>
                {inputs?.map((elem,index)=>{
                    return <StyledContainer key={index}>{elem}</StyledContainer>
                })}
            </FlexBox>
            <FlexBox>
                {submit}
            </FlexBox>
        </form>
    )
}

const FormInput = (props:InputProps)=>{
    return(
        <InputField startIcon={props.startIcon} width={props.width} name={props.name}>{props.children}</InputField>
    )
}
const SubmitButton = (props:ButtonProps)=>{
    return (
        <Button type='submit' width={props.width} >{props.children}</Button>
    )
}
SubmitButton.displayName = 'Submit'
Form.Submit = SubmitButton

FormInput.displayName = 'Input'
Form.Input = FormInput


export default Form