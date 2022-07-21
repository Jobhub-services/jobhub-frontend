import { LoadingScreen } from '@/components/common/LoadingScreen';
import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/filter/ApplicationFilter';
import { Outlet, useLocation, Route, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ApplicantsAll from '@/components/companies/applicants/ApplicantsAll';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { ApplicationStatus } from '@/types/company/applications.type';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useEffect } from 'react';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;

const ApplicantsSearch = () => {
	const navigate = useNavigate();
	const { status } = useParams();
	const [searchParams] = useSearchParams();
	const { pathname, search } = useLocation();
	const { isLoading, showApplicants } = useAppSelector((state) => state.applications);

	useEffect(() => {
		let params: { [x: string]: string } = {};
		for (var [key, value] of searchParams.entries()) params[key] = value;
		applicationsActions.getShowApplicants(params, status as ApplicationStatus);
	}, [status]);

	const onChangeTab = (status: string) => {
		let path = pathname.split('/');
		path[3] = status;
		navigate(`${path.join('/')}${search}`);
	};
	return (
		<MainContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<div style={{ width: '100%', padding: '10px 15px', height: '100%' }}>
						<ApplicantsHeader viewType="search" onChangeTab={onChangeTab} count={showApplicants?.count!} />
						<ApplicantsAll />
					</div>
					<Outlet />
				</>
			)}
			<ApplicationsFilter />
		</MainContainer>
	);
};

export default ApplicantsSearch;
