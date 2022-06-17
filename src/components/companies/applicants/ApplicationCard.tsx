import styled from 'styled-components';
import { FlexBox, Tag, Button } from 'staak-ui';
import { LinkedinIcon, GithubIcon } from 'staak-ui';
import { CalendarIcon, CVIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { ApplicantCardProps } from '@/models/component/companies/applications/applications.interface';
import { useSearchParams, useParams } from 'react-router-dom';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { Avatar } from '@/components/companies/_common';
import { ApplicationStatus } from '@/types/company/applications.type';

const Status: { [key in ApplicationStatus]?: ApplicationStatus } = { new: 'process', process: 'interview', interview: 'hired' };

const CustomizedButton = styled(Button)`
	font-size: 12px !important;
	font-weight: 500 !important;
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

const ApplicationCard = (props: ApplicantCardProps) => {
	const { status } = useParams();
	const [searchParams, setSearchParams] = useSearchParams({});
	function viewDetails(id: string) {
		applicationsActions.getApplicantDetails(status as ApplicationStatus, id);
		searchParams.set('detail', id);
		setSearchParams(searchParams);
	}
	function onStatusChange(event: any, status: ApplicationStatus) {
		console.log('status of the candidat ', status, props.applicantId);
		applicationsActions.setApplicationStatus(status, props.applicantId);
	}
	return (
		<SCard>
			<FlexBox justify="space-between" style={{ padding: '8px 10px', borderBottom: `1px solid ${colors.BLACK_12}` }}>
				<FlexBox align="flex-start">
					<Avatar size={50} img={props.img} name={props.name} role={props.role} status="ready" />
				</FlexBox>
				<CustomizedButton onClick={() => viewDetails(props.applicantId)} variant="text">
					View details
				</CustomizedButton>
			</FlexBox>
			<div style={{ padding: '10px 10px 0 10px' }}>
				<div>
					<p style={{ height: '45px', overflow: 'hidden', margin: '10px 0' }}>{props.cover_letter}</p>
				</div>
				<FlexBox justify="flex-start" className="mt-10">
					<span style={{ color: `${colors.BLACK_9}`, fontWeight: '500' }}>Skills</span>
					<FlexBox gap={10} className="ml-10">
						{props.skils?.map((elem, idx) => {
							return <Tag key={idx}>{elem.label}</Tag>;
						})}
					</FlexBox>
				</FlexBox>
				<FlexBox justify="flex-start" className="mt-15" gap={10}>
					<SButton background={colors.BLUE_CLEAR_5} color={colors.BLUE_BASE}>
						<LinkedinIcon width="20px" height="20px" color={colors.BLUE_BASE} />
						<a href={props.linkedIn} target="_blank" rel="noreferrer">
							LinkedIn
						</a>
					</SButton>
					<SButton background={colors.PURPLE_1} color={colors.PURPLE_BASE}>
						<CVIcon width="20px" height="20px" color={colors.PURPLE_BASE} />
						<a href={props.cv} target="_blank" rel="noreferrer">
							CV (.pdf)
						</a>
					</SButton>
					<SButton background={colors.BLACK_13}>
						<GithubIcon />
						<a href={props.github} target="_blank" rel="noreferrer">
							Git
						</a>
					</SButton>
				</FlexBox>
			</div>
			<div className="mt-10" style={{ borderTop: `1px solid ${colors.BLACK_12}`, padding: '10px 10px' }}>
				{props.job && (
					<FlexBox justify="space-between">
						<FlexBox justify="start" gap={10}>
							<span style={{ color: `${colors.BLACK_9}`, fontWeight: '500' }}>Applied to</span>
							<span style={{}}>Senior frontend developer</span>
						</FlexBox>
					</FlexBox>
				)}
				<FlexBox justify="space-between" className="mt-5">
					<FlexBox gap={10}>
						<CustomizedButton size="md" variant="light" onClick={(event: any) => onStatusChange(event, Status[props.applicationStatus!]!)}>
							Approve
						</CustomizedButton>
						<CustomizedButton size="md" color="red" variant="text" onClick={(event: any) => onStatusChange(event, 'declined')}>
							Decline
						</CustomizedButton>
					</FlexBox>
					<FlexBox gap={5}>
						<CalendarIcon width="18px" height="18px" color={colors.BLACK_9} />
						<SSpan>{props.applied}</SSpan>
					</FlexBox>
				</FlexBox>
			</div>
		</SCard>
	);
};

export default ApplicationCard;
