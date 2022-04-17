import { combineReducers } from 'redux';
import { reducer as authReducer } from '@/modules/store/auth.store';
import { reducer as userReducer } from '@/modules/store/user.store';
import { reducer as applicationsReducer } from '@/modules/store/company/applications.store';
import { reducer as jobReducer } from '@/modules/store/company/job.store';
const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	applications: applicationsReducer,
	job: jobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
