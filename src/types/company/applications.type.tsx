import { InterviewInfo } from '@/types/interview.type';

export type ApplicationStatus = 'declined' | 'hired' | 'process' | 'new' | 'interview';
export type InterviewStatus = 'On Progress' | 'Finished' | 'Pending';

export type QuestionType = {
	question?: string;
	answer?: string;
};

export type WorkExperienceType = {
	title?: string;
	job_type?: 'part_time' | 'full_time';
	period?: [Date | null, Date | null];
	company_name?: string;
	work_location?: string;
};

export type ApplicantsShortInfo = {
	applicationStatus?: ApplicationStatus;
	applicantId: string;
	img?: string;
	name?: string;
	role?: string;
	experience_duration?: string;
	cover_letter?: string;
	skils?: { value: string; label: string }[];
	linkedIn?: string;
	github?: string;
	cv?: string;
	applied?: string;
	job?: {
		title?: string;
		role?: string;
		applied?: Date | null;
	};
};
export type ApplicantAllInfo = ApplicantsShortInfo & {
	email?: string;
	phone?: string;
	website?: string;
	start_working?: Date | null;
	notice_period?: string;
	questions?: QuestionType[];
	work_experience?: WorkExperienceType[];
	interviews?: InterviewInfo[];
	job?: {
		title?: string;
		category?: string;
		applied?: Date | null;
	};
};

export type ApplicantsByJob = {
	jobId: string;
	title?: string;
	category?: string;
	applicants?: ApplicantsShortInfo[];
};

export type FilterType = {
	jobTitle?: string;
	country?: { id: string; label: string }[];
	applicantRole?: string[];
	applicationDate?: [Date | null, Date | null];
	occupationType?: 'full_time' | 'part_time' | 'temporary' | 'permanent' | '';
	skills?: { id: string; label: string }[];
};
