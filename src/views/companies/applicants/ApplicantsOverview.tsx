import { LoadingScreen } from '@/components/common/LoadingScreen';
import ApplicantsHeader from '@/components/companies/applicants/header/ApplicantsHeader';
import ApplicationsFilter from '@/components/companies/applicants/filter/ApplicationFilter';
import styled from 'styled-components';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import ApplicantsByJob from '@/components/companies/applicants/ApplicantsByJob';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { ApplicationStatus } from '@/types/company/applications.type';

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
	useEffect(() => {
		applicationsActions.getApplicantsByJobs(status as ApplicationStatus);
	}, [status]);
	const onChangeTab = (status: string) => {
		let path = pathname.split('/');
		path[2] = status;
		navigate(`${path.join('/')}${search}`);
	};
	return (
		<MainContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<SubContainer className="staak_scrollbar">
						<ApplicantsHeader viewType="byjob" onChangeTab={onChangeTab} count={applicantsByJobs?.count!} />
						<ApplicantsByJob />
					</SubContainer>
					<Outlet />
				</>
			)}
			<ApplicationsFilter />
		</MainContainer>
	);
};

export default ApplicantsOverview;
