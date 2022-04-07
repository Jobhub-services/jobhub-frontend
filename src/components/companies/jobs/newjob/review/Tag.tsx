import styled from "styled-components"
import { StandardProps } from "@/models/component"
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'

const STag = styled.div`
    display:flex;
    align-items:center;
    border-radius:5px;
    gap:5px;
    padding:5px;
    background-color:${Colors.GRAY_3};
    font-size:0.842rem;
    color:${Colors.BLACK_4};
    & span:last-child {
        cursor:pointer;
    }
`
const Tag = (props:StandardProps)=>{
    
    return (
        <STag>
            <span>{props.children}</span>
        </STag>
    )
}

export default Tag