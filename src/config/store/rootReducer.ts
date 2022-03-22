import { combineReducers } from 'redux';
import { reducer as authReducer } from '@/modules/store/auth.store';
const rootReducer = combineReducers({
	auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
