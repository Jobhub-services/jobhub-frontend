import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '@/utils/appHooks';
import CompanyRoutes from '@/routes/private-routes/CompanyRoutes';
import DeveloperRoutes from '@/routes/private-routes/DeveloperRoutes';

const PrivateRoutes: FC = () => {
	const { userInfo } = useAppSelector(({ user }) => user, shallowEqual);
	if (userInfo.userType === 'developer') return <DeveloperRoutes />;
	if (userInfo.userType === 'company') return <CompanyRoutes />;
	return <></>;
};

export default PrivateRoutes;
