import store from '@/config/store/store';

const dispatchToStore = (action) => {
	store.dispatch(action);
};
export default dispatchToStore;
