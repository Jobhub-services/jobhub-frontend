import { InterviewInfo } from '@/types/company/interview.type';
import { StatusType, TValueLabel } from '@/types/common.type';

export type ApplicationStatus = 'DECLINED' | 'HIRED' | 'IN_PROGRESS' | 'NEW' | 'ACCEPTED';

export type QuestionType = {
	question?: { question?: string };
	response?: string;
};

export type WorkExperienceType = {
	title?: string;
	job_type?: 'Part time' | 'Full time';
	company_name?: string;
	location?: {
		code?: string;
		name?: string;
	};
	startDate?: string;
	endDate?: string;
	description?: string;
};

export type ApplicantsShortInfo = {
	_id: string;
	avatar?: string;
	firstName?: string;
	lastName?: string;

	role?: {
		primary_role?: string;
		experience?: string;
	};

	skills?: string[];
	linkedIn?: string;
	git?: string;
	cv?: string;

	job?: {
		job_id?: string;
		title?: string;
		category?: string;
		createdAt?: string;
	};
	userStatus?: StatusType;
	status?: ApplicationStatus;
	motivation?: string;
	createdAt?: string;
	userId?: string;
};
export type ApplicantAllInfo = ApplicantsShortInfo & {
	email?: string;
	phone?: string;
	website?: string;
	start_date?: string;
	notice_period?: string;
	responses?: QuestionType[];
	work_experience?: WorkExperienceType[];
	interviews?: InterviewInfo[];
};

export type ApplicantsByJob = {
	job_id: string;
	title?: string;
	category?: string;
	applications?: ApplicantsShortInfo[];
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
