export interface IAppState {
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
}
