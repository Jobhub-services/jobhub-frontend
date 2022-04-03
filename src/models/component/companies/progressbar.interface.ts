import { StandardProps } from '@/models/component/app.interface';

type StepItem = {name:string,valid?:boolean,active?:boolean}

export interface StepProgressProps extends StandardProps{
    items?:StepItem[]
    active?:boolean
    valid?:boolean
    direction?:'horizontal' | 'vertical'
}