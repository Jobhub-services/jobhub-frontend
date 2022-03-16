import { TypeAttributes } from "@/types/publics/common";
import { StandardProps } from "@/models/component/app.interface"

export interface SectionProps extends StandardProps {
    width?: string
}
export interface PictureCardProps extends StandardProps {
    src?: string
}

export interface InfoCardProps extends StandardProps {
    children?: JSX.Element | JSX.Element[]
    titleSize?: TypeAttributes.Size
    titleColor?: TypeAttributes.Color
    titleAlign?: TypeAttributes.TextAlign
    titleVariant?: 'h1' | 'h2'
    contentSize?: TypeAttributes.Size
    contentColor?: TypeAttributes.Color
    contentAlign?: TypeAttributes.TextAlign
    width?: string
    src?: string | undefined
    icon?: React.ReactNode
}
export interface AvatarCardProps extends StandardProps {
    children?: JSX.Element | JSX.Element[]
    src?: string | undefined
    direction?: TypeAttributes.Direction
    imgSize?: number
    icon?: React.ReactNode
    align?:TypeAttributes.Align
}

export interface AvatarCardItemProps extends StandardProps{
    textAlign?:TypeAttributes.TextAlign
    size?:TypeAttributes.Size
    marginTop?:string
    marginBottom?:string
    color?:TypeAttributes.Color
}
export interface CarouselProps extends StandardProps {
    children?: JSX.Element | JSX.Element[]
    active?: boolean
    index?: number
    color?: TypeAttributes.Color
    width?:string
}

export interface CarouselItemProps extends CarouselProps{
    contentSize?: TypeAttributes.Size
    titleSize?: TypeAttributes.Size
    order?:number
    src?:string
}
