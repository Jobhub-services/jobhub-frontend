import { InterviewInfo } from '@/types/interview.type';
import { TValueLabel } from '@/types/common.type';

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
	_id: string;
	applicationStatus?: ApplicationStatus;
	avatar?: string;
	name?: string;
	role?: string;
	experience_duration?: string;
	cover_letter?: string;
	skils?: string[];
	linkedIn?: string;
	github?: string;
	cv?: string;
	applied?: string;
	job?: {
		title?: string;
		category?: string;
		applied?: string;
	};
};
export type ApplicantAllInfo = ApplicantsShortInfo & {
	email?: string;
	phone?: string;
	website?: string;
	start_working?: string;
	notice_period?: string;
	questions?: QuestionType[];
	work_experience?: WorkExperienceType[];
	interviews?: InterviewInfo[];
};

export type ApplicantsByJob = {
	_id: string;
	title?: string;
	category?: string;
	applicants?: ApplicantsShortInfo[];
};

export type FilterType = {
	jobTitle?: string;
	country?: TValueLabel[];
	applicantRole?: TValueLabel[];
	applicationDate?: [Date | null, Date | null];
	occupationType?: {
		full_time?: boolean;
		part_time?: boolean;
		temporary?: boolean;
		permanent?: boolean;
	};
	skills?: TValueLabel[];
};
