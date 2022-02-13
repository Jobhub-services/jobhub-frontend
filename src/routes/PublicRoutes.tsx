import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GuestLayout from '@/views/GuestLayout';
import { LoginView, RegisterView } from '@/views/account';
const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<GuestLayout />}>
				<Route path="/login" element={<LoginView />} />
				<Route path="/register" element={<RegisterView />} />
				<Route path="*" element={<Navigate to="/login" />} />
			</Route>
		</Routes>
	);
};

export default PublicRoutes;
