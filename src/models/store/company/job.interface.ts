import { ShowJobInfo, JobDetails } from '@/types/jobs';
import { JobOrderType } from '@/types/jobs';

export type JobInfo = {
	title?: string;
	description?: string;
	responsabilities?: string;
	company_division?: string;
	category?: string;
	job_type?: string;
	duration?: string;
	duration_range?: [Date | null, Date | null];

	salary_type?: string;
	start_salary?: string;
	end_salary?: string;
	currency?: string;
	benefits?: string;
	work_remotly?: boolean;
	hire_remotly?: boolean;
	visa_sponsorship?: boolean;
	work_location?: { country?: string; city?: string }[];
	hire_location?: { country?: string; city?: string }[];

	education?: string[];
	certification?: string[];
	skills?: { value: string; label: string }[];
	requirements?: string;
	questions?: string[];
};

export interface IJobState {
	filterClosed?: boolean;
	showDetails?: boolean;
	isLoading?: boolean;
	createJob: JobInfo;
	showJob: {
		jobs: ShowJobInfo[];
		total?: number;
		pages?: number;
		currentPage?: number;
	};
	jobDetails: JobDetails;
	filters: {
		job_type?: {
			full_time: false;
		};
	};
	jobsOrderedBy?: JobOrderType;
	errors?: {
		job?: { [key: string]: string };
		categories?: { [key: string]: string };
		currencies?: { [key: string]: string };
		division?: { [key: string]: string };
	};
}
