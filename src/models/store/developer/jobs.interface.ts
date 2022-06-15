import { JobInfoData, JobInfoDetails, TJobApplication } from '@/types/developer/job.type';

export interface IJobsState {
	filterClosed?: boolean;
	isLoading?: boolean;
	showDetails?: boolean;
	jobInfo?: {
		content?: JobInfoData[];
		size?: number;
		count?: number;
	};
	jobDetails?: JobInfoDetails;
	jobApplication?: TJobApplication;
}
