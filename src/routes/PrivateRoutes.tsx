import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
import { Overview, JobOverview, AddNewJob, ApplicantsOverview } from '@/views/companies';
const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path="/" element={<Overview />} />
				<Route path="jobs">
					<Route path="" element={<JobOverview />} />
					<Route path="new" element={<AddNewJob />} />
					<Route path="/jobs" element={<Navigate to="" />} />
				</Route>
				<Route path="talents" element={<Overview />} />
				<Route path="applicants/:status" element={<ApplicantsOverview />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
			;
		</Routes>
	);
};

export default PrivateRoutes;
