import { PNav } from '@/models/component/common/common.interface';
import { StandardProps } from '@/models/component';
import { JobInfoData, TFWorkLocation, TJobSalary, TJobType, TValueLabel } from '@/types/developer/job.type';

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

export interface PJobType extends StandardProps {
	jobType?: TJobType;
	clear?: boolean;
	onChange?: (value: TJobType, name?: string) => void;
}
export interface PCompanySize extends StandardProps {
	companySize?: string[];
	clear?: boolean;
	onChange?: (value: string[], name?: string) => void;
}
export interface PFWorkLocation extends StandardProps {
	worklocation?: TFWorkLocation;
	clear?: boolean;
	onChange?: (value: TFWorkLocation, name?: string) => void;
}

export interface PFJobCategories extends StandardProps {
	jobCategories?: TValueLabel[];
	clear?: boolean;
	onChange?: (value: TValueLabel[], name?: string) => void;
}

export interface PFSkills extends StandardProps {
	skills?: TValueLabel[];
	clear?: boolean;
	onChange?: (value: TValueLabel[], name?: string) => void;
}

export interface PFJobSalary extends StandardProps {
	jobSalary?: TJobSalary;
	clear?: boolean;
	onChange?: (value: TJobSalary, name?: string) => void;
}
