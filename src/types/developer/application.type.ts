export type ApplicationStatus = 'NEW' | 'IN_PROGRESS' | 'DECLINED' | 'ACCEPTED' | 'HIRED';

export type TApplicationData = {
	_id: string;
	status?: ApplicationStatus;
	createdAt?: string;
	company?: {
		_id?: string;
		companyName?: string;
		avatar?: string;
	};
	jobId?: {
		_id?: string;
		title?: string;
	};
	motivation?: string;
};

export type TApplicationDetail = TApplicationData & {};
