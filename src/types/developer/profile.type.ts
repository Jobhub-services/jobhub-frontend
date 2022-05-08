export type Languages = {
	idLanguage?: string;
	language?: string;
	level?: string;
};
export type SkillType = {
	id: string;
	label: string;
};
export type Role = {
	id: string;
	label: string;
};
export type WorkExperienceType = {
	title?: string;
	company_name?: string;
	startDate?: Date | null;
	endDate?: Date | null;
	description?: string;
	job_type?: 'Part-time' | 'Full-time';
	location?: {
		id?: string;
		label?: string;
	};
};

export type EducationType = {
	title?: string;
	school?: string;
	startDate?: Date | null;
	endDate?: Date | null;
};

export type CertificationType = {
	certificationId?: string;
	title?: string;
	provider?: string;
	description?: string;
	issuedDate?: Date;
	expirationDate?: Date | null;
	link?: string;
};

export type SocialProfileType = {
	linkedin?: string;
	git?: string;
	website?: string;
	twitter?: string;
};
export type ProfileInfo = {
	summary?: string;
	languages?: Languages[];
	skills?: SkillType[];
	role?: {
		primary_role?: Role;
		experience?: Role;
		other_roles?: Role[];
	};
	work_experience?: WorkExperienceType[];
	educations?: EducationType[];
	certifications?: CertificationType[];
	social_profile?: SocialProfileType;
	resume?: string;
};
