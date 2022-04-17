import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/company/job.store';

const jobDispatcher = {
	setClosedFilter(closed: boolean) {
		dispatchToStore(storeActions.closeFilter({ closed }));
	},
};
export const jobActions = {
	async setClosedFilter(closed: boolean) {
		jobDispatcher.setClosedFilter(closed);
	},
};
