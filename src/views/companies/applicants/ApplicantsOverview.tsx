import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/ApplicationFilter';
import styled from 'styled-components';
import { Outlet, Routes, useLocation, Route } from 'react-router-dom';
import ApplicantLayout from '@/components/companies/applicants/ApplicantLayout';
import ApplicationDetails from '@/components/companies/applicants/details/ApplicationDetails';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;

const ApplicantsOverview = () => {
	const location = useLocation();
	return (
		<MainContainer>
			<div style={{ width: '100%', padding: '10px 15px', height: '100%' }}>
				<ApplicantsHeader />
				<ApplicantLayout />
			</div>
			<ApplicationsFilter />
			<ApplicationDetails />
		</MainContainer>
	);
};

export default ApplicantsOverview;
