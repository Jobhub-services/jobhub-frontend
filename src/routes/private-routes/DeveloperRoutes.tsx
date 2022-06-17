import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Overview } from '@/views/companies';
import { DeveloperProfile, ViewJobs, ViewApplications } from '@/views/developers';

const DeveloperRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Overview />} />
			<Route path="profile/:username" element={<DeveloperProfile />} />
			<Route path="jobs" element={<ViewJobs />} />
			<Route path="applications" element={<ViewApplications />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default DeveloperRoutes;
