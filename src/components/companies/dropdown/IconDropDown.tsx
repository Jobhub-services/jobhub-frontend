import { IconDropDownProps } from "@/models/component";
import styled from 'styled-components';
import Colors from "staak-ui/lib/esm/styles/colors.module.scss"
import { DropDown, NotificationIcon } from "staak-ui";

const StyledIcon = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    border-radius:50%;
    transition-duration: 0.4s;
    cursor:pointer;
    background-color:${Colors.BLACK_13};
    fill:${Colors.BLACK_4};
    &:hover {
        background-color:${Colors.PURPLE_1};
        fill:${Colors.PURPLE_BASE};
    }

`
const IconDropDown = (props: IconDropDownProps) => {
    return (
        <DropDown>
            <DropDown.Title>
                <StyledIcon>
                    <NotificationIcon width='25px' height='25px'  color='inherit'/>
                </StyledIcon>
            </DropDown.Title>
        </DropDown>
    )
}

export default IconDropDown