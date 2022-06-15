import { StandardProps } from '@/models/component/app.interface';
import { StatusType } from '@/types/common.type';

export interface StatusElemProps extends StandardProps {
	title?: string;
	status?: StatusType;
}

export interface AvatarProps extends StandardProps {
	name?: string;
	role?: string;
	img?: string;
	experience?: string;
	size?: number;
	color?: string;
	status?: StatusType;
}
