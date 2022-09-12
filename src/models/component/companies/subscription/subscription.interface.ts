import { PNav } from '@/models/component/common/common.interface';
import { StandardProps } from '@/models/component/app.interface';

export enum PayOptions {
	MONTHLY = 'MONTHLY',
	YEARLY = 'YEARLY',
}
export interface HeaderTabProps extends PNav {
	status?: PayOptions;
}

export interface PCreditCardInfo extends StandardProps {
	elementContainer: string;
	formContainer: string;
	errorHandler: string;
	success: string;
	token: string;
	onTapChange: (tap: any, card: any) => void;
}

export interface POption extends StandardProps {
	status?: PayOptions;
	onSubscribe?: (subscriptionId: string) => void;
}
