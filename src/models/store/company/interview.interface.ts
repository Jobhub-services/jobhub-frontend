import { InterviewInfo } from '@/types/company/interview.type';

export interface IAddInterviewState {
	isLoading?: boolean;
	isDeleted?: boolean;
	isCreated?: boolean;
	isUpdated?: boolean;
	isError?: boolean;
	createInterview: InterviewInfo;
	showInterviews: {
		total?: number;
		pages?: number;
		currentPage?: number;
		interviews?: InterviewInfo[];
	};
}
