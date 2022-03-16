import {Input} from 'staak-ui'
import { InputProps } from '@/models'
import styled from 'styled-components'
const StyledLabel = styled.label`
    display:inline-block;
    margin: 5px 0px;
`
const InputField = (props:InputProps)=>{
    return (
        <div>
            <StyledLabel>{props.children}</StyledLabel>
            <Input startIcon={props.startIcon} width={props.width} name={props.name} type={props.type} />
        </div>
    )
}

export default InputField