import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Overview } from '@/views/companies';
import { DeveloperProfile } from '@/components/developers';

const DeveloperRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Overview />} />
			<Route path="profile/:username" element={<DeveloperProfile />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default DeveloperRoutes;
