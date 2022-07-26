export enum InterviewStatus {
	PENDING = 'PENDING',
	IN_PROGRESS = 'IN_PROGRESS',
	FINISHED = 'FINISHED',
}

export type InterviewInfo = {
	_id: string;
	title?: string;
	startDate?: Date | null;
	endDate?: Date | null;
	note?: string;
	link?: string;
	location?: string;
	status?: InterviewStatus;
};
