import { TypeAttributes } from '@/types/publics/common';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'

const CardFontSize:{[key in TypeAttributes.Size]:string} = {
    xs:'10px',
    sm:'14px',
    md:'18px',
    lg:'22px',
    xlg:'24px'
}
const AppColors:{[key in TypeAttributes.Color]:{primary:string,secondry?:string,third?:string}} = {
    red:{primary:Colors.PURPLE_BASE},
    purple: {primary:Colors.PURPLE_BASE,secondry:Colors.PURPLE_2,third:Colors.PURPLE_3}, 
    blue: {primary:Colors.PURPLE_BASE}, 
    black: {primary:'black'}, 
    white: {primary:Colors.WHITE},
    gray:{primary:Colors.GRAY_BASE}
}

const SideBarColors:{[key in 'first'| 'second']:string}={
    first: Colors.PURPLE_BASE,
    second: Colors.PURPLE_4,
}
export {CardFontSize,AppColors,SideBarColors}