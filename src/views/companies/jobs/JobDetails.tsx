import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { IconButton, Headline, HrDivider, Button } from 'staak-ui';
import { colors } from '@/assets/theme';
import { CloseIcon } from '@/assets/icons';
import { FlexBox } from 'staak-ui';
import { STitle, SP, SSpan } from '../../../components/companies/jobs/showjob/details/utils/shared.styles';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import styled, { keyframes } from 'styled-components';
import StatusElem from '@/components/companies/_common/StatusElem';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import Compensation from '@/components/companies/jobs/showjob/details/utils/Compensation';
import Qualifications from '@/components/companies/jobs/showjob/details/utils/Qualifcations';
import { IconProps } from '@/models/component';
import Location from '@/components/companies/jobs/showjob/details/utils/Location';
import Role from '@/components/companies/jobs/showjob/details/utils/Role';
import Avatar from '@/components/companies/jobs/showjob/details/AvatarList';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@/utils/appHooks';
import { dateWithMonthName, pushNotification } from '@/utils/helpers';
import { StatusTitle } from '@/constants/company/job.contants';
import { useEffect, useRef } from 'react';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { ToastContainer } from 'react-toastify';

const kwidth = keyframes`
	from {
		width:0;
	}
	to {
		width:83%;
	}
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
const RedSpan = styled.span`
	font-weight: 500;
	color: ${colors.RED_CLEAR_1};
`;
const SMButton = styled.span`
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const DetailContainer = styled.div<any>`
	cursor: default;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 83%;
	animation: ${kwidth} 0.2s ease-in-out;
	background: white;
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const SScroll = styled.div`
	height: calc(100% - 62px);
	overflow: auto;
	padding: 10px 15px;
`;
const LeftContainer = styled(SScroll)`
	width: 22%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
`;
const RightContainer = styled(SScroll)`
	width: 78%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
`;
const SubTitle = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_5};
`;
const JobDetails = () => {
	const parentRef = useRef();
	const { id } = useParams();
	const { jobDetails, isDetailLoading, isJobDeleted } = useAppSelector((state) => state.job);
	const navigate = useNavigate();

	useEffect(() => {
		if (jobDetails._id !== id) jobActions.getJobDetails(id!);
	}, []);

	useEffect(() => {
		if (isJobDeleted) {
			pushNotification.success('Job deleted successfully');
			jobDispatcher.setDeleteJob(false, false);
			navigate(-1);
		}
	}, [isJobDeleted]);
	const onClose = () => {
		navigate(-1);
	};

	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate(-1);
	};
	const handleDelete = () => {
		jobActions.deleteJob(jobDetails._id);
	};
	return (
		<MainContainer ref={parentRef} onClick={backUp}>
			<DetailContainer>
				{isDetailLoading ? (
					<LoadingScreen />
				) : (
					<SubContainer>
						<FlexBox justify="space-between" height="62px" style={{ padding: '5px 10px' }}>
							<FlexBox gap={10}>
								<IconButton width="30px" height="30px" circle onClick={() => onClose()}>
									<CloseIcon color={colors.BLACK_8} />
								</IconButton>
								<Headline variant="h2" size="sm">
									Job details
								</Headline>
							</FlexBox>
							<FlexBox gap={10}>
								{/*<Button>Edit</Button>*/}
								<Button color="red" variant="text" size="md" startIcon={<CloseIcon />} onClick={handleDelete}>
									Delete
								</Button>
							</FlexBox>
						</FlexBox>
						<HrDivider color={colors.BLACK_12} />
						<FlexBox height="100%" align="start" gap={10} style={{ padding: '10px' }}>
							<LeftContainer className="staak_scrollbar">
								<div>
									<FlexBox justify="space-between">
										<STitle>Applicants</STitle>
										{jobDetails.applications && jobDetails.applications!.length > 0 && (
											<Link to={`/applicants/search/NEW/?jobId=${jobDetails._id}`}>
												<SMButton>See All</SMButton>
											</Link>
										)}
									</FlexBox>
									{jobDetails?.applications && jobDetails?.applications!.length > 0 ? (
										<Avatar totalAvatar={jobDetails.applications?.length ?? 0} img={jobDetails?.applications} />
									) : (
										<RedSpan>No Applicants Yet</RedSpan>
									)}
								</div>
								<HrDivider color={colors.BLACK_12} top={15} />
								<Role
									company_division={jobDetails.company_division}
									_id={jobDetails._id}
									category={jobDetails.category}
									job_type={jobDetails.job_type}
									duration={jobDetails.duration}
									duration_range={jobDetails.duration_range}
								/>
								<HrDivider color={colors.BLACK_12} top={20} />
								<Location
									_id={jobDetails._id}
									work_location={jobDetails.work_location}
									hire_location={jobDetails.hire_location}
									visa_sponsorship={jobDetails.visa_sponsorship}
									work_remotly={jobDetails.work_remotly}
									hire_remotly={jobDetails.hire_remotly}
								/>
							</LeftContainer>
							<RightContainer className="staak_scrollbar">
								<div>
									<STitle style={{ marginBottom: '5px' }}>{jobDetails.title}</STitle>
									<FlexBox justify="start" gap={50}>
										<StatusElem style={{ marginTop: '0' }} title={StatusTitle[jobDetails.status!]} status={jobDetails.status} />
										<FlexBox gap={5}>
											<SubTitle>Posted</SubTitle>
											<SSpan>{dateWithMonthName(jobDetails.createdAt!)}</SSpan>
										</FlexBox>
									</FlexBox>
								</div>
								<div className="mt-10">
									<div>
										<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
										<SP>{jobDetails.description}</SP>
									</div>
									<div>
										<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
										<SP>{jobDetails.responsabilities}</SP>
									</div>
								</div>
								<HrDivider color={colors.BLACK_12} top={20} />
								<Compensation
									_id={jobDetails._id}
									end_salary={jobDetails.end_salary}
									start_salary={jobDetails.start_salary}
									currency={jobDetails.currency}
									benefits={jobDetails.benefits}
								/>
								<HrDivider color={colors.BLACK_12} top={20} />
								<Qualifications
									_id={jobDetails._id}
									education={jobDetails.education}
									certification={jobDetails.certification}
									skills={jobDetails.skills}
									requirements={jobDetails.requirements}
									questions={jobDetails.questions}
								/>
							</RightContainer>
						</FlexBox>
					</SubContainer>
				)}
			</DetailContainer>
		</MainContainer>
	);
};

export default JobDetails;
