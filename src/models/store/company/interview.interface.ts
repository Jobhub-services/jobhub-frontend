import { InterviewInfo } from '@/types/interview.type';

export interface IAddInterviewState {
	isLoading?: boolean;
	createInterview: InterviewInfo;
	showInterviews: {
		total?: number;
		pages?: number;
		currentPage?: number;
		interviews?: InterviewInfo[];
	};
}
