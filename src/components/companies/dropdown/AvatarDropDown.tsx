import { AvatarDropDownProps } from "@/models/component";
import styled from 'styled-components';
import Colors from "staak-ui/lib/esm/styles/colors.module.scss"
import { DropDown, FlexBox } from "staak-ui";

const StyledIcon = styled.img`
    border-radius:50%;
    transition-duration: 0.4s;
    cursor:pointer;

`
const AvatarDropDown = (props:AvatarDropDownProps)=>{
    return (
        <DropDown trigger='hover' listPosition='right'>
            <DropDown.Title>
                <FlexBox>
                    <StyledIcon width={40} src="/assets/avatar2.JPG" />
                    <span>Google</span>
                </FlexBox>
            </DropDown.Title>
            <DropDown.Item>My Profile</DropDown.Item>
            <DropDown.Item>Account Settings</DropDown.Item>
            <DropDown.Item>Log Out</DropDown.Item>
        </DropDown>
    )
}

export default AvatarDropDown