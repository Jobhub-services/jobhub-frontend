import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '@/utils/appHooks';
import PublicRoutes from '@/routes/PublicRoutes';
import PrivateRoutes from '@/routes/PrivateRoutes';

const AppRoutes: FC = () => {
	const isAuthorized = useAppSelector(({ auth }) => auth.accessToken, shallowEqual);
	return isAuthorized ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
