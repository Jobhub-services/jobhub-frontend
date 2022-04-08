import React from 'react';
import { StandardProps } from '@/models/component/app.interface';


export interface AddNewJobProps extends StandardProps {
    onPreviouse?: (event:React.SyntheticEvent)=>void
    onNext?: (event:React.SyntheticEvent)=>void
}

export interface AddNewJobState {
    currentStep?:number
    validSteps?:boolean[]
}


export interface IconTitleProps extends StandardProps {
    title?:string,
    icon?:string
}

export interface JobReviewProps extends AddNewJobProps {
    
}
 