import { StandardProps } from "@/models/component/app.interface"

export type LoginProps = {};
export type LoginState = {};

export interface RegisterProps  {
    for:'developer' | 'company'
}
export type RegisterState = {};


export interface SideBarProps extends StandardProps {
    width?:string
    icon?:string | React.ReactNode
    src?:string | undefined
    color?: 'first' | 'second'
}

export interface AuthFooterProps extends StandardProps{
    title?:string
    link?:string
    to:string
}


