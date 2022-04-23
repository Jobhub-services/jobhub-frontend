import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/talents.store';

const talentsDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
	showTalentDetails(details: boolean) {
		dispatchToStore(storeActions.showTalentDetails({ details }));
	},
};

export const talentsActions = {
	async setClosedFilter(closed: boolean) {
		talentsDispatcher.setClosedFilter(closed);
	},
	async showTalentDetails(details: boolean) {
		talentsDispatcher.showTalentDetails(details);
	},
};
