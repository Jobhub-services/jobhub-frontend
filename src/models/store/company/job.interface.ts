import { ShowJobInfo, JobDetails } from '@/types/company/jobs.type';
import { JobOrderType } from '@/types/company/jobs.type';

export type JobInfo = {
	title?: string;
	description?: string;
	responsabilities?: string;
	company_division?: { id?: string; name?: string };
	category?: { id?: string; name?: string };
	job_type?: string;
	duration?: string;
	duration_range?: [Date | null, Date | null];

	salary_type?: string;
	start_salary?: string;
	end_salary?: string;
	currency?: { id?: string; name?: string };
	benefits?: string;
	work_remotly?: boolean;
	hire_remotly?: boolean;
	visa_sponsorship?: boolean;
	work_location?: { country?: { id?: string; name?: string }; city?: string }[];
	hire_location?: { country?: { id?: string; name?: string }; city?: string }[];

	education?: string[];
	certification?: string[];
	skills?: { value: string; label: string }[];
	requirements?: string;
	questions?: string[];
};

export interface IJobState {
	filterClosed?: boolean;
	isLoading?: boolean;
	isDetailLoading?: boolean;
	createJob: JobInfo;
	jobCreated: boolean;
	showJob: {
		content: ShowJobInfo[];
		count?: number;
		pages?: number;
		size?: number;
	};
	jobDetails: JobDetails;
	filters: {
		job_type?: {
			full_time: false;
		};
	};
	jobsOrderedBy?: JobOrderType;
	errors: {
		job?: {
			status?: boolean;
			content?: any;
		};
		categories?: { [key: string]: string };
		currencies?: { [key: string]: string };
		division?: { [key: string]: string };
	};
}
