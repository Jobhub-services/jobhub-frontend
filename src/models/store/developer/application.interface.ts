import { TApplicationData } from '@/types/developer/application.type';

export interface IApplicationState {
	isLoading?: boolean;
	applicationInfo?: {
		content?: TApplicationData[];
		count?: number;
		size?: number;
	};
}
