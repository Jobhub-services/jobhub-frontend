import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/applications.store';

const applicationsDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
};
export const applicationsActions = {
	async setClosedFilter(closed: boolean) {
		applicationsDispatcher.setClosedFilter(closed);
	},
};
