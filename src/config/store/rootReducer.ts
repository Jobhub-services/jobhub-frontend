import { combineReducers } from 'redux';
import { reducer as authReducer } from '@/modules/store/auth.store';
const rootReducer = combineReducers({
	auth: authReducer,
});
export default rootReducer;
