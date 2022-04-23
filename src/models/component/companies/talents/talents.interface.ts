import { StandardProps } from '@/models/component/app.interface';
import { StatusType } from '@/types/talent.type';

export interface AvatarProps extends StandardProps {
	name?: string;
	role?: string;
	img?: string;
	status?: StatusType;
}

export interface EducationProps extends StandardProps {
	title: string;
	university: string;
	date?: string;
}

export interface CertificationProps extends StandardProps {
	title: string;
	provider?: string;
	date?: string;
	description?: string;
	link?: string;
}

export interface CardProps extends StandardProps, AvatarProps {
	location?: string;
	skills?: string[];
	description?: string;
}
export interface TalentStatusProps extends StandardProps {
	title?: string;
	status?: StatusType;
}
