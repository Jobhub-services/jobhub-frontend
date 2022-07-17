import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
	DeveloperProfile,
	ViewJobs,
	ViewApplications,
	ViewCompanies,
	CompanyDetail,
	JobDetails,
	ApplicationDetails,
	CompanySettings,
	AccountSettings,
	SecuritySettings,
	TalentOverview,
} from '@/views/developers';

const DeveloperRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<TalentOverview />} />
			<Route path="profile/:username" element={<DeveloperProfile />} />
			<Route path="jobs" element={<ViewJobs />}>
				<Route path="detail/:id" element={<JobDetails />} />
			</Route>
			<Route path="applications" element={<ViewApplications />}>
				<Route path="detail/:id" element={<ApplicationDetails />} />
			</Route>
			<Route path="companies" element={<ViewCompanies />}>
				<Route path="detail/:id" element={<CompanyDetail />} />
			</Route>
			<Route path="settings" element={<CompanySettings />}>
				<Route path="account" element={<AccountSettings />} />
				<Route path="security" element={<SecuritySettings />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default DeveloperRoutes;
