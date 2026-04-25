import { StandardProps } from '@/models/component/app.interface';
import { ShowJobInfo } from '@/types/company/jobs.type';

export interface JobCardProps extends StandardProps, ShowJobInfo {}

export interface TextAvatarProps extends StandardProps {
	title?: string;
	subtitle?: string;
	bColor?: number;
	onClick?: (e: any) => void;
}

export interface ILocationElem {
	country?: string;
	city?: string;
	size?: number;
}

export interface PDeleteModalJob {
	show?: boolean;
	jobId: string;
	onContinue?: (e: any) => void;
	onClose?: (e: any) => void;
}
