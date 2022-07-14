import { TLanguages } from '@/types/metadata.type';

export interface IAppState {
	appExpanded?: boolean;
	isLoading?: boolean;
	countries?: {
		count?: number;
		size?: number;
		content?: { _id?: string; code?: string; name?: string }[];
	};
	job_categories?: {
		content: { _id?: string; name?: string }[];
		count?: number;
		size?: number;
	};
	comapny_division?: { id?: string; value?: string; label?: string }[];
	currencies?: {
		count?: number;
		size?: number;
		content?: { _id?: string; code?: string; name?: string }[];
	};
	skills_list?: {
		count?: number;
		size?: number;
		content?: { _id?: string; name?: string }[];
	};
	langs?: {
		size?: number;
		count?: number;
		content?: TLanguages[];
	};
	roles?: {
		size?: number;
		count?: number;
		content?: { _id?: string; name?: string }[];
	};
}
