import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
	CompanyOverview,
	JobOverview,
	AddNewJob,
	ApplicantsOverview,
	TalentsView,
	CompanyProfile,
	TalentProfile,
	JobDetails,
	CompanySettings,
	SecuritySettings,
	AccountSettings,
} from '@/views/companies';

import ApplicationDetails from '@/views/companies/applicants/ApplicationDetails';
import ApplicantsSearch from '@/views/companies/applicants/ApplicantsSearch';

const CompanyRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<CompanyOverview />} />
			<Route path="jobs">
				<Route path="" element={<JobOverview />}>
					<Route path="details/:id" element={<JobDetails />} />
				</Route>
				<Route path="new" element={<AddNewJob />} />
				<Route path="/jobs" element={<Navigate to="" />} />
			</Route>
			<Route path="talents" element={<TalentsView />}>
				<Route path="detail/:id" element={<TalentProfile />} />
			</Route>
			<Route path="applicants/:status" element={<ApplicantsOverview />}>
				<Route path="detail/:id" element={<ApplicationDetails />} />
			</Route>
			<Route path="applicants/search/:status" element={<ApplicantsSearch />}>
				<Route path="detail/:id" element={<ApplicationDetails />} />
			</Route>
			<Route path="company/profile/:username" element={<CompanyProfile />} />
			<Route path="settings" element={<CompanySettings />}>
				<Route path="account" element={<AccountSettings />} />
				<Route path="security" element={<SecuritySettings />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default CompanyRoutes;
