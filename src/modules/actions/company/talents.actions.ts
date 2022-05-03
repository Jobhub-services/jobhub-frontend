import { TalentShortInfo } from '@/types/talent.type';
import { TalentAllInfo } from './../../../types/talent.type';
import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/talents.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { TALENT_SERVICE } = API_PATHS;

const talentsDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setTalentDetails(data: TalentAllInfo) {
		dispatchToStore(storeActions.setTalentDetails(data));
	},
	setTalents(data: { total?: number; pages?: number; currentPage?: number; talents?: TalentShortInfo[] }) {
		dispatchToStore(storeActions.setTalents(data));
	},
};

export const talentsActions = {
	async setClosedFilter(closed: boolean) {
		talentsDispatcher.setClosedFilter(closed);
	},

	async getTalentDetails(talentId: string) {
		talentsDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${TALENT_SERVICE}/show/detail/${talentId}`);
			if (response.data) talentsDispatcher.setTalentDetails(response.data);
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false);
		}
	},

	async getTalents() {
		talentsDispatcher.setIsLoading(true);
		try {
			const response = await httpClient.get(`${TALENT_SERVICE}/show`);
			if (response.data) talentsDispatcher.setTalents(response.data);
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false);
		}
	},
};
