import store from '@/config/store/store';

const dispatchToStore = (action: any) => {
	store.dispatch(action);
};
export default dispatchToStore;
