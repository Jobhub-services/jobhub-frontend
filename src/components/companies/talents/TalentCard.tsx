import { FlexBox, HrDivider, Button, GithubIcon, LinkedinIcon, MessageIcon, IconButton } from 'staak-ui';
import { LoadingIcon, LocationIcon, ProfileIcon, WorldIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import StatusElem from '@/components/companies/_common/StatusElem';
import { TitleStatus } from '@/constants/company/talent.contants';
import { CardProps } from '@/models/component/companies/talents/talents.interface';
import { Avatar } from '@/components/companies/_common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';

const SWarrap = styled(FlexBox)`
	flex-wrap: wrap;
	height: 35px;
	overflow: hidden;
`;
const SCard = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	padding: 10px 15px;
`;
const ViewButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
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
const SubTitle = styled.span`
	color: ${colors.BLACK_8};
	display: -webkit-box;
	font-size: 13px;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const Sp = styled.p`
	font-size: 13px;
	margin: 5px 0;
	display: -webkit-box;
	color: ${colors.BLACK_7};
	font-family: inherit;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SIconButton = styled(IconButton)`
	background-color: ${colors.BLUE_CLEAR_5};
	padding: 7px;
`;
const TalentCard = (props: CardProps) => {
	const navigate = useNavigate();
	const { _id } = useAppSelector((state) => state.talent.talentDetails);
	const [chatLoading, setChatLoading] = useState(false);

	const viewProfile = () => {
		navigate(`detail/${props._id}`);
		if (props._id !== _id) talentsActions.getTalentDetails(props._id);
	};

	const onChatClick = () => {
		setChatLoading(true);
		if (props.onChat) props.onChat(props.userId!);
	};
	return (
		<SCard>
			<Avatar
				status={props.status}
				img={props.avatar}
				name={`${props?.firstName} ${props?.lastName}`}
				experience={props.role?.experience}
				role={props.role?.primary_role}
			/>
			<FlexBox justify="space-between" className="mt-10" gap={10}>
				<FlexBox justify="start" gap={5} width="50%">
					<LocationIcon width="18px" height="18px" color={colors.BLACK_8} />
					<SubTitle>
						{props.address?.country ?? 'N/A'}
						{props.address?.city ? `, ${props.address?.city}` : ''}
					</SubTitle>
				</FlexBox>
				<StatusElem title={TitleStatus[props.status!]} status={props.status} />
			</FlexBox>
			<div style={{ height: '137px' }}>
				<div className="mt-10">
					<div>Summary</div>
					<Sp>{props.summary}</Sp>
					{!props.summary && <Sp>He hasn't added summary yet</Sp>}
				</div>
				<div className="mt-10">
					<div>Social profiles</div>
					<SWarrap justify="start" className="mt-10" gap={10}>
						{props.social_profile?.linkedin && (
							<SButton background={colors.BLACK_13} color={colors.BLUE_BASE}>
								<LinkedinIcon width="20px" height="20px" color={colors.BLUE_BASE} />
								<a href={props.social_profile?.linkedin} target="_blank" rel="noreferrer">
									LinkedIn
								</a>
							</SButton>
						)}
						{props.social_profile?.git && (
							<SButton background={colors.BLACK_13}>
								<GithubIcon />
								<a href={props.social_profile?.git} target="_blank" rel="noreferrer">
									Git
								</a>
							</SButton>
						)}

						{props.social_profile?.website && (
							<SButton background={colors.BLACK_13} color={colors.PINK_BASE}>
								<WorldIcon width="20px" height="20px" color={colors.PINK_BASE} />
								<a href={props.social_profile?.website} target="_blank" rel="noreferrer">
									Website
								</a>
							</SButton>
						)}

						{Object.keys(props.social_profile ?? {}).length === 0 && <Sp>He hasn't added social profiles yet</Sp>}
					</SWarrap>
				</div>
			</div>
			<HrDivider top={15} side={0} />
			<FlexBox gap={10}>
				<ViewButton width="100%" size="md" startIcon={<ProfileIcon />} variant="light" onClick={viewProfile}>
					View Profile
				</ViewButton>
				<SIconButton width="35px" height="35px" onClick={onChatClick}>
					{chatLoading ? (
						<FlexBox>
							<LoadingIcon color={colors.BLUE_BASE} width="25px" height="25px" />
						</FlexBox>
					) : (
						<MessageIcon color={colors.BLUE_BASE} />
					)}
				</SIconButton>
			</FlexBox>
		</SCard>
	);
};
export default TalentCard;
