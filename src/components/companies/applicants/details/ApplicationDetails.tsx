import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { FlexBox, IconButton, Headline, Button, TabPane } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import Jerome from '@/assets/icons/jerome.jpg';
import InterviewForm from './interview/InterviewForm';
import ApplicationStage from './ApplicationStage';
import InterviewsList from './interview/InterviewsList';
import ApplicationContact from './ApplicationContact';
import ApplicantProfile from './ApplicantProfile';
import ApplicationStatus from './ApplicationStatus';
import { useAppSelector } from '@/utils/appHooks';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Avatar } from '@/components/companies/_common';

const ScrollContainer = styled.div`
	padding: 0 10px;
`;
const DetailContainer = styled.div<any>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${(props) => (props.close ? '0' : '1400px')};
	background: white;
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
	transition: width 0.3s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 1400px;
	height: 100%;
	overflow: hidden;
`;
const SHeader = styled.div`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 10px !important;
`;
const SBody = styled(FlexBox)`
	padding: 10px 20px !important;
	align-items: flex-start !important;
	justify-content: flex-start !important;
	gap: 20px !important;
`;
const AppContact = styled.div`
	padding: 10px 15px;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	width: 30%;
	height: 770px;
`;
const AppDetails = styled.div`
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 770px;
	width: 70%;
`;
const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
	opacity: ${(props) => props.opacity};
`;
const MainContainer = styled.div<any>`
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.showed ? `100% - ${ASIDE_WIDTH}px` : '0')});
	height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
	background-color: #2c2c2c3b;
`;

const ApplicationDetails = () => {
	const { applicantDetails } = useAppSelector((state) => state.applications);
	const [searchParams, setSearchParams] = useSearchParams();
	function onClose() {
		searchParams.delete('detail');
		setSearchParams(searchParams);
	}
	console.log('detail value', searchParams.get('detail'));
	return (
		<MainContainer showed={searchParams.get('detail')}>
			<DetailContainer showed={searchParams.get('detail')}>
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
									img={Jerome}
									size={70}
									name="Jerome Bell"
									role="Fullstack developer"
									color={colors.PURPLE_BASE}
									experience="4 Years of experience"
								/>
								<span style={{ display: 'block', fontSize: '13px', color: `${colors.PURPLE_BASE}`, cursor: 'pointer' }}>View Profile</span>
							</FlexBox>
							<div style={{ background: `${colors.PURPLE_1}`, padding: '5px 10px', borderRadius: '5px', marginTop: '15px' }}>
								<FlexBox justify="space-between" style={{ fontSize: '12px', padding: '5px 0', borderBottom: `1px solid ${colors.BLACK_12}` }}>
									<span>Applied jobs</span>
									<span style={{ color: `${colors.BLACK_4}` }}>22 March 2022</span>
								</FlexBox>
								<div style={{ padding: '10px 0' }}>
									<div>
										<h3 style={{ fontSize: '13px', margin: '0' }}>Product Manager</h3>
										<SSpan>Humain resource administration </SSpan>
									</div>
								</div>
							</div>
							{applicantDetails.applicationStatus !== 'hired' && applicantDetails.applicationStatus !== 'declined' ? (
								<ApplicationStage />
							) : (
								<ApplicationStatus accepted={applicantDetails.applicationStatus === 'hired'} />
							)}
							<hr style={{ borderTop: `1px solid ${colors.BLACK_13}` }} />

							<ApplicationContact />
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
									<div style={{ padding: '0 5px' }}>
										<InterviewForm />
										<Button className="mt-15">Save</Button>
									</div>
								</TabPane.Pane>
							</TabPane>
						</AppDetails>
					</SBody>
				</SubContainer>
			</DetailContainer>
		</MainContainer>
	);
};

export default ApplicationDetails;
