import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
const GuestLayout: FC = () => {
	return (
		<div>
			ds dsds <Outlet />
		</div>
	);
};
export default GuestLayout;
