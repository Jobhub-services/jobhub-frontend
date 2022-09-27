import styled, { keyframes } from 'styled-components';
import { colors } from '@/assets/theme';
import { HEADER_HIEGHT, EXPANDED_ASIDE_WIDTH } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, IconButton, Headline, HrDivider, Button, TabPane, MessageIcon } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { CVIcon, LoadingIcon } from '@/assets/icons';
import StatusElem from '@/components/companies/_common/StatusElem';
import { TitleStatus } from '@/constants/company/talent.contants';
import Preferences from '@/components/companies/talents/profile/utils/Preferences';
import TalentContact from '@/components/companies/talents/profile/utils/TalentContact';
import GeneralInfo from '@/components/companies/talents/profile/utils/GeneralInfo';
import { Avatar } from '@/components/companies/_common';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { messageActions, messageDispatcher } from '@/modules/actions/company/message.actions';
import { pushNotification } from '@/utils/helpers';

const kwidth = keyframes`
	from {
		width: 0;
	} 
	to{
		width: 83%;
	}
`;
const kFullWidth = keyframes`
	from {
		width: 0;
	} 
	to{
		width: 100%;
	}
`;
const LeftSide = styled.div`
	width: 25%;
	padding: 15px 20px;
	overflow: hidden;
	height: 100%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
`;
const RightSide = styled.div`
	width: 75%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 100%;
`;

const MainContainer = styled.div<any>`
	position: absolute;
	cursor: pointer;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #2c2c2c3b;
`;
const DetailContainer = styled.div<any>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${(props) => (props.onlyDetail ? '100%' : '83%')};
	animation: ${(props) => (props.onlyDetail ? kFullWidth : kwidth)} 0.2s ease-in-out;
	background: white;
	box-shadow: -5px 0px 20px -15px ${colors.BLACK_7};
`;
const SubContainer = styled.div`
	cursor: default;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const SContent = styled(FlexBox)`
	height: calc(100% - 62px);
	padding: 10px 10px;
`;
const SButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	width: 100%;
`;
const TalentProfile = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { talentDetails, isDetailLoading } = useAppSelector((state) => state.talent);
	const { newChat } = useAppSelector((state) => state.companyMessage);
	const { userInfo } = useAppSelector((state) => state.user);
	const [chatLoading, setChatLoading] = useState(false);
	const parentRef = useRef(null);
	const { state } = useLocation();
	const onlyDetail = (state as any)?.onlyDetail ?? false;

	useEffect(() => {
		if (id && talentDetails._id !== id) talentsActions.getTalentDetails(id);
	}, []);

	useEffect(() => {
		if (newChat?.created) {
			messageDispatcher.createChat({ created: false, _id: null });
			navigate(`/messages/${newChat._id}`);
		}
	}, [newChat]);

	const onClose = () => {
		navigate(-1);
	};
	const backUp = (e: any) => {
		if (e.target === parentRef.current) navigate(-1);
	};
	const onChatClick = () => {
		if (talentDetails?.enableContact) {
			setChatLoading(true);
			const data = [talentDetails.userId, userInfo._id];
			messageActions.createConversation(data);
		} else {
			pushNotification.error('You cannot contact talent, please subscribe or renew your current subscription');
		}
	};
	return (
		<MainContainer ref={parentRef} onClick={backUp}>
			<DetailContainer onlyDetail={onlyDetail}>
				{isDetailLoading ? (
					<LoadingScreen />
				) : (
					<SubContainer>
						<FlexBox justify="space-between" gap={10} height="62px" style={{ padding: '5px 20px 5px 10px' }}>
							<FlexBox justify="start" gap={10}>
								<IconButton width="30px" height="30px" circle onClick={onClose}>
									<CloseIcon color={colors.BLACK_8} />
								</IconButton>
								<Headline variant="h2" size="sm">
									Talent details
								</Headline>
							</FlexBox>
							<Button
								onClick={onChatClick}
								color="blue"
								size="md"
								variant="light"
								startIcon={chatLoading ? <></> : <MessageIcon color={colors.BLUE_BASE} />}
							>
								{chatLoading ? <LoadingIcon color={colors.BLUE_BASE} width="25px" height="25px" /> : 'Message'}
							</Button>
						</FlexBox>
						<HrDivider color={colors.BLACK_12} top={0} side={0} />
						<SContent justify="start" align="start" gap={10}>
							<LeftSide>
								<Avatar
									img={talentDetails.avatar}
									role={talentDetails.role?.primary_role}
									name={`${talentDetails?.firstName} ${talentDetails?.lastName}`}
									status={talentDetails.status}
									size={80}
									experience={talentDetails.role?.experience}
								/>
								<StatusElem className="mt-10" title={TitleStatus[talentDetails.status!]} status={talentDetails.status} />
								<HrDivider top={10} side={20} />
								<TalentContact
									address={talentDetails.address}
									email={talentDetails?.user?.email}
									linkedin={talentDetails?.social_profile?.linkedin}
									git={talentDetails?.social_profile?.git}
									website={talentDetails?.social_profile?.website}
									twitter={talentDetails?.social_profile?.twitter}
									phone={talentDetails?.social_profile?.phone}
									salary={talentDetails?.salary}
									currency={talentDetails?.currency}
								/>
								{talentDetails?.resume && talentDetails.resume !== '' && (
									<a target="_blank" href={talentDetails.resume} rel="noreferrer">
										<SButton size="md" startIcon={<CVIcon />}>
											Download Resume
										</SButton>
									</a>
								)}
							</LeftSide>
							<RightSide>
								<TabPane activeItem="genrale" paneWidth="40%" paneJustify="center">
									<TabPane.Pane name="genrale" title="General">
										<GeneralInfo
											_id={talentDetails._id}
											summary={talentDetails.summary}
											skills={talentDetails.skills}
											work_experience={talentDetails.work_experience}
											educations={talentDetails.educations}
											certifications={talentDetails.certifications}
										/>
									</TabPane.Pane>
									<TabPane.Pane name="perferences" title="Perferences">
										<Preferences
											_id={talentDetails._id}
											wants={talentDetails.wants}
											desired_location={talentDetails.desired_location}
											other_job_type={talentDetails?.other_job_type}
											languages={talentDetails.languages}
											role={talentDetails.role}
										/>
									</TabPane.Pane>
								</TabPane>
							</RightSide>
						</SContent>
					</SubContainer>
				)}
			</DetailContainer>
		</MainContainer>
	);
};

export default TalentProfile;
