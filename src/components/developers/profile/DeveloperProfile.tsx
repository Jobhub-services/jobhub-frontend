import { colors } from '@/assets/theme';
import { InputPickerField, TagPickerField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox, HrDivider, IconButton, Input, InputPicker, PlusIcon, TabPane } from 'staak-ui';
import styled from 'styled-components';
import ProfileAvatar from './ProfileAvatar';
import Education from './utils/education/Education';
import Languages from './utils/Languages';
import Skills from './utils/Skills';
import SocialProfile from './utils/SocialProfile';
import Summary from './utils/Summary';
import WorkExperience from './utils/work_experience/WorkExperience';
import Location from './utils/Location';
import Roles from './utils/Roles';
import Certification from './utils/certification/Certification';
import ProfileOverview from './ProfileOverview';

const LefSide = styled.div`
	width: 25%;
	background-color: white;
	//box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 7px;
	padding: 15px 10px;
`;
const RightSide = styled.div`
	width: 75%;
	background-color: white;
	//box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	//border-radius: 7px;
	padding: 15px 25px;
	border-left: 1px solid ${colors.BLACK_12};
`;
const DeveloperProfile = () => {
	const { developerInfo } = useAppSelector(({ user }) => user.userInfo);
	return (
		<div style={{ height: '100%', margin: '0 200px', padding: '15px 0' }}>
			{/*<div
				style={{
					/*background: 'white',*/
			/*padding: '10px 200px 0 200px',
					margin: '10px 200px 0 200px',
					boxShadow: `0px 2px 15px -15px ${colors.BLACK_5}`,
				}}
			>
				<FlexBox justify="space-between">
					<ProfileAvatar
						firstName={developerInfo?.firstName.charAt(0).toUpperCase() + developerInfo?.firstName.slice(1)!}
						lastName={developerInfo?.lastName.charAt(0).toUpperCase() + developerInfo?.lastName.slice(1)!}
					/>
					<Button>Account settings</Button>
	</FlexBox>
				<HrDivider top={15} />
			</div>*/}
			<div
				className="staak_scrollbar"
				style={{
					overflow: 'auto',
					background: 'white',
					boxShadow: `0px 0px 20px -15px ${colors.BLACK_7}`,
					borderRadius: '7px',
				}}
			>
				<TabPane activeItem="overview" paneWidth="30%">
					<TabPane.Pane style={{ padding: '0' }} name="overview" title="Overview">
						<ProfileOverview />
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="profile" title="Profile">
						<div>
							<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between">
								<ProfileAvatar
									firstname={developerInfo?.firstName.charAt(0).toUpperCase() + developerInfo?.firstName.slice(1)!}
									lastname={developerInfo?.lastName.charAt(0).toUpperCase() + developerInfo?.lastName.slice(1)!}
									location={{ country: 'Germany', city: 'Berlin' }}
								/>
								<Button>Account settings</Button>
							</FlexBox>
							<FlexBox width="100%" gap={15} align="start">
								<LefSide>
									<Skills />
									<HrDivider top={25} />
									<Languages />
								</LefSide>
								<RightSide>
									<Summary />
									<HrDivider top={15} />
									<Roles />
									<HrDivider top={15} />
									<SocialProfile />
									<HrDivider top={15} />
									<WorkExperience />
									<HrDivider top={15} />
									<Education />
									<HrDivider top={15} />
									<Certification />
								</RightSide>
							</FlexBox>
						</div>
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="preferences" title="Preferences"></TabPane.Pane>
				</TabPane>
			</div>
		</div>
	);
};

export default DeveloperProfile;
