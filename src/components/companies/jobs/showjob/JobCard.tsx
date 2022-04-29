import { Button, FlexBox, IconButton, SimpleLink, Tag, DropDown } from 'staak-ui';
import styled from 'styled-components';
import { LocationIcon, CalendarIcon, MoneyIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { UsersIcon, DotIcon } from '@/assets/icons';
import { JobCardProps } from '@/models/component';
import TextAvatar from './TextAvatar';
import StatusElem from '@/components/companies/_common/StatusElem';
import { StatusTitle } from '@/constants/company/job.contants';
import LocationElem from '../_common/LocationElem';
import AvatarList from './details/AvatarList';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
const SPar = styled.p`
	font-size: 13px;
	height: 60px;
	overflow: hidden;
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
	const { showDetails, jobDetails } = useAppSelector((state) => state.job);
	function handleClick(event: any, jobId: number, value?: string) {
		jobActions.setShowJobDetails(!showDetails);
		if (jobDetails.jobId !== props.jobId) jobActions.getJobDetails(props.jobId);
		navigate(`details/${jobId}`, { replace: true });
	}
	function onClick() {}
	return (
		<SContainer>
			<SBody>
				<FlexBox justify="space-between" align="flex-start">
					<TextAvatar title={props.title} subtitle={props.category} />
					<DropDown listPosition="left">
						<DropDown.Title>
							<IconButton width="35px" height="20px">
								<DotIcon color={colors.BLACK_4} />
							</IconButton>
						</DropDown.Title>
						<DropDown.Item onSelect={(event: any, value: string) => handleClick(null, props.jobId, value)}>Show</DropDown.Item>
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
								{props.start_salary ?? 'N/A'}-{props.end_salary ?? 'N/A'} {props.currency}
							</SSpan>
						</SGap>
						<SGap gap={5} align="flex-start" className="mt-5">
							<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SGap gap={10} justify="start">
								{props.work_remotly && <LocationElem size={12} country={'Remote'} />}
								<LocationElem size={12} country={props.work_location?.country ?? 'N/A'} city={props.work_location?.city ?? 'N/A'} />
							</SGap>
						</SGap>
					</div>
					<SGap gap={5}>
						<CalendarIcon width="18px" height="18px" color={colors.BLACK_9} />
						<SSpan>{props.posted?.toDateString()}</SSpan>
					</SGap>
				</FlexBox>
			</SBody>
			<SFooter justify="space-between">
				<div>
					<Button variant="light" size="md" onClick={(event: any) => handleClick(event, props.jobId)}>
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
