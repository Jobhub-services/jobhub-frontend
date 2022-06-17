import { ApplicantsByJob, ApplicantsShortInfo, FilterType, ApplicantAllInfo } from '@/types/company/applications.type';

type PaginationType = {
	total?: number;
	pages?: number;
	currentPage?: number;
};
export type AppData = PaginationType & {
	applicants: ApplicantsShortInfo[];
};
export type AppByJobs = PaginationType & {
	applicants: ApplicantsByJob[];
};
export interface IApplicationsState {
	isLoading?: boolean;
	filterClosed?: boolean;
	applicantsByJobs: AppByJobs;
	showApplicants: AppData;
	filter: FilterType;
	applicantDetails: ApplicantAllInfo;
}
