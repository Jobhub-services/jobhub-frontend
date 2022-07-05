import { TApplicationData } from '@/types/developer/application.type';
import { StandardProps } from '@/models/component';

export interface PApplicationCard extends StandardProps, TApplicationData {}

export interface PApplicationAvatar extends StandardProps {
	title?: string;
	subtitle?: string;
	bColor?: number;
	avatar?: string;
	img?: string;
	applicationId: string;
}
