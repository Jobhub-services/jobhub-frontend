import { PNav } from '@/models/component/common/common.interface';
import { StandardProps } from '@/models/component';
import { JobInfoData } from '@/types/developer/job.type';

export interface PJobCard extends StandardProps, JobInfoData {}

export interface PJobAvatar extends StandardProps {
	title?: string;
	subtitle?: string;
	bColor?: number;
	avatar?: string;
	img?: string;
	featured?: boolean;
	new?: boolean;
	jobId: string;
}

export interface PHeaderNav extends PNav {
	status?: 'Browse all' | 'Saved';
}
export interface PQuestion extends StandardProps {
	questions?: { _id?: string; name?: string }[];
}
