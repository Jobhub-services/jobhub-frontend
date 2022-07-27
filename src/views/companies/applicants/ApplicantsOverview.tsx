import { LoadingScreen } from '@/components/common/LoadingScreen';
import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/filter/ApplicationFilter';
import styled from 'styled-components';
import { Outlet, useParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ApplicantsByJob from '@/components/companies/applicants/ApplicantsByJob';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { applicationsActions, applicationsDispatcher } from '@/modules/actions/company/applications.actions';
import { ApplicationStatus } from '@/types/company/applications.type';
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
const ApplicantsOverview = () => {
	const navigate = useNavigate();
	const { status } = useParams();
	const { pathname, search } = useLocation();
	const { isLoading, applicantsByJobs } = useAppSelector((state) => state.applications);
	const [isFetching, setIsFetching] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		let params: { [x: string]: string } = {};
		for (var [key, value] of searchParams.entries()) params[key] = value;
		applicationsActions.getApplicantsByJobs(status as ApplicationStatus, true, params, true);
		return function cleanup() {
			applicationsDispatcher.setApplicantsByJobs({}, true);
		};
	}, [status]);

	useEffect(() => {
		setIsFetching(false);
	}, [applicantsByJobs]);

	const onChangeTab = (status: string) => {
		let path = pathname.split('/');
		path[2] = status;
		navigate(`${path.join('/')}${search}`);
	};

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (applicantsByJobs?.page! < applicantsByJobs?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${applicantsByJobs?.page ?? 0}`);
					searchParams.set('limit', `20`);
					applicationsActions.getApplicantsByJobs(status as ApplicationStatus, false, searchParams);
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
						<ApplicantsHeader viewType="byjob" onChangeTab={onChangeTab} count={applicantsByJobs?.count!} />
						<ApplicantsByJob />
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

export default ApplicantsOverview;
