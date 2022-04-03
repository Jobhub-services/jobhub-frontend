import styled from "styled-components"
import { AppColors } from '@/constants'


const SLabel = styled.label`
    display:inline-block;
    margin: 5px 0px;
`
const ErrorSpan = styled.span`
    display:inline-block;
    color: ${AppColors['red'].primary};
    margin-top:5px;
`

export {SLabel,ErrorSpan}