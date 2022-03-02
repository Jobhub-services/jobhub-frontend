import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
const MasterLayout: FC = () => {
	return (
		<div>
			hahah
			<Outlet />
		</div>
	);
};
export default MasterLayout;
