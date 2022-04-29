import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
import { Overview, JobOverview, AddNewJob, ApplicantsOverview, TalentsView } from '@/views/companies';
import JobDetails from '@/components/companies/jobs/showjob/details/JobDetails';
const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path="/" element={<Overview />} />
				<Route path="jobs">
					<Route path="" element={<JobOverview />}>
						<Route path="details/:id" element={<JobDetails />} />
					</Route>
					<Route path="new" element={<AddNewJob />} />
					<Route path="/jobs" element={<Navigate to="" />} />
				</Route>
				<Route path="talents" element={<TalentsView />} />
				<Route path="applicants">
					<Route path=":status" element={<ApplicantsOverview />} />
					<Route path="/applicants/:status" element={<Navigate to="/:status" />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
			;
		</Routes>
	);
};

export default PrivateRoutes;
