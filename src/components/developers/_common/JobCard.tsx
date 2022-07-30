import { colors } from '@/assets/theme';
import { SContainer } from '@/components/developers/_common/common.style';
import { PJobCard } from '@/models/component/developer/jobs.interface';
import { Button, DropDown, FlexBox, IconButton, Tag } from 'staak-ui';
import styled from 'styled-components';
import JobAvatar from '@/components/developers/jobs/JobAvatar';
import { ClockIcon, DotIcon, HeartFilledIcon, HeartIcon, LoadingIcon, LocationIcon, MoneyIcon, StarIcon, SuccessIcon } from '@/assets/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';

const NEW_JOB_PERIOD = 3;

const SHeader = styled(FlexBox)`
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 15px 15px 10px 15px;
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const SBody = styled.div`
	height: 195px;
`;
const SubBody = styled(FlexBox)`
	padding: 0 15px 15px 15px;
`;

const SFooter = styled(FlexBox)`
	padding: 10px 15px !important;
	border-top: 1px solid ${colors.PURPLE_1};
	height: 56px;
`;
const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SFeat = styled.span<any>`
	background-color: ${(props) => props.color};
	color: white;
	border-bottom-right-radius: 8px;
	border-top-left-radius: 8px;
	padding: 1px 5px;
	font-size: 11px;
	font-weight: 500;
`;
const SIcon = styled.span`
	display: inline-block;
	width: 18px;
	height: 18px;
`;
const SLoc = styled.span<any>`
	display: -webkit-box;
	font-size: 14px;
	font-weight: 500;
	color: ${colors.BLACK_9};
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SButton = styled(FlexBox)`
	gap: 10px;
	background-color: ${colors.GREEN_CLEAR_5};
	padding: 7px 10px;
	border-radius: 8px;
	color: ${colors.BLACK_4};
`;
const JobCard = (props: PJobCard) => {
	const { jobDetails, isSaving } = useAppSelector((state) => state.developerJobs);
	const [saving, setSaving] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isSaving) setSaving(false);
	}, [isSaving]);
	const onApply = () => {
		if (jobDetails?._id !== props._id) jobActions.getJob(props._id);
		navigate(`/jobs/detail/${props._id}`, { state: { activeTab: 'Application' } });
	};

	const onSave = (e: any) => {
		setSaving(true);
		jobActions.saveJob(props._id, !(props.saved ?? false));
	};

	const handleSelect = () => {};

	const newPost = Math.abs(new Date(props.createdAt!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
	const posted_at = moment(new Date(props.createdAt!)).fromNow();
	return (
		<SContainer>
			<SBody>
				<SHeader justify="start" align="flex-start" gap={10}>
					<JobAvatar
						_id={props._id}
						new
						title={props.title}
						subtitle={props.company?.companyName}
						img={props.company?.avatar}
						featured={props.featured}
						company_size={props?.company?.company_size}
					/>
					<DropDown listPosition="left" onSelect={handleSelect}>
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
				<SubBody justify="space-between" align="start" gap={10} className="mt-5">
					<div style={{ width: '63%' }}>
						<FlexBox align="start" justify="start" gap={5}>
							<div style={{ whiteSpace: 'nowrap' }}>Category :</div>
							<SSpan>{props.category ?? 'N/A'}</SSpan>
						</FlexBox>
						<FlexBox gap={5} align="start" justify="start" className="mt-15">
							<div style={{ whiteSpace: 'nowrap' }}>Hires in :</div>
							<SLoc>
								{props.hire_remotly
									? 'Everywhere'
									: props.hire_location?.length! > 0
									? props.hire_location?.map((elem, idx) => {
											return `${elem.city ?? 'N/A'}, ${elem.country ?? 'N/A'}.  `;
									  })
									: 'Not specified'}
							</SLoc>
						</FlexBox>
						<FlexBox gap={5} justify="flex-start" className="mt-15">
							<MoneyIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SSpan>
								{props.start_salary ?? 'N/A'}-{props.end_salary ?? 'N/A'} {props.currency?.code} {props.salary_type ? `/${props.salary_type}` : ''}
							</SSpan>
						</FlexBox>
					</div>
					<div style={{ width: '37%' }}>
						<FlexBox gap={5} justify="end" align="flex-start">
							<SIcon>
								<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
							</SIcon>
							<SLoc>
								{props.work_remotly ? `Remote. ` : ''}
								{props.work_location?.city ? `${props.work_location?.city},` : ''} {props.work_location?.country}
								{!props.work_remotly && !props.work_location && 'N/A'}
							</SLoc>
						</FlexBox>
						<FlexBox gap={10} justify="end" className="mt-15">
							<Tag color={colors.BLUE_CLEAR_5} size="12px">
								{props.job_type}
							</Tag>
							<Tag color={colors.GREEN_CLEAR_5} size="12px">
								{props.duration}
							</Tag>
						</FlexBox>
						<FlexBox justify="end" className="mt-15" gap={15}>
							{props.featured && (
								<SFeat color={colors.RED_BASE}>
									<FlexBox justify="end" gap={5}>
										<StarIcon color={'white'} width="13px" height="13px" />
										<span>Featured</span>
									</FlexBox>
								</SFeat>
							)}
							{newPost < NEW_JOB_PERIOD && <SFeat color={colors.YELLOW_BASE}>New</SFeat>}
						</FlexBox>
					</div>
				</SubBody>
			</SBody>
			<SFooter justify="space-between">
				<FlexBox gap={5}>
					<ClockIcon color={colors.BLACK_9} />
					<SSpan>Posted {posted_at}</SSpan>
				</FlexBox>
				<FlexBox gap={10}>
					<Button
						onClick={onSave}
						variant="text"
						size="sm"
						color={props.saved ? 'red' : 'purple'}
						startIcon={!saving ? props.saved ? <HeartFilledIcon /> : <HeartIcon /> : ''}
					>
						{saving ? <LoadingIcon color={colors.RED_BASE} /> : 'Save'}
					</Button>
					{props.applied ? (
						<SButton>
							<SuccessIcon width="18px" height="18px" />
							Applied
						</SButton>
					) : (
						<Button size="sm" variant="text" onClick={onApply}>
							Apply
						</Button>
					)}
				</FlexBox>
			</SFooter>
		</SContainer>
	);
};

export default JobCard;
