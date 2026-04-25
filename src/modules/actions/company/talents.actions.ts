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
	setTalents(data: any, reset: boolean = false) {
		dispatchToStore(storeActions.setTalents({ data, reset }));
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
			const response = await httpClient.get(`${USERS_SERVICE}/company/talents/${talentId}`);
			if (response.data) {
				const data = response.data;
				talentsDispatcher.setTalentDetails(data.content);
			}
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false, 'isDetailLoading');
		}
	},

	async getTalents(loading: boolean = true, params: any = {}, reset: boolean = false) {
		talentsDispatcher.setIsLoading(loading);
		if (reset) talentsDispatcher.setTalents({}, true);
		try {
			const config = {
				params: params,
			};
			const response = await httpClient.get(`${USERS_SERVICE}/company/talents`, config);
			if (response.data) {
				talentsDispatcher.setTalents(response.data);
			}
		} catch (e: any) {
		} finally {
			talentsDispatcher.setIsLoading(false);
		}
	},
};
