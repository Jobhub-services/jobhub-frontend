export type TalentStatus = 'ready' | 'open' | 'closed';

export type WorkExperience = {
	title?: string;
	company?: string;
	location?: string;
	job_type?: string;
	startDate?: Date | null;
	endDate?: Date | null;
	description?: string;
};
export type Education = {
	degree?: string;
	school?: string;
	startDate?: Date | null;
	endDate?: Date | null;
};
export type Certification = {
	title?: string;
	provider?: string;
	description?: string;
	date?: Date | null;
	link?: string;
};

export type Language = {
	language?: string;
	level?: string;
};
export type TalentContact = {
	email?: string;
	linkedin?: string;
	git?: string;
	website?: string;
	twitter?: string;
	phone?: string;
	resume?: string;
};
export type TalentShortInfo = {
	talentId: string;
	name?: string;
	main_role?: string;
	img?: string;
	experience?: string;
	address?: {
		country: string;
		city: string;
	};
	status?: TalentStatus;
	professional_summary?: string;
	skills?: string[];
};

export type TalentAllInfo = TalentShortInfo &
	TalentContact & {
		roles?: string[];
		other_types?: string[];
		remote_work?: string;
		desired_location?: string[];
		preferences?: string[];
		work_experience?: WorkExperience[];
		educations?: Education[];
		certifications?: Certification[];
		languages?: Language[];
	};
