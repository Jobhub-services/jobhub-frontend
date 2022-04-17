import { StandardProps } from '@/models/component';

export interface HeaderTabProps extends StandardProps {
	title?: string;
	badge?: string;
	active?: boolean;
	onClick: (status: string, event?: React.SyntheticEvent) => void;
	status?: 'new' | 'process' | 'closed' | 'hired';
}
