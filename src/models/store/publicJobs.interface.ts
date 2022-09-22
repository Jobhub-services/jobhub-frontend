import { TBooleanAttr, TJobDuration, TTJob } from '@/types/publicJobs.type';

export interface IPublicJobsState {
	[TBooleanAttr.IS_JOB_FETCHING]?: boolean;
	jobs?: {
		content: {
			_id: string;
			title?: string;
			work_location?: { country?: string; city?: string };
			work_remotly?: boolean;
			hire_remotly?: boolean;
			hire_location?: { country?: string; city?: string }[];
			category?: string;
			job_type?: TTJob;
			duration?: TJobDuration;
			createdAt?: string | null;
			company?: {
				_id?: string;
				companyName?: string;
				company_size?: string;
				avatar?: string;
			};
			salary_type?: string;
			start_salary?: string;
			end_salary?: string;
			currency?: { id?: string; name?: string; code?: string };
			featured?: boolean;
			applied?: boolean;
			saved?: boolean;
		}[];
		size?: number | null;
		count?: number | null;
		pages?: number | null;
		page?: number;
	};
}
