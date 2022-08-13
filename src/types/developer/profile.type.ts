import { StatusType } from '@/types/common.type';
import { TCurrency, TLanguages } from '@/types/metadata.type';

export type LanguagesType = {
	language?: TLanguages;
	level?: string;
};
export type SkillType = {
	_id: string;
	name: string;
};
export type Role = {
	_id: string;
	name: string;
};
export type WorkExperienceType = {
	_id?: string;
	title?: string;
	company_name?: string;
	startDate?: Date | null;
	endDate?: Date | null;
	description?: string;
	job_type?: 'Part time' | 'Full time';
	location?: {
		_id?: string;
		name?: string;
	};
};

export type EducationType = {
	_id?: string;
	title?: string;
	school?: string;
	startDate?: Date | null;
	endDate?: Date | null;
};

export type CertificationType = {
	_id?: string;
	certificationId?: string;
	title?: string;
	provider?: string;
	description?: string;
	issuedDate?: Date;
	expirationDate?: Date | null;
	link?: string;
};
export type KeyValType = {
	_id: string | null;
	name: string;
};
export type AddressType = {
	country?: KeyValType;
	city?: string | null;
};
export type SocialProfileType = {
	linkedin?: string;
	git?: string;
	website?: string;
	twitter?: string;
};
export type ProfileInfo = {
	_id?: string;
	summary?: string;
	avatar?: string;
	firstName?: string;
	lastName?: string;
	languages?: LanguagesType[];
	skills?: SkillType[];
	role?: {
		primary_role?: Role;
		experience?: string;
		other_roles?: Role[];
	};
	work_experience?: WorkExperienceType[];
	educations?: EducationType[];
	certifications?: CertificationType[];
	social_profile?: SocialProfileType;
	address?: AddressType;
	status?: StatusType;
	resume?: string | Blob;
	desired_location?: {
		_id?: string;
		name?: string;
	}[];
	salary?: string;
	currency?: TCurrency;
	wants?: string;
	job_type?: string;
	other_job_type?: string[];
};
