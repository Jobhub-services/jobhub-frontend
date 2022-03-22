import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
import { Overview } from '@/views/companies';
const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path='/' element={<Overview />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>;
		</Routes>
	);
};

export default PrivateRoutes;
