import ApplicationContainer from '@/components/companies/applicants/ApplicationContainer';
import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/ApplicationFilter';
import styled from 'styled-components';
import ApplicationDetails from '@/components/companies/applicants/details/ApplicationDetails';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`;

const ApplicantsOverview = () => {
	return (
		<MainContainer>
			<div style={{ width: '100%', padding: '10px 15px' }}>
				<ApplicantsHeader />
				<SContainer style={{ padding: '10px 0' }}>
					<ApplicationContainer />
					<ApplicationContainer />
					<ApplicationContainer />
				</SContainer>
			</div>
			<ApplicationsFilter />
			<ApplicationDetails />
		</MainContainer>
	);
};

export default ApplicantsOverview;
