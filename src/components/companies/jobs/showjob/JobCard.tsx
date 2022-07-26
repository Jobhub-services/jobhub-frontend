import { Button, FlexBox, IconButton, Tag, DropDown } from 'staak-ui';
import styled from 'styled-components';
import { LocationIcon, MoneyIcon, CalendarFillIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { DotIcon } from '@/assets/icons';
import { JobCardProps } from '@/models/component';
import TextAvatar from './TextAvatar';
import StatusElem from '@/components/companies/_common/StatusElem';
import { StatusTitle } from '@/constants/company/job.contants';
import AvatarList from './details/AvatarList';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { Link, useNavigate } from 'react-router-dom';

const SContainer = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
`;
const SHeader = styled(FlexBox)`
	padding: 15px 15px 5px 15px;
	transition: 0.2s ease-in-out;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	cursor: pointer;
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const SContent = styled.div`
	padding: 5px 15px 15px 15px;
`;
const SBody = styled.div`
	height: 225px;
`;

const SFooter = styled(FlexBox)`
	height: 65px;
	padding: 10px 15px !important;
	border-top: 1px solid ${colors.PURPLE_1};
`;
const SSpan = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SPar = styled.pre`
	display: -webkit-box;
	margin: 0 0;
	font-family: inherit;
	font-size: 13px;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${colors.BLACK_8};
	white-space: pre-line;
`;

const RedSpan = styled.span`
	font-weight: 500;
	color: ${colors.RED_CLEAR_1};
`;
const JobCard = (props: JobCardProps) => {
	const navigate = useNavigate();
	const { jobDetails } = useAppSelector((state) => state.job);

	const handleClick = (event: any, value: string) => {
		if (jobDetails._id !== props._id) jobActions.getJobDetails(props._id);
		navigate(`details/${props._id}`);
	};
	const onClick = () => {};

	return (
		<SContainer>
			<SBody>
				<SHeader justify="space-between" align="flex-start">
					<TextAvatar title={props.title} subtitle={props.category} />
					<DropDown listPosition="left" onSelect={handleClick}>
						<DropDown.Title>
							<IconButton width="35px" height="20px">
								<DotIcon color={colors.BLACK_4} />
							</IconButton>
						</DropDown.Title>
						<DropDown.Item>Show</DropDown.Item>
						<DropDown.Item>Edit</DropDown.Item>
						<DropDown.Item>Delete</DropDown.Item>
					</DropDown>
				</SHeader>
				<SContent>
					<SPar>{props.description}</SPar>
					<FlexBox justify="space-between" className="mt-10">
						<FlexBox gap={10} justify="flex-start">
							<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.BLUE_CLEAR_5} size="12px">
								{props.job_type}
							</Tag>
							<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.GREEN_CLEAR_5} size="12px">
								{props.duration}
							</Tag>
						</FlexBox>
						<StatusElem title={StatusTitle[props.status!]} status={props.status} />
					</FlexBox>
					<FlexBox justify="space-between" className="mt-20">
						<div>
							<FlexBox gap={5} justify="flex-start">
								<MoneyIcon width="18px" height="18px" color={colors.BLACK_9} />
								<SSpan>
									{props.start_salary ?? 'N/A'}-{props.end_salary ?? 'N/A'} {props.currency?.code}
								</SSpan>
							</FlexBox>
							<FlexBox gap={5} justify="start" align="flex-start" className="mt-10">
								<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
								<FlexBox gap={10} justify="start">
									{props.work_remotly && <SSpan>Remote</SSpan>}
									<SSpan>
										{props.work_location?.country ?? 'N/A'}
										{`, ${props.work_location?.city ?? 'N/A'}`}
									</SSpan>
								</FlexBox>
							</FlexBox>
						</div>
						<FlexBox gap={5}>
							<CalendarFillIcon color={colors.BLACK_9} />
							<SSpan>{new Date(props.createdAt!).toDateString()}</SSpan>
						</FlexBox>
					</FlexBox>
				</SContent>
			</SBody>
			<SFooter justify="space-between">
				<div>
					<Button variant="light" size="sm" onClick={handleClick}>
						Details
					</Button>
				</div>
				{props.applications!.length > 0 ? (
					<Link to={`/applicants/search/NEW/?jobId=${props._id}`}>
						<AvatarList size={35} totalAvatar={props.applications?.length ?? 0} img={props.applications} onClick={onClick} />
					</Link>
				) : (
					<RedSpan>No Applicants Yet</RedSpan>
				)}
			</SFooter>
		</SContainer>
	);
};

JobCard.defaultProps = {
	status: 'ready',
	applicants: [],
	hire_location: [],
};
export default JobCard;
