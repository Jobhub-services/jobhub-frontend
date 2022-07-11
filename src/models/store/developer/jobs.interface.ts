import { JobInfoData, TJobDetails, TJobApplication } from '@/types/developer/job.type';

export interface IJobsState {
	filterClosed?: boolean;
	isLoading?: boolean;
	isDetailLoading?: boolean;
	isApplicationSubmited?: boolean;
	showDetails?: boolean;
	jobInfo: {
		content?: JobInfoData[];
		size?: number | null;
		count?: number | null;
		pages?: number | null;
	};
	jobDetails?: TJobDetails;
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
