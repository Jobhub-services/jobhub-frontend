import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}></Route>;
		</Routes>
	);
};

export default PrivateRoutes;
