import { StandardProps } from "@/models/component"
import { FlexBox,IconButton } from "staak-ui"
import { GoogleLogo,AppleLogo,FaceBookLogo,LinkedinLogo } from "staak-ui"
import styled from "styled-components"
const FlexBoxPadding = styled(FlexBox)`
	padding: 0px 20px 0px 20px !important;
`
const ConnectionOptions = (props:StandardProps)=>{
    return (
        <FlexBoxPadding width='100%' justify='space-between'>
            <IconButton><GoogleLogo /></IconButton>
            <IconButton><AppleLogo /></IconButton>
            <IconButton><FaceBookLogo /></IconButton>
            <IconButton><LinkedinLogo /></IconButton>
        </FlexBoxPadding>
    )
}

export default ConnectionOptions