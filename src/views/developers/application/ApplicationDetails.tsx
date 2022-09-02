import Header from '@/components/developers/applications/detail/Header';
import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import styled, { keyframes } from 'styled-components';
import { ApplicantIcon, FlexBox, JobIcon, TabPane } from 'staak-ui';
import ApplicationInfo from '@/components/developers/applications/detail/ApplicationInfo';
import { colors } from '@/assets/theme';
import { NewCompanyIcon } from '@/assets/icons';
import JobDescription from '@/components/developers/applications/detail/JobDescription';
import CompanyInfo from '@/components/developers/applications/detail/CompanyInfo';
import { applicationActions } from '@/modules/actions/developer/application.actions';

const APP_DETAIL_HEADER_HEIGHT = 92;

const width = keyframes`
    from{
        width:0;
    }
    to{
        width:80%;
    }
`;
const SHeader = styled.div`
	border-bottom: 1px solid ${colors.BLACK_11};
	height: ${APP_DETAIL_HEADER_HEIGHT};
`;
const MainContainer = styled.div<any>`
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	//top: ${HEADER_HIEGHT}px;
	//width: calc(100% - ${EXPANDED_ASIDE_WIDTH}px);
	//height: calc(100% - ${HEADER_HIEGHT}px);
	background-color: #2c2c2c3b;
`;
const DetailContainer = styled.div<any>`
	cursor: default;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 80%;
	animation: ${width} 0.15s ease-out;
	background: white;
	transition: width 0.2s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const SBody = styled.div`
	height: calc(100% - ${APP_DETAIL_HEADER_HEIGHT}px);
`;

const appTitle = (
	<FlexBox gap={10}>
		<ApplicantIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
		<span>Application info</span>
	</FlexBox>
);
const jobTitle = (
	<FlexBox gap={10}>
		<JobIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
		<span>Job description</span>
	</FlexBox>
);
const companyTitle = (
	<FlexBox gap={10}>
		<NewCompanyIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
		<span>Company info</span>
	</FlexBox>
);
const ApplicationDetails = () => {
	const { id } = useParams();
	const { isDetailLoading, applicationDetails } = useAppSelector((state) => state.talentApplications);
	const navigate = useNavigate();
	const parentRef = useRef(null);
	useEffect(() => {
		if (id && applicationDetails?._id !== id) applicationActions.getApplication(id);
	}, []);
	//functions
	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate(-1);
	};

	return (
		<>
			<MainContainer ref={parentRef} onClick={backUp}>
				<DetailContainer>
					{isDetailLoading ? (
						<LoadingScreen />
					) : (
						<SubContainer>
							<SHeader>
								<Header />
							</SHeader>
							<SBody>
								<TabPane activeItem={'Application'} paneWidth="45%" paneJustify="center">
									<TabPane.Pane name="Application" title={appTitle}>
										<ApplicationInfo />
									</TabPane.Pane>
									<TabPane.Pane name="Job" title={jobTitle}>
										<JobDescription />
									</TabPane.Pane>
									<TabPane.Pane name="Company" title={companyTitle}>
										<CompanyInfo />
									</TabPane.Pane>
								</TabPane>
							</SBody>
						</SubContainer>
					)}
				</DetailContainer>
			</MainContainer>
		</>
	);
};

export default ApplicationDetails;
