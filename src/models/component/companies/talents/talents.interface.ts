import { StandardProps } from '@/models/component/app.interface';
import { AvatarProps } from '../common.interface';

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
