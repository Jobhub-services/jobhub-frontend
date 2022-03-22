import styled from 'styled-components'
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'
import { CompaniesOverview } from "@/models/component"
import { SearchInput } from 'staak-ui'
import { Button } from 'staak-ui'
import { FlexBox } from 'staak-ui'

const SyledContainer = styled.div<CompaniesOverview.HeaderBarProps>`
    border-bottom:1px solid ${Colors.BLACK_12};
    width: ${props=>props.width};
    height: 100%;
    padding: 10px 0px;
`
const StyledFlexContainer = styled(FlexBox)`
    padding: 0px 10px !important;
`
const HeaderBar = (props:CompaniesOverview.HeaderBarProps)=>{
    return(
        <SyledContainer width={props.width}>
            <StyledFlexContainer width='98%' justify='space-between'>
                <SearchInput />
                <Button>Create New Job</Button>
            </StyledFlexContainer>
        </SyledContainer>
    )
}
HeaderBar.defaultProps = {
    width:'100%'
}
export default HeaderBar