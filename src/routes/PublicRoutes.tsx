import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GuestLayout from '@/views/GuestLayout';
import { LoginView, RegisterView,HomeView } from '@/views/publics';
const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<GuestLayout />}>
				<Route path="/" element={<HomeView />}/>
				<Route path="login/" element={<LoginView />} />
				<Route path="register/" element={<RegisterView />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default PublicRoutes;
