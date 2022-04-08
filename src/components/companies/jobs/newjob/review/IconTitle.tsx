import styled from "styled-components"
import { FlexBox } from "staak-ui"
import { IconTitleProps } from "@/models/component"
import { Sh4 } from "./jobReview.styles"

const STitle = styled(FlexBox)`
    gap:10px;
    margin-top:5px;
    justify-content:flex-start;
`

const IconTitle = (props:IconTitleProps)=>{
    return (
        <STitle justify='flex-start'>
            {props.icon&&<img src={props.icon} alt={`${props.icon}`} width={20} height={20} />}
            <Sh4>{props.title}</Sh4>
        </STitle>
    )
}

export default IconTitle