import { LoadingScreen } from '@/components/common/LoadingScreen';
import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/filter/ApplicationFilter';
import { Outlet, useLocation, Route, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ApplicantsAll from '@/components/companies/applicants/ApplicantsAll';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { ApplicationStatus } from '@/types/company/applications.type';
import { applicationsActions, applicationsDispatcher } from '@/modules/actions/company/applications.actions';
import { useEffect, useState } from 'react';
import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { checkScrollToButtom } from '@/utils/helpers';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 15px;
	height: inherit;
`;

const ApplicantsSearch = () => {
	const navigate = useNavigate();
	const { status } = useParams();
	const { pathname, search } = useLocation();
	const { isLoading, showApplicants } = useAppSelector((state) => state.applications);
	const [isFetching, setIsFetching] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		let params: { [x: string]: string } = {};
		for (var [key, value] of searchParams.entries()) params[key] = value;
		applicationsActions.getShowApplicants(status as ApplicationStatus, true, params, true);
		return function cleanup() {
			applicationsDispatcher.setShowApplicants({}, true);
		};
	}, [status]);

	useEffect(() => {
		setIsFetching(false);
	}, [showApplicants]);

	const onChangeTab = (status: string) => {
		let path = pathname.split('/');
		path[3] = status;
		navigate(`${path.join('/')}${search}`);
	};

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (showApplicants?.page! < showApplicants?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${showApplicants?.page ?? 0}`);
					searchParams.set('limit', `20`);
					applicationsActions.getShowApplicants(status as ApplicationStatus, false, searchParams);
				}
			}
		}
	};

	return (
		<MainContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
						<ApplicantsHeader viewType="search" onChangeTab={onChangeTab} count={showApplicants?.count!} />
						<ApplicantsAll />
						{isFetching && (
							<div>
								<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
							</div>
						)}
					</SubContainer>
					<Outlet />
				</>
			)}
			<ApplicationsFilter />
		</MainContainer>
	);
};

export default ApplicantsSearch;
