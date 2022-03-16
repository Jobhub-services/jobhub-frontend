import { StandardProps } from "@/models/component/app.interface"

export interface InputProps extends StandardProps  {
    name:string
    type?: 'text'|'email'|'password'
    width?:string
    startIcon?:React.ReactNode
}

export interface FormProps extends StandardProps {
    children?:JSX.Element | JSX.Element[]
}

export interface ButtonProps extends StandardProps{
    type?:'button'|'submit'
    width?:string
}