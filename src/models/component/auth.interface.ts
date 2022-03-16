import { StandardProps } from "@/models/component/app.interface"

export type LoginProps = {};
export type LoginState = {};

export type RegisterProps = {};
export type RegisterState = {};

export type HomeProps = {};
export type HomeState = {};


export interface SideBarProps extends StandardProps {
    width?:string
    icon?:string | React.ReactNode
    src?:string | undefined
    color?: 'first' | 'second'
}


