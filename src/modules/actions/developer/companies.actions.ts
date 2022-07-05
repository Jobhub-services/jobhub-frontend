import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/developer/company.store';
export const companiesDispatcher = {
	setIsLoading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
};
export const companiesActions = {};
