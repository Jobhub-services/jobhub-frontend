import { PNav } from '@/models/component/common/common.interface';
import { ApplicantsByJob, ApplicantsShortInfo, ApplicationStatus } from '@/types/company/applications.type';
import { StandardProps } from '@/models/component';

export interface HeaderTabProps extends PNav {
	status?: ApplicationStatus;
}

export interface ApplicantCardProps extends StandardProps, ApplicantsShortInfo {}

export interface ApplicationContainerProps extends StandardProps, ApplicantsByJob {}

export interface AvatarProps extends StandardProps {
	width?: number;
	height?: number;
	title?: string;
	subTitle?: string;
	img?: string;
}

export interface WorkExperienceProps extends StandardProps {
	title?: string;
	company?: string;
	dateRange?: string;
	jobType?: string;
	location?: string;
	description?: string;
	link?: string;
}

export interface PApplicationHeader extends StandardProps {
	viewType: 'byjob' | 'search';
	count: number;
	onChangeTab: (status: string) => void;
}

export interface PApplicationContact extends StandardProps {
	linkedIn?: string;
	git?: string;
	website?: string;
}
