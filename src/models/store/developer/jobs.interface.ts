import { JobInfoData, TJobDetails, TJobApplication, TJobType, TValueLabel, TFWorkLocation, TJobSalary } from '@/types/developer/job.type';

export interface IJobsState {
	filterClosed?: boolean;
	isLoading?: boolean;
	isDataFetching?: boolean;
	isDetailLoading?: boolean;
	isApplicationSubmited?: boolean;
	isSaving?: boolean;
	jobSaved?: boolean;
	showDetails?: boolean;
	filterInfo: {
		job_categories?: TValueLabel[];
		skills?: TValueLabel[];
		work_location?: TFWorkLocation;
		job_type?: string[];
		job_salary?: TJobSalary;
		company_size?: string[];
	};
	jobInfo: {
		content?: JobInfoData[];
		size?: number | null;
		count?: number | null;
		pages?: number | null;
		page?: number;
	};
	jobDetails: TJobDetails;
	jobApplication?: TJobApplication;
	succesApplication?: {
		message?: string;
		application?: TJobApplication;
		status: boolean;
	};
	errors?: {
		content?: any;
		status: boolean;
	};
}
