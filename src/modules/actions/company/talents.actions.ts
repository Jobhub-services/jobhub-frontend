import { TalentShortInfo } from '@/types/company/talent.type';
import { TalentAllInfo } from '@/types/company/talent.type';
import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/talents.store';
import { httpClient } from '@/config/httpClient/HttpClient';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;

export const talentsDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	setIsLoading(loading: boolean, attr: 'isLoading' | 'isDetailLoading' = 'isLoading') {
		dispatchToStore(storeActions.setIsLoading({ loading, attr }));
	},
	setTalentDetails(data: TalentAllInfo) {
		dispatchToStore(storeActions.setTalentDetails(data));
	},
	setTalents(data: { size?: number; pages?: number; count?: number; content?: TalentShortInfo[] }) {
		dispatchToStore(storeActions.setTalents(data));
	},
	setFilters(data: any) {
		dispatchToStore(storeActions.setFilters(data));
	},
};

export const talentsActions = {
	async setClosedFilter(closed: boolean) {
		talentsDispatcher.setClosedFilter(closed);
	},

	async getTalentDetails(talentId: string) {
		talentsDispatcher.setIsLoading(true, 'isDetailLoading');
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/compan/talents/${talentId}`);
			if (response.data) {
				const data = response.data;
				talentsDispatcher.setTalentDetails(data.content);
			}
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},

	async getTalents(params: any = {}) {
		talentsDispatcher.setIsLoading(true);
		try {
			const config = {
				params: params,
			};
			const response = await httpClient.get(`${USERS_SERVICE}/compan/talents`, config);
			if (response.data) {
				talentsDispatcher.setTalents(response.data);
			}
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false);
		}
	},
};
