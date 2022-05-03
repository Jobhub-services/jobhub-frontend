import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '@/utils/appHooks';
import PublicRoutes from '@/routes/PublicRoutes';
import MasterLayout from '@/views/MasterLayout';

const AppRoutes: FC = () => {
	const isAuthorized = useAppSelector(({ auth }) => auth.accessToken, shallowEqual);
	console.log(isAuthorized);
	return isAuthorized ? <MasterLayout /> : <PublicRoutes />;
};

export default AppRoutes;
