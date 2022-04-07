import { Button ,IconButton} from "staak-ui"
import styled from "styled-components"
import Colors from "staak-ui/lib/esm/styles/colors.module.scss"

export const SButton = styled(Button)`
    background-color:transparent !important;
    padding-left:0px !important;
`
export const SIcon = styled(IconButton)`
    border:1px solid ${Colors.BLACK_4} !important;
    border-radius:8px !important;
    padding: 2px !important;
    transition-duration:.5s;
    fill:${Colors.BLACK_4};
    &:hover{
        fill:${Colors.RED_BASE} !important;
        border:1px solid ${Colors.RED_BASE} !important;
        background-color:${Colors.RED_CLEAR_5} !important;
    }
`