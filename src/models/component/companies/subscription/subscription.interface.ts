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
	renewJob?: number;
	onSubscribe?: (subscriptionId: string) => void;
}

export interface PPaymentModal extends StandardProps {
	open?: boolean;
	orderTitle: string;
	description: string;
	amount: number;
	isLoading?: boolean;
	onClose: () => void;
	onPlaceOrder: () => void;
}
