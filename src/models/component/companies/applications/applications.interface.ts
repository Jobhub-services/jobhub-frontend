import { ApplicationStatus, InterviewStatus } from '@/types/applications.type';
import { StandardProps } from '@/models/component';

export interface HeaderTabProps extends StandardProps {
	title?: string;
	badge?: string;
	active?: boolean;
	onClick: (status: string, event?: React.SyntheticEvent) => void;
	status?: ApplicationStatus;
}

export interface ApplicantCardProps extends StandardProps {
	applicantId?: number;
}
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

export interface InterviewInfoProps extends StandardProps {
	title?: string;
	date?: string;
	location?: string;
	status?: InterviewStatus;
}
