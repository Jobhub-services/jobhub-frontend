import { ApplicantsByJob, ApplicantsShortInfo, FilterType, ApplicantAllInfo } from '@/types/company/applications.type';

type PaginationType = {
	size?: number;
	pages?: number;
	count?: number;
	page?: number;
};
export type AppData = PaginationType & {
	content?: ApplicantsShortInfo[];
};
export type AppByJobs = PaginationType & {
	content?: ApplicantsByJob[];
};
export interface IApplicationsState {
	isLoading?: boolean;
	isDetailLoading?: boolean;
	isStatusChange?: boolean;
	filterClosed?: boolean;
	applicantsByJobs: AppByJobs;
	showApplicants: AppData;
	filter: FilterType;
	applicantDetails: ApplicantAllInfo;
}
