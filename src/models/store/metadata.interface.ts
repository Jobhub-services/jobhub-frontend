export interface IAppState {
	isLoading?: boolean;
	countries?: { id?: string; code?: string; label?: string }[];
	job_categories?: { id?: string; value?: string; label?: string }[];
	comapny_division?: { id?: string; value?: string; label?: string }[];
	currencies?: { id?: string; value?: string; label?: string }[];
	skills_list?: { id?: string; value?: string; label?: string }[];
}
