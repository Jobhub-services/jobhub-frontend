import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { IconButton, Headline, HrDivider, Button } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import { STitle, SP, SSpan } from './utils/shared.styles';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import styled from 'styled-components';
import StatusElem from '@/components/companies/_common/StatusElem';
import TitleIcon from '../../../../common/jobs/TitleIcon';
import Compensation from './utils/Compensation';
import Qualifications from './utils/Qualifcations';
import { IconProps } from '@/models/component';
import Location from './utils/Location';
import Role from './utils/Role';
import Avatar from './AvatarList';
import Women from '@/assets/icons/women.jpg';
import Man from '@/assets/icons/man.jpg';
import Jerome from '@/assets/icons/jerome.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@/utils/appHooks';
import { dateWithMonthName } from '@/utils/helpers';
import { StatusTitle } from '@/constants/company/job.contants';
import { useEffect } from 'react';
import { jobActions } from '@/modules/actions/company/job.actions';

const MainContainer = styled.div<any>`
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.showed ? `100% - ${EXPANDED_ASIDE_WIDTH}px` : '0')});
	height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
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
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${(props) => (props.showed ? '1400px' : '0')};
	background: white;
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
	transition: width 0.2s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 1400px;
	height: 100%;
	overflow: hidden;
`;

const SScroll = styled.div`
	height: calc(100% - 62px);
	overflow: auto;
	padding: 10px 15px;
`;
const LeftContainer = styled(SScroll)`
	width: 20%;
`;
const RightContainer = styled(SScroll)`
	width: 80%;
	border-left: 1px solid ${colors.BLACK_12};
`;
const SubTitle = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_5};
`;
const JobDetails = () => {
	const { id } = useParams();
	const { jobDetails } = useAppSelector((state) => state.job);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	useEffect(() => {
		if (jobDetails._id !== id) jobActions.getJobDetails(id!);
	}, []);
	function onClose() {
		navigate('/jobs', { replace: true });
	}
	console.log(jobDetails);
	return (
		<MainContainer showed={pathname.includes('/jobs/details/')}>
			<DetailContainer showed={pathname.includes('/jobs/details/')}>
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
							<Button>Edit</Button>
							<Button color="red">Delete</Button>
						</FlexBox>
					</FlexBox>
					<HrDivider color={colors.BLACK_12} />
					<FlexBox height="100%" align="start">
						<LeftContainer className="staak_scrollbar">
							<div>
								<FlexBox justify="space-between">
									<STitle>Applicants</STitle>
									{jobDetails.applicants && jobDetails.applicants!.length > 0 && <SMButton>See All</SMButton>}
								</FlexBox>
								{jobDetails.applicants && jobDetails.applicants!.length > 0 ? (
									<Avatar totalAvatar={50} img={[`${Women}`, `${Man}`, `${Jerome}`, `${Women}`]} />
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
			</DetailContainer>
		</MainContainer>
	);
};

export default JobDetails;
