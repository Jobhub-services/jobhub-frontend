export interface IAppState {
	isLoading?: boolean;
	countries?: { code?: string; label?: string }[];
	job_categories?: { value?: string; label?: string }[];
	comapny_division?: { value?: string; label?: string }[];
	currencies?: { value?: string; label?: string }[];
	skills_list?: { value?: string; label?: string }[];
}
