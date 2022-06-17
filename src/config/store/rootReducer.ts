import { combineReducers } from 'redux';
import { reducer as authReducer } from '@/modules/store/auth.store';
import { reducer as userReducer } from '@/modules/store/user.store';
import { reducer as applicationsReducer } from '@/modules/store/company/applications.store';
import { reducer as jobReducer } from '@/modules/store/company/job.store';
import { reducer as talentReducer } from '@/modules/store/company/talents.store';
import { reducer as metadataReducer } from '@/modules/store/metadata.store';
import { reducer as interviewReducer } from '@/modules/store/company/interview.store';
import { reducer as reducerDeveloperProfile } from '@/modules/store/developer/profile.store';
import { reducer as reducerCompanyProfile } from '@/modules/store/company/profile.store';
import { reducer as reducerDeveloperJobs } from '@/modules/store/developer/job.store';
const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	applications: applicationsReducer,
	job: jobReducer,
	talent: talentReducer,
	metadata: metadataReducer,
	interview: interviewReducer,
	developerProfile: reducerDeveloperProfile,
	developerJobs: reducerDeveloperJobs,
	companyProfile: reducerCompanyProfile,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
