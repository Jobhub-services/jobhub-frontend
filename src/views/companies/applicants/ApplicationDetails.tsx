import styled, { keyframes } from 'styled-components';
import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { FlexBox, IconButton, Headline, Button, TabPane } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import InterviewForm from '@/components/companies/applicants/details/interview/InterviewForm';
import ApplicationStage from '@/components/companies/applicants/details/ApplicationStage';
import InterviewsList from '@/components/companies/applicants/details/interview/InterviewsList';
import ApplicationContact from '@/components/companies/applicants/details/ApplicationContact';
import ApplicantProfile from '@/components/companies/applicants/details/ApplicantProfile';
import ApplicationStatus from '@/components/companies/applicants/details/ApplicationStatus';
import { useAppSelector } from '@/utils/appHooks';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Avatar } from '@/components/companies/_common';
import InterviewSchedule from '@/components/companies/applicants/details/interview/InterviewSchedule';
import { useEffect, useRef } from 'react';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { applicationsActions } from '@/modules/actions/company/applications.actions';

const kwidth = keyframes`
	from {
		width: 0;
	}
	to{
		width:80%
	}
`;
const ScrollContainer = styled.div`
	padding: 0 10px;
`;
const DetailContainer = styled.div<any>`
	position: absolute;
	cursor: default;
	top: 0;
	right: 0;
	height: 100%;
	//width: ${(props) => (props.showed ? '83%' : '0')};
	width: 80%;
	background: white;
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
	animation: ${kwidth} 0.3s;
	//transition: width 0.3s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const SHeader = styled.div`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 10px !important;
	height: 62px;
`;
const SBody = styled(FlexBox)`
	padding: 10px 20px !important;
	align-items: flex-start !important;
	justify-content: flex-start !important;
	gap: 20px !important;
	height: calc(100% - 62px);
`;
const AppContact = styled.div`
	padding: 10px 15px;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	width: 30%;
	height: 100%;
	overflow: auto;
`;
const AppDetails = styled.div`
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 100%;
	width: 70%;
`;
const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
	opacity: ${(props) => props.opacity};
`;
const MainContainer = styled.div<any>`
	position: absolute;
	cursor: pointer;
	right: 0;
	top: 0;
	height: 100%;
	width: 100%;
	//top: ${HEADER_HIEGHT}px;
	//width: calc(${(props) => (props.showed ? `100% - ${EXPANDED_ASIDE_WIDTH}px` : '0')});
	//height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
	background-color: #2c2c2c3b;
`;

const ApplicationDetails = () => {
	const { id } = useParams();
	const parentRef = useRef();
	const navigate = useNavigate();
	const { applicantDetails, isDetailLoading } = useAppSelector((state) => state.applications);

	useEffect(() => {
		if (applicantDetails._id !== id) applicationsActions.getApplicantDetails('NEW', id);
	}, []);

	const onClose = () => {
		navigate(-1);
	};
	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate(-1);
	};
	return (
		<MainContainer showed={true} ref={parentRef} onClick={backUp}>
			<DetailContainer showed={true}>
				{isDetailLoading ? (
					<LoadingScreen />
				) : (
					<SubContainer>
						<SHeader>
							<FlexBox justify="start" gap={10}>
								<IconButton width="30px" height="30px" circle onClick={() => onClose()}>
									<CloseIcon color={colors.BLACK_8} />
								</IconButton>
								<Headline variant="h2" size="sm">
									Applicant details
								</Headline>
							</FlexBox>
						</SHeader>

						<SBody>
							<AppContact>
								<FlexBox justify="space-between">
									<Avatar
										img={applicantDetails.avatar}
										size={70}
										name={`${applicantDetails?.firstName} ${applicantDetails?.lastName}`}
										role={applicantDetails.role?.primary_role}
										status={applicantDetails?.userStatus}
										experience={applicantDetails.role?.experience}
									/>
									<Link to={`/talents/detail/${applicantDetails?.userId}`}>
										<span style={{ display: 'block', fontSize: '13px', color: `${colors.PURPLE_BASE}`, cursor: 'pointer', whiteSpace: 'nowrap' }}>
											View Profile
										</span>
									</Link>
								</FlexBox>
								<div style={{ background: `${colors.PURPLE_1}`, padding: '5px 10px', borderRadius: '5px', marginTop: '15px' }}>
									<FlexBox justify="space-between" style={{ fontSize: '12px', padding: '5px 0', borderBottom: `1px solid ${colors.BLACK_12}` }}>
										<span>Applied jobs</span>
										<span style={{ color: `${colors.BLACK_4}` }}>
											{applicantDetails?.createdAt && new Date(applicantDetails?.createdAt).toDateString()}
										</span>
									</FlexBox>
									<div style={{ padding: '10px 0' }}>
										<div>
											<h3 style={{ fontSize: '13px', margin: '0' }}>{applicantDetails.job?.title}</h3>
											<SSpan>{applicantDetails.job?.category}</SSpan>
										</div>
									</div>
								</div>
								{applicantDetails.status !== 'HIRED' && applicantDetails.status !== 'DECLINED' ? (
									<ApplicationStage />
								) : (
									<ApplicationStatus accepted={applicantDetails.status === 'HIRED'} />
								)}
								<hr style={{ borderTop: `1px solid ${colors.BLACK_13}` }} />

								<ApplicationContact git={applicantDetails?.git} linkedIn={applicantDetails?.linkedIn} website={applicantDetails?.website} />
							</AppContact>
							<AppDetails>
								<TabPane activeItem="applicants" paneWidth="60%">
									<TabPane.Pane name="applicants" title="Applicant Profile">
										<ScrollContainer className="staak_scrollbar">
											<ApplicantProfile />
										</ScrollContainer>
									</TabPane.Pane>
									<TabPane.Pane name="hiring" title="Interviews List">
										<ScrollContainer className="staak_scrollbar">
											<InterviewsList />
										</ScrollContainer>
									</TabPane.Pane>
									<TabPane.Pane name="interviewSchedule" title="Interview Schedule">
										<InterviewSchedule />
									</TabPane.Pane>
								</TabPane>
							</AppDetails>
						</SBody>
					</SubContainer>
				)}
			</DetailContainer>
		</MainContainer>
	);
};

export default ApplicationDetails;
