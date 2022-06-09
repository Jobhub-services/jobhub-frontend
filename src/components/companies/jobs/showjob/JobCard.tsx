import { Button, FlexBox, IconButton, Tag, DropDown } from 'staak-ui';
import styled from 'styled-components';
import { LocationIcon, CalendarIcon, MoneyIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { DotIcon } from '@/assets/icons';
import { JobCardProps } from '@/models/component';
import TextAvatar from './TextAvatar';
import StatusElem from '@/components/companies/_common/StatusElem';
import { StatusTitle } from '@/constants/company/job.contants';
import LocationElem from '../_common/LocationElem';
import AvatarList from './details/AvatarList';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { useNavigate } from 'react-router-dom';

const SContainer = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
`;
const SBody = styled.div`
	height: 260px;
	padding: 15px 15px;
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
	margin: 5px 0;
	font-family: inherit;
	font-size: 13px;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${colors.BLACK_8};
	white-space: pre-line;
`;
const SGap = styled(FlexBox)`
	gap: ${(props) => props.gap}px;
`;

const RedSpan = styled.span`
	font-weight: 500;
	color: ${colors.RED_CLEAR_1};
`;
const JobCard = (props: JobCardProps) => {
	const navigate = useNavigate();
	const { jobDetails } = useAppSelector((state) => state.job);
	function handleClick(event: any, value?: string) {
		if (jobDetails._id !== props._id) jobActions.getJobDetails(props._id);
		navigate(`details/${props._id}`, { replace: true });
	}
	function onClick() {}
	return (
		<SContainer>
			<SBody>
				<FlexBox justify="space-between" align="flex-start">
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
				</FlexBox>
				<SPar>{props.description}</SPar>
				<FlexBox justify="space-between">
					<SGap gap={10} justify="flex-start">
						<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.BLUE_CLEAR_5} size="12px">
							{props.job_type}
						</Tag>
						<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.GREEN_CLEAR_5} size="12px">
							{props.duration}
						</Tag>
					</SGap>
					<StatusElem title={StatusTitle[props.status!]} status={props.status} />
				</FlexBox>
				<FlexBox justify="space-between" className="mt-10">
					<div>
						<SGap gap={5} justify="flex-start">
							<MoneyIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SSpan>
								{props.start_salary ?? 'N/A'}-{props.end_salary ?? 'N/A'} {props.currency?.code}
							</SSpan>
						</SGap>
						<SGap gap={5} justify="start" align="flex-start" className="mt-5">
							<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SGap gap={10} justify="start">
								{props.work_remotly && <LocationElem size={12} country={'Remote'} />}
								<LocationElem size={12} country={props.work_location?.country ?? 'N/A'} city={props.work_location?.city ?? 'N/A'} />
							</SGap>
						</SGap>
					</div>
					<SGap gap={5}>
						<CalendarIcon width="18px" height="18px" color={colors.BLACK_9} />
						<SSpan>{new Date(props.createdAt!).toDateString()}</SSpan>
					</SGap>
				</FlexBox>
			</SBody>
			<SFooter justify="space-between">
				<div>
					<Button variant="light" size="md" onClick={handleClick}>
						Details
					</Button>
				</div>
				{props.applicants!.length > 0 ? (
					<AvatarList size={35} totalAvatar={50} img={props.applicants} onClick={onClick} />
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
