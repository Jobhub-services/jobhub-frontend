import { colors } from '@/assets/theme';
import ProfileAvatar from '@/components/companies/profile/common/ProfileAvatar';
import AboutUs from '@/components/companies/profile/overview/AboutUs';
import Keywords from '@/components/companies/profile/overview/Keywords';
import Division from '@/components/companies/profile/overview/Division';
import SocialProfile from '@/components/companies/profile/overview/SocialProfile';
import GeneralInfo from '@/components/companies/profile/overview/GeneralInfo';
import TimeZone from '@/components/companies/profile/overview/TimeZone';
import { FlexBox, HrDivider } from 'staak-ui';
import styled from 'styled-components';

const LefSide = styled.div`
	width: 28%;
	background-color: white;
	border-radius: 7px;
	padding: 15px 10px;
	border: 1px solid ${colors.BLACK_12};
`;
const RightSide = styled.div`
	width: 72%;
	background-color: white;
	padding: 15px 25px;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 7px;
	height: 100%;
`;
const ProfileOverview = () => {
	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }} justify="space-between">
				<ProfileAvatar overview />
				<SocialProfile />
			</FlexBox>

			<FlexBox align="start" gap={15} style={{ padding: '10px 15px' }}>
				<LefSide>
					<TimeZone />
					<HrDivider top={15} />
					<GeneralInfo />
					<HrDivider top={15} />
					<Keywords />
				</LefSide>
				<RightSide>
					<AboutUs />
					<HrDivider top={15} />
					<Division />
				</RightSide>
			</FlexBox>
		</div>
	);
};

export default ProfileOverview;
