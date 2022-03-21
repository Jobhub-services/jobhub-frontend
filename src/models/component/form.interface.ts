import { TypeAttributes } from '@/types/common';
import { StandardProps } from "@/models/component/app.interface"

export interface InputProps extends StandardProps {
    children?: JSX.Element | JSX.Element[] | React.ReactNode
    name: string
    type?: 'text' | 'email' | 'password'
    width?: string
    startIcon?: React.ReactNode
    placeholder?: string
    required?:boolean
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export interface CheckBoxProps extends StandardProps {
    name?:string
}

export interface FormProps extends StandardProps {
    children?: JSX.Element | JSX.Element[]
    jusitfy?: TypeAttributes.Justify
    align?: TypeAttributes.Align
    onChange?:(event:React.ChangeEvent<HTMLInputElement>,value:string)=>void
    onSubmit?:(event:React.SyntheticEvent)=>void
    onBlur?: (event:React.ChangeEvent<HTMLInputElement>,value:string)=>void
}

export interface ButtonProps extends StandardProps {
    type?: 'button' | 'submit'
    width?: string
}