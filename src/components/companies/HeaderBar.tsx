import styled from 'styled-components'
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'
import { CompaniesOverview } from "@/models/component"
import { SearchInput,FlexBox,Button } from 'staak-ui'
import { PlusIcon } from 'staak-ui'
import { IconDropDown,AvatarDropDown } from '@/components/companies/dropdown'
import {useNavigate} from 'react-router-dom'

const SyledContainer = styled.div<CompaniesOverview.HeaderBarProps>`
    position:sticky;
    top:0;
    border-bottom:1px solid ${Colors.BLACK_12};
    width: ${props=>props.width};
    height: 50px;
    padding: 10px 0px;
    background:${Colors.WHITE};
`
const StyledFlexContainer = styled(FlexBox)`
    padding: 0px 10px 0px 30px !important;
`
const StyledNewJobButton = styled.span`
    margin-right:35px;
`
const HeaderBar = (props:CompaniesOverview.HeaderBarProps)=>{
    const navigate = useNavigate() 
    return(
        <SyledContainer width={props.width}>
            <StyledFlexContainer width='95%' justify='space-between'>
                <SearchInput placeholder='Search Talents' width='350px' />
                <FlexBox justify='space-between'>
                    <StyledNewJobButton><Button startIcon={<PlusIcon />} onClick={(event:React.SyntheticEvent)=>{navigate('jobs/new',{replace:true})}}>Create New Job</Button></StyledNewJobButton>
                    <FlexBox width='160px' justify='space-between'>
                        <IconDropDown />
                        <AvatarDropDown />
                    </FlexBox>
                </FlexBox>
            </StyledFlexContainer>
        </SyledContainer>
    )
}
HeaderBar.defaultProps = {
    width:'100%'
}
export default HeaderBar