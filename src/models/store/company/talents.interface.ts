import { TalentAllInfo, TalentShortInfo, TFilter } from '@/types/company/talent.type';

export interface ITalentState {
	filterClosed?: boolean;
	isLoading?: boolean;
	isDetailLoading?: boolean;
	showTalents: {
		count?: number;
		pages?: number;
		page?: number;
		size?: number;
		content?: TalentShortInfo[];
	};
	talentDetails: TalentAllInfo;
	filter: TFilter;
}
