export type ApplicationStatus = 'NEW' | 'IN_PROGRESS' | 'REFUSED' | 'ACCEPTED';

export type TApplicationData = {
	_id: string;
	status?: ApplicationStatus;
	createdAt?: string;
	company?: {
		_id?: string;
		name?: string;
	};
	jobId: {
		_id?: string;
		title?: string;
	};
	avatar?: string;
	motivation?: string;
};

export type TApplicationDetail = TApplicationData & {};
