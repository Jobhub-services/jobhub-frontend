import { StandardProps } from '@/models/component/app.interface';
import { StatusType } from '@/types/jobs';

export interface JobCardProps extends StandardProps {
	status?: StatusType;
}

export interface TextAvatarProps extends StandardProps {
	title?: string;
	subtitle?: string;
	bColor?: number;
}
