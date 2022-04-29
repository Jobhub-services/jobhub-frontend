import { StandardProps } from '@/models/component/app.interface';
import { StatusType } from '@/types/common.type';

export interface StatusElemProps extends StandardProps {
	title?: string;
	status?: StatusType;
}
