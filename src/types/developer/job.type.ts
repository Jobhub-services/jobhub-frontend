export type TLoading = 'isLoading' | 'isDetailLoading' | 'isApplicationSubmited' | 'isDataFetching' | 'isSaving';

export type JobInfoData = {
	_id: string;
	title?: string;
	work_location?: { country?: string; city?: string };
	work_remotly?: boolean;
	hire_remotly?: boolean;
	hire_location?: { country?: string; city?: string }[];
	category?: string;
	job_type?: 'Full time' | 'Part time';
	duration?: 'Permanent' | 'Temporary';
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
};
export type TJobDetails = JobInfoData & {
	duration_range?: [string | null, string | null];
	description?: string;
	responsabilities?: string;
	requirements?: string;
	benefits?: string;
	visa_sponsorship?: boolean;
	education?: string[];
	certification?: string[];
	skills?: string[];
	company_division?: string;
	questions?: { _id?: string; question?: string }[];
};
export type TJobApplication = {
	jobId?: string;
	motivation?: string;
	start_date?: string;
	notice_period?: string;
	responses?: { question?: string; response?: string; qcontent?: string }[];
};

export type TJobType = { full_time?: boolean; part_time?: boolean; permanent?: boolean; temporary?: boolean };
export type TValueLabel = { value?: string; label?: string };
export type TFWorkLocation = { remote?: boolean; countries?: TValueLabel[] };
export type TJobSalary = {
	hourly?: {
		checked?: boolean;
		from?: string;
		to?: string;
	};
	monthly?: {
		checked?: boolean;
		from?: string;
		to?: string;
	};
	annually?: {
		checked?: boolean;
		from?: string;
		to?: string;
	};
	currencies?: TValueLabel[];
};
