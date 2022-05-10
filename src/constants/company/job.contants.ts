import { StatusType } from '@/types/common.type';

export const StatusTitle: { [key in StatusType]: string } = {
	ready: 'Active',
	open: 'Suspended',
	closed: 'Closed',
};
