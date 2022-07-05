import styled from 'styled-components';
import { CompaniesList } from '@/components/developers/companies';
import { Outlet } from 'react-router-dom';
const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	padding: 10px 20px;
`;

const ViewCompanies = () => {
	return (
		<SContainer>
			<SubContainer>
				<CompaniesList />
			</SubContainer>
			<Outlet />
		</SContainer>
	);
};

export default ViewCompanies;
