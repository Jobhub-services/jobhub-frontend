import React from 'react';
import { StandardProps } from '@/models/component/app.interface';


export interface BasicDetailsProps extends StandardProps {
    onPreviouse?: (event:React.SyntheticEvent)=>void
    onNext?: (event:React.SyntheticEvent)=>void
}

export interface AddNewJobProps extends StandardProps {}

export interface AddNewJobState {
    currentStep?:number
}