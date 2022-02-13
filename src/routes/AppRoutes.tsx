import { FC } from 'react';
import { RootState } from '@/config/store/rootReducer';
import { shallowEqual, useSelector } from 'react-redux';
import PublicRoutes from '@/routes/PublicRoutes';
import PrivateRoutes from '@/routes/PrivateRoutes';

const AppRoutes: FC = () => {
	const isAuthorized = useSelector<RootState>(({ auth }) => auth.accessToken, shallowEqual);
	return isAuthorized ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
