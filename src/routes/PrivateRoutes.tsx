import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '@/utils/appHooks';
import CompanyRoutes from '@/routes/private-routes/CompanyRoutes';
import DeveloperRoutes from '@/routes/private-routes/DeveloperRoutes';

const PrivateRoutes: FC = () => {
	const { userType } = useAppSelector(({ user }) => user.userInfo, shallowEqual);
	console.log(userType);
	if (userType === 'developer') return <DeveloperRoutes />;
	if (userType === 'company') return <CompanyRoutes />;
	return <></>;
};

export default PrivateRoutes;
