import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Overview, JobOverview, AddNewJob, ApplicantsOverview, TalentsView, CompanyProfile } from '@/views/companies';
import JobDetails from '@/components/companies/jobs/showjob/details/JobDetails';
import ApplicationDetails from '@/views/companies/applicants/ApplicationDetails';
import ApplicantsSearch from '@/views/companies/applicants/ApplicantsSearch';

const CompanyRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Overview />} />
			<Route path="jobs">
				<Route path="" element={<JobOverview />}>
					<Route path="details/:id" element={<JobDetails />} />
				</Route>
				<Route path="new" element={<AddNewJob />} />
				<Route path="/jobs" element={<Navigate to="" />} />
			</Route>
			<Route path="talents" element={<TalentsView />} />
			<Route path="applicants/:status" element={<ApplicantsOverview />}>
				<Route path="detail/:id" element={<ApplicationDetails />} />
			</Route>
			<Route path="applicants/search/:status" element={<ApplicantsSearch />}>
				<Route path="detail/:id" element={<ApplicationDetails />} />
			</Route>
			<Route path="company/profile/:username" element={<CompanyProfile />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default CompanyRoutes;
