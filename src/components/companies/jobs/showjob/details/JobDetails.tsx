import { useEffect, useState } from 'react';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { IconButton, Headline, HrDivider, Button } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import { STitle, SP, SSpan } from './utils/shared.styles';
import { DescriptionIcon, ResponsibleIcon } from '@/assets/icons';
import styled from 'styled-components';
import StatusElem from '@/components/companies/_common/StatusElem';
import TitleIcon from '../../_common/TitleIcon';
import Compensation from './utils/Compensation';
import Qualifications from './utils/Qualifcations';
import { IconProps } from '@/models/component';
import Location from './utils/Location';
import Role from './utils/Role';
import { useAppSelector } from '@/utils/appHooks';
import Avatar from './AvatarList';
import Women from '@/assets/icons/women.jpg';
import Man from '@/assets/icons/man.jpg';
import Jerome from '@/assets/icons/jerome.jpg';
import { jobActions } from '@/modules/actions/company/job.actions';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div<any>`
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.showed ? `100% - ${ASIDE_WIDTH}px` : '0')});
	height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
	background-color: #2c2c2c3b;
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
	const navigate = useNavigate();
	const { showDetails } = useAppSelector((state) => state.job);
	useEffect(() => {
		jobActions.setShowJobDetails(true);
	}, []);
	function onClose() {
		jobActions.setShowJobDetails(false);
		navigate('/jobs', { replace: true });
	}
	return (
		<MainContainer showed={showDetails}>
			<DetailContainer showed={showDetails}>
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
									<span style={{ color: `${colors.PURPLE_BASE}`, cursor: 'pointer' }}>See All</span>
								</FlexBox>
								<Avatar totalAvatar={50} img={[`${Women}`, `${Man}`, `${Jerome}`, `${Women}`]} />
							</div>
							<HrDivider color={colors.BLACK_12} top={15} />
							<Role />
							<HrDivider color={colors.BLACK_12} top={20} />
							<Location />
						</LeftContainer>
						<RightContainer className="staak_scrollbar">
							<div>
								<STitle style={{ marginBottom: '5px' }}>Senior Frontend developer</STitle>
								<FlexBox justify="start" gap={50}>
									<StatusElem style={{ marginTop: '0' }} title="Active" status="ready" />
									<FlexBox gap={5}>
										<SubTitle>Posted</SubTitle>
										<SSpan>April 17. 2022</SSpan>
									</FlexBox>
								</FlexBox>
							</div>
							<div className="mt-10">
								<div>
									<TitleIcon title="Description" icon={(props: IconProps) => <DescriptionIcon {...props} />} />
									<SP>
										Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users. Our
										team is one of the fastest growing within AgencyAnalytics! We work fast and iteratively to ensure our products are modern, easy to
										use and ultimately make our users happy. More importantly, we're looking for people to build a team of collaborative, supportive
										and high-skilled engineers that take our products to the next level
									</SP>
								</div>
								<div>
									<TitleIcon title="Responsabilities" icon={(props: IconProps) => <ResponsibleIcon {...props} />} />
									<SP>
										1- Develop and iterate on new features to deliver amazing experiences <br />
										2- Continuously review, improve and adjust all aspects of the user experience
										<br />
										3- Promote a culture of collaboration, care and high quality
										<br />
										4- Regularly conduct peer reviews, code audits and promote good practices
										<br />
										5- Work with other teams to build a technical ecosystem that enables high velocity, low-waste development
										<br />
									</SP>
								</div>
							</div>
							<HrDivider color={colors.BLACK_12} top={20} />
							<Compensation />
							<HrDivider color={colors.BLACK_12} top={20} />
							<Qualifications />
						</RightContainer>
					</FlexBox>
				</SubContainer>
			</DetailContainer>
		</MainContainer>
	);
};

export default JobDetails;
