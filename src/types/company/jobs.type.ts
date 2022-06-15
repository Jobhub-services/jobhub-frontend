import { StatusType } from '@/types/common.type';
export type JobStringIndex =
	| 'title'
	| 'salary_type'
	| 'start_salary'
	| 'end_salary'
	| 'benefits'
	| 'currency'
	| 'requirements'
	| 'description'
	| 'responsabilities'
	| 'company_division'
	| 'category'
	| 'job_type'
	| 'duration';

export type JobBooleanIndex = 'work_remotly' | 'hire_remotly' | 'visa_sponsorship';

export declare namespace JobArrayIndex {
	type location = 'work_location' | 'hire_location';
	type keyValue = 'skills';
}

export type JobArrayStringIndex = 'questions' | 'education' | 'certification';

export type JobDateIndex = 'duration_range';

export type JobOrderType = 'newest' | 'oldest' | 'relevant';

export type ShowJobInfo = {
	_id: string;
	title?: string;
	category?: string;
	description?: string;
	status?: StatusType;
	job_type?: 'Full time' | 'Part time';
	duration?: 'Permanent' | 'Temporary';
	start_salary?: string;
	end_salary?: string;
	currency?: {
		code: string;
		name: string;
	};
	createdAt?: Date | null;
	work_location?: { country: string; city: string };
	work_remotly?: boolean;
	applicants?: string[]; // list of image ulr path
	salary_type?: string;
};

export type JobDetails = ShowJobInfo & {
	responsabilities?: string;
	company_division?: string;
	duration_range?: [Date | null, Date | null];
	hire_location?: { country: string; city: string }[];
	hire_remotly?: boolean;
	visa_sponsorship?: boolean;
	education?: string[];
	certification?: string[];
	skills?: { value: string; label: string }[];
	requirements?: string;
	benefits?: string;
	questions?: string[];
};
