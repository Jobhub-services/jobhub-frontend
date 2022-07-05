import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { HeartFilledIcon, HeartIcon, StarIcon, UnavailableIcon } from '@/assets/icons';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, CloseIcon, FlexBox, Headline, HrDivider, IconButton, TabPane } from 'staak-ui';
import JobHeader from '@/components/developers/jobs/details/JobHeader';
import JobDescription from '@/components/developers/jobs/details/JobDescription';
import Role from '@/components/developers/jobs/details/Role';
import Location from '@/components/developers/jobs/details/Location';
import Skills from '@/components/developers/jobs/details/Skills';
import Compensation from '@/components/developers/jobs/details/Compensation';
import Qualifications from '@/components/developers/jobs/details/Qualifications';
import JobApplication from '@/components/developers/jobs/details/application/JobApplication';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useRef } from 'react';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import ErrorHandler from '@/components/developers/jobs/details/application/ErrorHandler';

const width = keyframes`
    from{
        width:0;
    }
    to{
        width:80%;
    }
`;
const ScrollContainer = styled.div`
	padding: 0 10px;
`;
const SFeat = styled.span<any>`
	background-color: ${(props) => props.color};
	color: white;
	border-radius: 5px;
	padding: 1px 5px;
	font-size: 12px;
	font-weight: 500;
`;
const MainContainer = styled.div<any>`
	cursor: pointer;
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.showed ? `100% - ${ASIDE_WIDTH}px` : '0')});
	height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
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
	//width: ${(props) => (props.showed ? '80%' : '0')};
	background: white;
	//box-shadow: -5px 0px 20px -15px ${colors.BLACK_7};
	transition: width 0.2s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const SBody = styled(FlexBox)`
	padding: 10px 15px !important;
	align-items: flex-start !important;
	justify-content: flex-start !important;
	gap: 15px !important;
	height: calc(100% - 62px);
`;
const LeftContainer = styled.div`
	width: 23%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	padding: 10px 15px;
	height: 100%;
	overflow: auto;
`;
const RightContainer = styled.div`
	width: 77%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 100%;
`;
const JobDetails = () => {
	const { jobDetails, errors, succesApplication, isDetailLoading } = useAppSelector((state) => state.developerJobs);
	const loc = useLocation();
	const { pathname, state } = loc as { pathname: string; state: { activeTab: string } };
	const navigate = useNavigate();
	const parentRef = useRef(null);
	const newPost = Math.abs(new Date(jobDetails?.createdAt!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
	const qualificationIsEmpty = jobDetails?.requirements || jobDetails?.education?.length! > 0 || jobDetails?.certification?.length! > 0;
	const locationIsEmpty = jobDetails?.work_location || jobDetails?.hire_location?.length! > 0 || jobDetails?.visa_sponsorship;
	const roleIsEmpty =
		jobDetails?.job_type || jobDetails?.duration || jobDetails?.duration_range || jobDetails?.category || jobDetails?.company_division;
	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate('/jobs');
	};
	useEffect(() => {
		const jobId = pathname.split('/').at(-1);
		if (jobDetails?._id !== jobId) {
			jobActions.getJob(jobId!);
		}
	}, []);
	return (
		<>
			<MainContainer ref={parentRef} showed={true} onClick={backUp}>
				<DetailContainer showed={true}>
					<SubContainer>
						<FlexBox justify="space-between" height="62px" style={{ padding: '5px 10px' }}>
							<FlexBox gap={10}>
								<IconButton width="30px" height="30px" circle onClick={() => navigate(-1)}>
									<CloseIcon color={colors.BLACK_8} />
								</IconButton>
								<Headline variant="h2" size="sm">
									Job details
								</Headline>
							</FlexBox>
							<FlexBox gap={0}>
								<Button
									variant="text"
									size="md"
									color={jobDetails?.saved ? 'red' : 'purple'}
									startIcon={jobDetails?.saved ? <HeartFilledIcon /> : <HeartIcon />}
								>
									Save
								</Button>
								<Button
									style={{ background: 'none', color: `${colors.RED_BASE}` }}
									variant="text"
									size="md"
									color={jobDetails?.saved ? 'red' : 'purple'}
									startIcon={<UnavailableIcon />}
								>
									Not interested
								</Button>
							</FlexBox>
						</FlexBox>
						<HrDivider color={colors.BLACK_12} top={0} side={0} />
						<SBody>
							<LeftContainer className="staak_scrollbar">
								<FlexBox justify="start" gap={15}>
									{jobDetails?.featured && (
										<SFeat color={colors.RED_BASE}>
											<FlexBox justify="end" gap={5}>
												<StarIcon color={'white'} width="13px" height="13px" />
												<span>Featured</span>
											</FlexBox>
										</SFeat>
									)}
									{newPost < 7 && <SFeat color={colors.YELLOW_BASE}>New</SFeat>}
								</FlexBox>
								{roleIsEmpty && (
									<>
										<Role />
										<HrDivider color={colors.BLACK_12} top={10} side={0} />
									</>
								)}
								{locationIsEmpty && (
									<>
										<Location />
										<HrDivider color={colors.BLACK_12} top={10} side={0} />
									</>
								)}
								{jobDetails?.skills?.length! > 0 && <Skills />}
							</LeftContainer>
							<RightContainer>
								<TabPane activeItem={state.activeTab} paneWidth="60%">
									<TabPane.Pane name="Overview" title="Overview">
										<ScrollContainer className="staak_scrollbar">
											<JobHeader />
											<JobDescription />
											<HrDivider color={colors.BLACK_12} top={10} side={0} />
											<Compensation />
											{qualificationIsEmpty && (
												<>
													<HrDivider color={colors.BLACK_12} top={10} side={0} />
													<Qualifications />
												</>
											)}
										</ScrollContainer>
									</TabPane.Pane>
									<TabPane.Pane name="Application" title="Application">
										<ScrollContainer className="staak_scrollbar">
											<JobApplication />
										</ScrollContainer>
									</TabPane.Pane>
								</TabPane>
							</RightContainer>
						</SBody>
					</SubContainer>
				</DetailContainer>
			</MainContainer>
			{(errors?.status || succesApplication?.status) && <ErrorHandler />}
			{isDetailLoading && <LoadingScreen />}
		</>
	);
};

export default JobDetails;
