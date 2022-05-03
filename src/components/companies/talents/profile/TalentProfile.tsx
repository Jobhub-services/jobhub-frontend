import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { HEADER_HIEGHT, ASIDE_WIDTH } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, IconButton, Headline, HrDivider, Button, TabPane } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { CVIcon } from '@/assets/icons';
import StatusElem from '@/components/companies/_common/StatusElem';
import { TitleStatus } from '@/constants/company/talent.contants';
import Preferences from './utils/Preferences';
import TalentContact from './utils/TalentContact';
import GeneralInfo from './utils/GeneralInfo';
import { useSearchParams } from 'react-router-dom';
import { Avatar } from '@/components/companies/_common';

const LeftSide = styled.div`
	width: 25%;
	padding: 15px 20px;
	overflow: auto;
	height: 100%;
`;
const RightSide = styled.div`
	width: 75%;
	border-left: 1px solid ${colors.BLACK_12};
	height: 100%;
`;

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
	box-shadow: -5px 0px 20px -15px ${colors.BLACK_7};
	transition: width 0.2s;
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 1400px;
	height: 100%;
	overflow: hidden;
`;
const SButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	width: 100%;
`;
const TalentProfile = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { talentDetails } = useAppSelector((state) => state.talent);
	function onClose() {
		searchParams.delete('detail');
		setSearchParams(searchParams);
	}
	return (
		<MainContainer showed={searchParams.get('detail')}>
			<DetailContainer showed={searchParams.get('detail')}>
				<SubContainer>
					<FlexBox justify="start" gap={10} height="62px" style={{ padding: '5px 10px' }}>
						<IconButton width="30px" height="30px" circle onClick={onClose}>
							<CloseIcon color={colors.BLACK_8} />
						</IconButton>
						<Headline variant="h2" size="sm">
							Talent details
						</Headline>
					</FlexBox>
					<HrDivider color={colors.BLACK_12} top={0} side={0} />
					<FlexBox justify="start" align="start" style={{ height: 'calc(100% - 62px)' }}>
						<LeftSide>
							<Avatar
								img={talentDetails.img}
								role={talentDetails.main_role}
								name={talentDetails.name}
								status={talentDetails.status}
								size={80}
								experience={talentDetails.experience}
							/>
							<StatusElem className="mt-10" title={TitleStatus[talentDetails.status!]} status={talentDetails.status} />
							<HrDivider top={20} side={20} />
							<TalentContact
								address={talentDetails.address}
								email={talentDetails.email}
								linkedin={talentDetails.linkedin}
								git={talentDetails.git}
								website={talentDetails.website}
								twitter={talentDetails.twitter}
								phone={talentDetails.phone}
							/>
							<SButton size="md" startIcon={<CVIcon />}>
								<a target="_blank" href={talentDetails.resume} rel="noreferrer">
									Download Resume
								</a>
							</SButton>
						</LeftSide>
						<RightSide>
							<TabPane activeItem="genrale" paneWidth="20%">
								<TabPane.Pane name="genrale" title="General">
									<GeneralInfo
										talentId={talentDetails.talentId}
										professional_summary={talentDetails.professional_summary}
										skills={talentDetails.skills}
										work_experience={talentDetails.work_experience}
										educations={talentDetails.educations}
										certifications={talentDetails.certifications}
									/>
								</TabPane.Pane>
								<TabPane.Pane name="perferences" title="Perferences">
									<Preferences
										talentId={talentDetails.talentId}
										preferences={talentDetails.preferences}
										desired_location={talentDetails.desired_location}
										other_types={talentDetails.other_types}
										languages={talentDetails.languages}
										roles={talentDetails.roles}
									/>
								</TabPane.Pane>
							</TabPane>
						</RightSide>
					</FlexBox>
				</SubContainer>
			</DetailContainer>
		</MainContainer>
	);
};

export default TalentProfile;
