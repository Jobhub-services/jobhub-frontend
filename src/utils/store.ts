import store from '@/config/store/store';

const dispatchToStore = (action: any) => {
	store.dispatch(action);
};
const getState = () => {
	return store.getState();
};
export default dispatchToStore;
export { getState };
