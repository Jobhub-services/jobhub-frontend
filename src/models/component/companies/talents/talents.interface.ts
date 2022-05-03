import { StandardProps } from '@/models/component/app.interface';
import { TalentContact, TalentShortInfo } from '@/types/talent.type';

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

export interface ContactProps extends StandardProps, TalentContact {
	address?: {
		country: string;
		city: string;
	};
}

export interface CardProps extends StandardProps, TalentShortInfo {}
