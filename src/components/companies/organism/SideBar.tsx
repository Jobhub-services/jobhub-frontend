import {Logo} from '@/components/common'
import { CompaniesOverview } from "@/models/component"
import styled from "styled-components"
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'
import {FlexBox, MessageIcon, NavItem, ScheduleIcon, TalentIcon,JobIcon,HealthIcon,SettingIcon,InvitationIcon,ApplicantIcon} from 'staak-ui'


const SyledContainer = styled.div<CompaniesOverview.SideBarProps>`
    border-right:1px solid ${Colors.BLACK_12};
    background-color: ${Colors.BLACK_13};
    width: ${props=>props.width};
    height:100%;
    padding: 0px 10px 0px 0px;
`
const SideBar = (props:CompaniesOverview.SideBarProps)=>{
    const widthItems = '95%'
    return (
        <SyledContainer width={props.width}>
            <h1 style={{color:Colors.PURPLE_BASE,paddingLeft:'15px'}}>{"</> staak"}</h1>
            <FlexBox flexDirection='column' align='flex-start'>
                <NavItem icon={<HealthIcon />} width={widthItems} >
                    <NavItem.Content>Overview</NavItem.Content>
                </NavItem>
                <NavItem icon={<JobIcon />} width={widthItems}>
                    <NavItem.Content>Jobs</NavItem.Content>
                </NavItem>
                <NavItem icon={<TalentIcon />} width={widthItems} active={true}>
                    <NavItem.Content>Talents</NavItem.Content>
                </NavItem>
                <NavItem icon={<ApplicantIcon />} width={widthItems}>
                    <NavItem.Content>Applicants</NavItem.Content>
                </NavItem>
                <NavItem icon={<MessageIcon />} width={widthItems}>
                    <NavItem.Content>Messages</NavItem.Content>
                </NavItem>
                <NavItem icon={<InvitationIcon />} width={widthItems}>
                    <NavItem.Content>Invitations</NavItem.Content>
                </NavItem>
                <NavItem icon={<ScheduleIcon />} width={widthItems}>
                    <NavItem.Content>Schedule</NavItem.Content>
                </NavItem>
                <NavItem icon={<SettingIcon />} width={widthItems}>
                    <NavItem.Content>Assements</NavItem.Content>
                </NavItem>
                <NavItem icon={<SettingIcon />} width={widthItems}>
                    <NavItem.Content>Settings</NavItem.Content>
                </NavItem>
            </FlexBox>
        </SyledContainer>
    )
}


SideBar.defaultProps = {
    width:'13%'
}
export default SideBar