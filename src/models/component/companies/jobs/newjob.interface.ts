import React from 'react';
import { StandardProps } from '@/models/component/app.interface';

export interface AddNewJobProps extends StandardProps {
	onPreviouse?: (event: React.SyntheticEvent) => void;
	onNext?: (event: React.SyntheticEvent, error: boolean) => void;
}

export interface IAddNewJobState {
	currentStep?: number;
	validSteps?: boolean[];
}

export interface IconTitleProps extends StandardProps {
	title?: string;
	icon?: string;
}

export interface PCompensation extends StandardProps {
	errors?: {
		start_salary?: boolean;
		end_salary?: boolean;
		currency?: boolean;
	};
	onBenefitChange: (v: string, n: string) => void;
}
export interface JobReviewProps extends AddNewJobProps {}
