import { combineReducers } from 'redux';
import { reducer as authReducer } from '@/modules/store/auth.store';
import { reducer as userReducer } from '@/modules/store/user.store';
const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
