import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Overview } from '@/views/companies';
import { DeveloperProfile, ViewJobs, ViewApplications, ViewCompanies, CompanyDetail, ProfileSettings, JobDetails } from '@/views/developers';

const DeveloperRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Overview />} />
			<Route path="profile/:username" element={<DeveloperProfile />} />
			<Route path="profile/settings" element={<ProfileSettings />} />
			<Route path="jobs" element={<ViewJobs />}>
				<Route path="detail/:id" element={<JobDetails />} />
			</Route>
			<Route path="applications" element={<ViewApplications />} />
			<Route path="companies" element={<ViewCompanies />}>
				<Route path="detail/:id" element={<CompanyDetail />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default DeveloperRoutes;
