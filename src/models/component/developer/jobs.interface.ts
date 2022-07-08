import { PNav } from '@/models/component/common/common.interface';
import { StandardProps } from '@/models/component';
import { JobInfoData } from '@/types/developer/job.type';

export interface PJobCard extends StandardProps, JobInfoData {}

export interface PJobAvatar extends StandardProps {
	_id: string;
	title?: string;
	subtitle?: string;
	bColor?: number;
	avatar?: string;
	img?: string;
	featured?: boolean;
	new?: boolean;
}

export interface PHeaderNav extends PNav {
	status?: 'Browse all' | 'Saved';
}
export interface PQuestion extends StandardProps {
	questions?: { _id?: string; question?: string }[];
}

export interface PJobMetaInfo extends StandardProps {
	featured?: boolean;
	newPost?: number;
	roleIsEmpty?: boolean;
	locationIsEmpty?: boolean;
	skills?: string[];
	storeData: any;
}

export interface PJobGeneralInfo extends StandardProps {
	qualificationIsEmpty?: boolean;
	storeData: any;
}
