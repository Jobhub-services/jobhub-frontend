export type InterviewStatus = 'Pending' | 'On Progress' | 'Finished';

export type InterviewInfo = {
	title?: string;
	startDate?: Date | null;
	endDate?: Date | null;
	note?: string;
	link?: string;
	location?: string;
	status?: InterviewStatus;
};
