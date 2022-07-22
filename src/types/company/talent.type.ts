import { TValueLabel } from '@/types/common.type';

export type TalentStatus = 'ready' | 'open' | 'closed';

export type WorkExperience = {
	title?: string;
	company_name?: string;
	location?: string;
	job_type?: string;
	startDate?: string;
	endDate?: string;
	description?: string;
};
export type Education = {
	title?: string;
	school?: string;
	startDate?: string;
	endDate?: string;
	_id?: string;
};
export type Certification = {
	certificationId?: string;
	title?: string;
	provider?: string;
	description?: string;
	issuedDate?: string;
	expirationDate?: string;
	link?: string;
	_id?: string;
};

export type Language = {
	language?: string;
	level?: string;
	_id?: string;
};
export type TalentContact = {
	linkedin?: string;
	git?: string;
	website?: string;
	twitter?: string;
	phone?: string;
};
export type TalentShortInfo = {
	_id: string;
	firstName?: string;
	lastName?: string;
	user?: {
		email?: string;
		username?: string;
	};
	role?: {
		other_roles?: string[];
		primary_role?: string;
		experience?: string;
	};
	avatar?: string;
	address?: {
		country: string;
		city: string;
	};
	status?: TalentStatus;
	summary?: string;
	skills?: string[];
	fullName?: string;
};

export type TalentAllInfo = TalentShortInfo & {
	job_type?: string;
	other_job_type?: string[];
	remote_work?: string;
	desired_location?: string[];
	wants?: string;
	work_experience?: WorkExperience[];
	educations?: Education[];
	certifications?: Certification[];
	languages?: Language[];
	resume?: string;
	currency?: {
		name?: string;
		code?: string;
	};
	salary?: string;
	social_profile?: TalentContact;
};

export type TFilter = {
	country?: TValueLabel[];
	roles?: TValueLabel[];
	jobType?: {
		full_time?: boolean;
		part_time?: boolean;
		temporary?: boolean;
		permanent?: boolean;
	};
	experienceYear?: TValueLabel[];
	status?: TalentStatus[];
	skills?: TValueLabel[];
};
