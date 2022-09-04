import { PNav } from '@/models/component/common/common.interface';

export enum PayOptions {
	MONTHLY = 'Monthly',
	YEARLY = 'Yearly',
}
export interface HeaderTabProps extends PNav {
	status?: PayOptions;
}
