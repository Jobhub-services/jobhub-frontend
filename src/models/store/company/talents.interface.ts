import { TalentAllInfo, TalentShortInfo } from '@/types/talent.type';

export interface ITalentState {
	filterClosed?: boolean;
	isLoading?: boolean;
	showTalents: {
		total?: number;
		pages?: number;
		currentPage?: number;
		talents?: TalentShortInfo[];
	};
	talentDetails: TalentAllInfo;
}
