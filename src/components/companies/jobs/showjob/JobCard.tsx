import { Button, FlexBox, IconButton, Tag, DropDown } from 'staak-ui';
import styled from 'styled-components';
import { LocationIcon, MoneyIcon, CalendarFillIcon, DetailIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { DotIcon } from '@/assets/icons';
import { JobCardProps } from '@/models/component';
import TextAvatar from '@/components/companies/jobs/showjob/TextAvatar';
import StatusElem from '@/components/companies/_common/StatusElem';
import { StatusTitle } from '@/constants/company/job.contants';
import AvatarList from './details/AvatarList';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import { Link, useNavigate } from 'react-router-dom';
import { dateWithMonthName } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import DeleteDialogue from '@/components/companies/jobs/showjob/details/DeleteDialogue';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';

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
	height: 160px;
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
const RedSpan = styled.span`
	font-weight: 500;
	color: ${colors.RED_CLEAR_1};
`;
const JobCard = (props: JobCardProps) => {
	const navigate = useNavigate();
	const { jobDetails } = useAppSelector((state) => state.job);
	const [show, setShow] = useState(false);
	const [enableEdit, setEnableEdit] = useState(false);

	useEffect(() => {
		if (jobDetails._id === props._id && enableEdit) {
			setEnableEdit(false);
			dispatchData();
		}
	}, [jobDetails._id]);
	const handleClick = (event: any, value: string) => {
		if (value === 'open') {
			if (jobDetails._id !== props._id) jobActions.getJobDetails(props._id);
			navigate(`details/${props._id}`);
		} else {
			if (value === 'delete') setShow(true);
			else if (value === 'edit') {
				if (jobDetails._id === props._id) {
					dispatchData();
				} else {
					jobActions.getJobDetails(props._id);
					setEnableEdit(true);
				}
			}
		}
	};
	const dispatchData = () => {
		let tmp: any = { ...jobDetails };
		tmp.company_division = { id: jobDetails.company_division, name: jobDetails.company_division };
		tmp.category = { id: jobDetails.category, name: jobDetails.category };
		tmp.work_location = [
			{
				country: { id: jobDetails.work_location?.country._id, name: jobDetails.work_location?.country.name },
				city: jobDetails.work_location?.city,
			},
		];
		tmp.hire_location = jobDetails?.hire_location?.map((elem) => {
			return {
				country: { id: elem.country._id, name: elem?.country.name },
				city: elem?.city,
			};
		});
		tmp.currency = { id: jobDetails.currency?.name, name: jobDetails.currency?.name };
		tmp.skills = jobDetails.skills?.map((elem) => {
			return { value: elem._id, label: elem.name };
		});
		jobDispatcher.saveJobData(tmp);
		navigate('/jobs/new', { state: { action: 'update' } });
	};
	return (
		<>
			{enableEdit && <LoadingScreen />}
			<DeleteDialogue show={show} onClose={() => setShow(false)} jobId={props._id} />
			<SContainer>
				<SBody>
					<SHeader justify="space-between" align="flex-start">
						<TextAvatar title={props.title} subtitle={props.category} onClick={(e: any) => handleClick(e, 'open')} />
						<DropDown listPosition="left" onSelect={handleClick} style={{ zIndex: '1' }}>
							<DropDown.Title>
								<IconButton width="35px" height="20px">
									<DotIcon color={colors.BLACK_4} />
								</IconButton>
							</DropDown.Title>
							<DropDown.Item value="open">Open</DropDown.Item>
							<DropDown.Item value="edit">Edit</DropDown.Item>
							<DropDown.Item value="delete">Delete</DropDown.Item>
						</DropDown>
					</SHeader>
					<SContent>
						<FlexBox justify="space-between" className="mt-10">
							<FlexBox gap={10} justify="flex-start">
								<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.BLUE_CLEAR_5} size="12px">
									{props.job_type}
								</Tag>
								{props.duration && (
									<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.GREEN_CLEAR_5} size="12px">
										{props.duration}
									</Tag>
								)}
								{props.work_remotly && (
									<Tag style={{ paddingTop: '3px', paddingBottom: '3px' }} color={colors.PINK_CLEAR_4} size="12px">
										Remote
									</Tag>
								)}
							</FlexBox>
							<StatusElem title={StatusTitle[props.status!]} status={props.status} />
						</FlexBox>
						<FlexBox justify="space-between" className="mt-20">
							<FlexBox justify="start" gap={15}>
								<FlexBox gap={3} justify="flex-start">
									<MoneyIcon width="18px" height="18px" color={colors.BLACK_9} />
									<SSpan>
										{parseInt(props?.start_salary!).toLocaleString('en-US') ?? 'N/A'}-{parseInt(props.end_salary!).toLocaleString('en-US') ?? 'N/A'}{' '}
										{props.currency?.code}
									</SSpan>
								</FlexBox>
								<FlexBox gap={3} justify="start" align="flex-start">
									<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
									<FlexBox gap={10} justify="start">
										<SSpan>
											{props.work_location?.country ?? 'N/A'}
											{`, ${props.work_location?.city ?? 'N/A'}`}
										</SSpan>
									</FlexBox>
								</FlexBox>
							</FlexBox>
							<FlexBox gap={3} justify="start">
								<CalendarFillIcon color={colors.BLACK_9} />
								<SSpan>{dateWithMonthName(props.createdAt!)}</SSpan>
							</FlexBox>
						</FlexBox>
					</SContent>
				</SBody>
				<SFooter justify="space-between">
					<div>
						<Button startIcon={<DetailIcon />} variant="light" size="sm" onClick={(e: any) => handleClick(e, 'open')}>
							Details
						</Button>
					</div>
					{props.applications!.length > 0 ? (
						<Link to={`/applicants/search/NEW/?jobId=${props._id}`}>
							<AvatarList size={35} totalAvatar={props.applications?.length ?? 0} img={props.applications} />
						</Link>
					) : (
						<RedSpan>No Applicants Yet</RedSpan>
					)}
				</SFooter>
			</SContainer>
		</>
	);
};

JobCard.defaultProps = {
	status: 'ready',
	applicants: [],
	hire_location: [],
};
export default JobCard;
