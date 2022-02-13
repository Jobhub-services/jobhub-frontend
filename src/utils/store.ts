import store from '@/config/store/store';

const dispatchToStore = (type: any, payload: any) => {
	store.dispatch({ type, payload });
};
export default dispatchToStore;
