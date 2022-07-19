import styled from 'styled-components';
import { CompaniesList } from '@/components/developers/companies';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { companiesActions } from '@/modules/actions/developer/companies.actions';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import CompanyFilters from '@/components/developers/companies/filter/CompanyFilters';
import Header from '@/components/developers/companies/Header';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	padding: 10px 20px;
	height: inherit;
`;

const ViewCompanies = () => {
	const { isLoading } = useAppSelector((state) => state.companies);
	useEffect(() => {
		companiesActions.getCompanies();
	}, []);
	return (
		<SContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<SubContainer>
					<Header />
					<CompaniesList />
				</SubContainer>
			)}
			<Outlet />
			<CompanyFilters />
		</SContainer>
	);
};

export default ViewCompanies;
