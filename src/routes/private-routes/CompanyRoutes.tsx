import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Overview, JobOverview, AddNewJob, ApplicantsOverview, TalentsView } from '@/views/companies';
import JobDetails from '@/components/companies/jobs/showjob/details/JobDetails';
import ApplicationDetails from '@/components/companies/applicants/details/ApplicationDetails';
import ApplicantsByJob from '@/components/companies/applicants/ApplicantsByJob';
import ApplicantLayout from '@/components/companies/applicants/ApplicantLayout';
import ApplicantsSearch from '@/components/companies/applicants/ApplicantsSearch';

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
				<Route path="" element={<ApplicantLayout />}>
					<Route path="" element={<ApplicantsByJob />} />
					<Route path="search" element={<ApplicantsSearch />} />
				</Route>
				<Route path="detail/:id" element={<ApplicationDetails />} />
				<Route path="/applicants/:status" element={<Navigate to="/:status" />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default CompanyRoutes;
