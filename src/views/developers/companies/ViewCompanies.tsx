import styled from 'styled-components';
import { CompaniesList } from '@/components/developers/companies';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { companiesActions, companiesDispatcher } from '@/modules/actions/developer/companies.actions';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import CompanyFilters from '@/components/developers/companies/filter/CompanyFilters';
import Header from '@/components/developers/companies/Header';
import { LoadingIcon } from '@/assets/icons';
import { checkScrollToButtom } from '@/utils/helpers';
import { colors } from '@/assets/theme';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 20px;
	height: inherit;
`;

const ViewCompanies = () => {
	const { isLoading, companies, isDetailLoading } = useAppSelector((state) => state.companies);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const params = {
			page: 0,
			limit: 20,
		};
		companiesActions.getCompanies(!isDetailLoading, params);
		return function cleanup() {
			companiesDispatcher.setCompanies({}, true);
		};
	}, []);

	useEffect(() => {
		setIsFetching(false);
	}, [companies]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (companies?.page! < companies?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${companies?.page ?? 0}`);
					searchParams.set('limit', `20`);
					companiesActions.getCompanies(false, searchParams);
				}
			}
		}
	};

	return (
		<SContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
					<Header />
					<CompaniesList />
					{isFetching && (
						<div>
							<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
						</div>
					)}
				</SubContainer>
			)}
			<Outlet />
			<CompanyFilters />
		</SContainer>
	);
};

export default ViewCompanies;
