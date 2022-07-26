import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { HeartFilledIcon, HeartIcon, UnavailableIcon } from '@/assets/icons';
import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, CloseIcon, FlexBox, Headline, HrDivider, IconButton, TabPane } from 'staak-ui';
import JobApplication from '@/components/developers/jobs/details/application/JobApplication';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useRef } from 'react';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import ErrorHandler from '@/components/developers/jobs/details/application/ErrorHandler';
import JobMetaInfo from '@/components/developers/jobs/details/JobMetaInfo';
import JobGeneralInfo from '@/components/developers/jobs/details/JobGeneralInfo';

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
	width: 100%;
	height: 100%;
`;
const MainContainer = styled.div<any>`
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 0;
	//top: ${HEADER_HIEGHT}px;
	width: 100%;
	height: 100%;
	//width: calc(${(props) => (props.showed ? `100% - ${EXPANDED_ASIDE_WIDTH}px` : '0')});
	//height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
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

const RightContainer = styled.div`
	width: 77%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 100%;
`;
const JobDetails = () => {
	const { id } = useParams();
	const { jobDetails, errors, succesApplication, isDetailLoading } = useAppSelector((state) => state.developerJobs);
	const loc = useLocation();
	const { state } = loc as { state: { activeTab: string } };
	const navigate = useNavigate();
	const parentRef = useRef(null);
	const newPost = Math.abs(new Date(jobDetails?.createdAt!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
	const qualificationIsEmpty: any = jobDetails?.requirements || jobDetails?.education?.length! > 0 || jobDetails?.certification?.length! > 0;
	const locationIsEmpty: any = jobDetails?.work_location || jobDetails?.hire_location?.length! > 0 || jobDetails?.visa_sponsorship;
	const roleIsEmpty: any =
		jobDetails?.job_type || jobDetails?.duration || jobDetails?.duration_range || jobDetails?.category || jobDetails?.company_division;
	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate('/jobs');
	};
	useEffect(() => {
		console.log('job id ', id);
		if (id && jobDetails?._id !== id) {
			jobActions.getJob(id);
		}
	}, []);
	return (
		<>
			<MainContainer ref={parentRef} showed={true} onClick={backUp}>
				<DetailContainer showed={true}>
					{isDetailLoading ? (
						<LoadingScreen />
					) : (
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
								<JobMetaInfo
									storeData={jobDetails}
									newPost={newPost}
									featured={jobDetails?.featured}
									locationIsEmpty={locationIsEmpty!}
									roleIsEmpty={roleIsEmpty!}
									skills={jobDetails?.skills}
								/>
								<RightContainer>
									<TabPane activeItem={state.activeTab} paneWidth="60%">
										<TabPane.Pane name="Overview" title="Overview">
											<ScrollContainer className="staak_scrollbar">
												<JobGeneralInfo qualificationIsEmpty={qualificationIsEmpty!} storeData={jobDetails} />
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
					)}
				</DetailContainer>
			</MainContainer>
			{(errors?.status || succesApplication?.status) && <ErrorHandler />}
		</>
	);
};

export default JobDetails;
