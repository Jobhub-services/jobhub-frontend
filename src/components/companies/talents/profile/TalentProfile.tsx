import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { HEADER_HIEGHT, ASIDE_WIDTH } from '@/constants/app.constants';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, IconButton, Headline, HrDivider, Button, TabPane } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import ProfileAvatar from './ProfileAvatar';
import Women from '@/assets/icons/women.jpg';
import { CVIcon } from '@/assets/icons';
import TalentStatus from './TalentStatus';
import Preferences from './Preferences';
import TalentContact from './TalentContact';
import GeneralInfo from './GeneralInfo';

const MainContainer = styled.div<any>`
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.close ? '0' : `100% - ${ASIDE_WIDTH}px`)});
	height: calc(${(props) => (props.close ? '0' : `100% - ${HEADER_HIEGHT}px`)});
	background-color: #2c2c2c3b;
`;
const DetailContainer = styled.div<any>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${(props) => (props.close ? '0' : '1400px')};
	background: white;
	box-shadow: -5px 0px 20px -15px ${colors.BLACK_7};
	transition: width 0.3s;
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
	const { showDetails } = useAppSelector((state) => state.talent);
	return (
		<MainContainer close={!showDetails}>
			<DetailContainer>
				<SubContainer>
					<FlexBox justify="start" gap={10} height="62px" style={{ padding: '5px 10px' }}>
						<IconButton
							width="30px"
							height="30px"
							circle
							onClick={() => {
								talentsActions.showTalentDetails(false);
							}}
						>
							<CloseIcon color={colors.BLACK_8} />
						</IconButton>
						<Headline variant="h2" size="sm">
							Talent details
						</Headline>
					</FlexBox>
					<HrDivider color={colors.BLACK_12} top={0} side={0} />
					<FlexBox justify="start" align="start" style={{ height: 'calc(100% - 62px)' }}>
						<div style={{ width: '25%', padding: '15px 20px', overflow: 'auto', height: '100%' }}>
							<ProfileAvatar img={Women} role="Frontend developer" name="Merguerita Burns" />
							<TalentStatus title="Ready To Interview" status="ready" />
							<HrDivider top={20} side={20} />
							<TalentContact />
							<SButton size="md" startIcon={<CVIcon />}>
								Download Resume
							</SButton>
						</div>
						<div style={{ width: '75%', borderLeft: `1px solid ${colors.BLACK_12}`, height: '100%' }}>
							<TabPane activeItem="genrale" paneWidth="20%">
								<TabPane.Pane name="genrale" title="General">
									<GeneralInfo />
								</TabPane.Pane>
								<TabPane.Pane name="perferences" title="Perferences">
									<Preferences />
								</TabPane.Pane>
							</TabPane>
						</div>
					</FlexBox>
				</SubContainer>
			</DetailContainer>
		</MainContainer>
	);
};

export default TalentProfile;
