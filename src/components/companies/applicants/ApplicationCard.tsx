import styled from 'styled-components';
import { FlexBox, Tag, Button } from 'staak-ui';
import { LinkedinIcon, GithubIcon } from 'staak-ui';
import { CalendarFillIcon, CVIcon, LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { ApplicantCardProps } from '@/models/component/companies/applications/applications.interface';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { Avatar } from '@/components/companies/_common';
import { ApplicationStatus } from '@/types/company/applications.type';
import { useAppSelector } from '@/utils/appHooks';

const Status: { [key in ApplicationStatus]?: ApplicationStatus } = { NEW: 'ACCEPTED', ACCEPTED: 'IN_PROGRESS', IN_PROGRESS: 'HIRED' };

const SBody = styled.div`
	height: 182px;
	padding: 10px 10px 0 10px;
`;

const SHeader = styled(FlexBox)`
	height: 86px;
	padding: 8px 10px;
	border-bottom: 1px solid ${colors.BLACK_12};
`;
const SStatus = styled.div<any>`
	background-color: ${(props) => props.color};
	padding: 5px 10px;
	border-radius: 7px;
	font-size: 13px;
	color: ${colors.BLACK_5};
`;
const SWarrap = styled(FlexBox)`
	flex-wrap: wrap;
	overflow: hidden;
	height: 35px;
`;
const SP = styled.p`
	display: -webkit-box;
	margin: 10px 0;
	font-family: inherit;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const CustomizedButton = styled(Button)`
	font-size: 12px !important;
	font-weight: 500 !important;
	white-space: nowrap;
`;
const SSpan = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SCard = styled.div`
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	border: 1px solid ${colors.BLACK_12};
`;
const SButton = styled.div<any>`
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 7px 10px;
	background-color: ${(props) => props.background};
	color: ${(props) => props.color};
	border-radius: 8px;
	font-size: 12px;
	cursor: pointer;
`;
const SEmpty = styled.span`
	color: ${colors.BLACK_9};
`;
const SJob = styled.span`
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const ApplicationCard = (props: ApplicantCardProps) => {
	const { pathname } = useLocation();
	const { applicantDetails, isStatusChange } = useAppSelector((state) => state.applications);
	const { status } = useParams();
	const navigate = useNavigate();

	const viewDetails = () => {
		if (applicantDetails._id !== props._id) applicationsActions.getApplicantDetails(status as ApplicationStatus, props._id);
		const tmp = status ?? 'NEW';
		const path = pathname.startsWith('/applicants') ? `detail/${props._id}` : `/applicants/${tmp}/detail/${props._id}`;
		navigate(`${path}`);
	};

	const onStatusChange = (event: any, status: ApplicationStatus) => {
		applicationsActions.setApplicationStatus(status, props._id);
	};

	return (
		<SCard className={props.className}>
			<SHeader justify="space-between" gap={10}>
				<FlexBox align="flex-start">
					<Avatar
						size={50}
						img={props?.avatar}
						name={`${props?.firstName} ${props?.lastName}`}
						role={props.role?.primary_role}
						status={props?.userStatus}
						experience={props.role?.experience}
					/>
				</FlexBox>
				<CustomizedButton onClick={viewDetails} variant="text">
					View details
				</CustomizedButton>
			</SHeader>
			<SBody>
				<div>
					<SP>{props?.motivation}</SP>
				</div>
				<div className="mt-10">
					<span style={{ color: `${colors.BLACK_9}`, fontWeight: '500' }}>Skills</span>
					<SWarrap justify="start" gap={10} className="mt-5">
						{props?.skills?.map((elem, idx) => {
							return <Tag key={idx}>{elem}</Tag>;
						})}
						{props?.skills?.length === 0 && <SEmpty>Candidate has not yet added any skills</SEmpty>}
					</SWarrap>
				</div>
				<FlexBox justify="flex-start" className="mt-15" gap={10}>
					{props.linkedIn && (
						<SButton background={colors.BLUE_CLEAR_5} color={colors.BLUE_BASE}>
							<LinkedinIcon width="20px" height="20px" color={colors.BLUE_BASE} />
							<a href={props.linkedIn} target="_blank" rel="noreferrer">
								LinkedIn
							</a>
						</SButton>
					)}
					{props.cv && (
						<SButton background={colors.PURPLE_1} color={colors.PURPLE_BASE}>
							<CVIcon width="20px" height="20px" color={colors.PURPLE_BASE} />
							<a href={props.cv} target="_blank" rel="noreferrer">
								CV (.pdf)
							</a>
						</SButton>
					)}
					{props.git && (
						<SButton background={colors.BLACK_13}>
							<GithubIcon />
							<a href={props.git} target="_blank" rel="noreferrer">
								Git
							</a>
						</SButton>
					)}
					{!props.git && !props.cv && !props.linkedIn && <SEmpty>Candidate has not yet added any social profile</SEmpty>}
				</FlexBox>
			</SBody>
			<div className="mt-10" style={{ borderTop: `1px solid ${colors.BLACK_12}`, padding: '10px 10px' }}>
				{props.job && (
					<FlexBox justify="space-between">
						<FlexBox justify="start" gap={10}>
							<span style={{ color: `${colors.BLACK_9}`, fontWeight: '500', whiteSpace: 'nowrap' }}>Applied to</span>
							<SJob>{props?.job?.title}</SJob>
						</FlexBox>
					</FlexBox>
				)}
				<FlexBox justify="space-between" className="mt-5">
					{props.status === 'HIRED' || props.status === 'DECLINED' ? (
						<SStatus color={props.status === 'HIRED' ? colors.GREEN_CLEAR_4 : colors.RED_CLEAR_5}>
							Candidate {props.status === 'HIRED' ? 'hired' : 'declined'}
						</SStatus>
					) : (
						<FlexBox gap={10}>
							<CustomizedButton size="md" variant="light" width="90px" onClick={(event: any) => onStatusChange(event, Status[props?.status!]!)}>
								{isStatusChange ? <LoadingIcon color={colors.PURPLE_BASE} /> : props.status === 'NEW' ? 'Approve' : 'Hire'}
							</CustomizedButton>
							<CustomizedButton size="md" color="red" variant="text" width="85px" onClick={(event: any) => onStatusChange(event, 'DECLINED')}>
								{isStatusChange ? <LoadingIcon color={colors.RED_BASE} /> : 'Decline'}
							</CustomizedButton>
						</FlexBox>
					)}
					<FlexBox gap={5}>
						<CalendarFillIcon width="18px" height="18px" color={colors.BLACK_9} />
						<SSpan>{props?.createdAt && new Date(props?.createdAt).toDateString()}</SSpan>
					</FlexBox>
				</FlexBox>
			</div>
		</SCard>
	);
};

export default ApplicationCard;
