import { colors } from '@/assets/theme';
import { AboutUs, KeyWords, SocialProfile, Headquarters, CompanyDivision, GeneralInfo, TimeZone } from '@/components/companies/profile/details';
import ProfileAvatar from '@/components/companies/profile/common/ProfileAvatar';
import { Button, FlexBox, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LefSide = styled.div`
	width: 28%;
	background-color: white;
	border-radius: 7px;
	padding: 15px 10px;
`;
const RightSide = styled.div`
	width: 72%;
	background-color: white;
	padding: 15px 25px;
	border-left: 1px solid ${colors.BLACK_12};
`;

const ProfileDetails = () => {
	const navigate = useNavigate();
	return (
		<div>
			<FlexBox style={{ padding: '20px 20px', borderBottom: `1px solid ${colors.BLACK_12}` }}>
				<FlexBox justify="space-between" width="100%">
					<ProfileAvatar />
					<Button onClick={() => navigate('/settings/account')}>Account settings</Button>
				</FlexBox>
			</FlexBox>
			<FlexBox align="start">
				<LefSide>
					<TimeZone />
					<HrDivider top={15} />
					<Headquarters />
					<HrDivider top={15} />
					<GeneralInfo />
				</LefSide>
				<RightSide>
					<AboutUs />
					<HrDivider top={15} />
					<CompanyDivision />
					<HrDivider top={15} />
					<SocialProfile />
					<HrDivider top={15} />
					<KeyWords />
				</RightSide>
			</FlexBox>
		</div>
	);
};

export default ProfileDetails;
