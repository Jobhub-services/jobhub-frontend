import store from '@/config/store/store';

const dispatchToStore = (action: any) => {
	store.dispatch(action);
};
const getState = (stateGetter: (state: any) => any) => {
	const state = store.getState();
	return stateGetter(state);
};
export default dispatchToStore;
export { getState };
