import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GuestLayout from '@/views/GuestLayout';
import { LoginView, RegisterView } from '@/views/publics';


const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<GuestLayout />}>
				<Route path='/' element={<Navigate to="login" />} />
				<Route path="login/" element={<LoginView />} />
				<Route path="register">
					<Route  path="company" element={<RegisterView for='company' />}/>
					<Route  path="developer" element={<RegisterView for='developer' />}/>
					<Route  path="/register" element={<Navigate to='company' />}/>
				</Route>
				<Route path="*" element={<Navigate to="login" />} />
			</Route>
		</Routes>
	);
};

export default PublicRoutes;
