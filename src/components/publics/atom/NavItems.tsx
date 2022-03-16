import { StandardProps } from '@/models'
import {FlexBox,DropDown ,DropDownItem} from 'staak-ui'

const NavItems = (props:StandardProps)=>{
    return(
        <>
            <FlexBox width="550px" justify='space-between' size='lg' >
                <DropDown sizeTitle='md' sizeItems='md' trigger="hover"  title="Find Work">
                    <DropDownItem >Find work for your skills</DropDownItem>
                    <DropDownItem>Taking tests</DropDownItem>
                </DropDown>
                <DropDown sizeTitle='md' sizeItems='md' trigger="hover"  title="Find Talent">
                    <DropDownItem>Find the right talent</DropDownItem>
                    <DropDownItem>Post jobs and hire pro</DropDownItem>
                </DropDown>
                <DropDownItem size='md' isItem={false} >Browse companies</DropDownItem>
                <DropDownItem size='md' isItem={false} >Why staak</DropDownItem>
            </FlexBox>
        </>
    )

}
export default NavItems