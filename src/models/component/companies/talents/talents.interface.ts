import { StandardProps } from '@/models/component/app.interface';
import { TalentContact, TalentShortInfo, Certification, TalentStatus } from '@/types/company/talent.type';

export interface EducationProps extends StandardProps {
	title: string;
	university: string;
	date?: string;
}

export interface CertificationProps extends StandardProps, Certification {}

export interface ContactProps extends StandardProps, TalentContact {
	address?: {
		country: string;
		city: string;
	};
	email?: string;
	salary?: string;
	currency?: {
		code?: string;
		name?: string;
	};
}

export interface CardProps extends StandardProps, TalentShortInfo {
	onChat?: (receiver: string) => void;
}

export interface PFilterStatus extends StandardProps {
	status?: TalentStatus[];
	clear?: boolean;
	onChange?: (value: TalentStatus[], name?: string) => void;
}
