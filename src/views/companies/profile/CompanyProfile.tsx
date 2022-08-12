import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import ProfileOverview from '@/components/companies/profile/ProfileOverview';
import ProfileDetails from '@/components/companies/profile/ProfileDetails';
import { useAppSelector } from '@/utils/appHooks';
import { TabPane } from 'staak-ui';
import styled from 'styled-components';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { useEffect } from 'react';

const SContainer = styled.div`
	position: relative;
	height: 100%;
	padding: 15px 0;
	overflow: auto;
`;
const SubContainer = styled.div`
	margin: 0 11%;
	//height: 100%;
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 7px;
`;
const CompanyProfile = () => {
	const { isLoading } = useAppSelector((state) => state.companyProfile);
	useEffect(() => {
		profileAction.getProfile();
	}, []);
	return (
		<SContainer className="staak_scrollbar">
			<SubContainer className="staak_scrollbar">
				<TabPane activeItem="overview" paneWidth="30%" paneJustify="center">
					<TabPane.Pane style={{ padding: '0' }} name="overview" title="Profile Overview">
						<ProfileOverview />
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="profile" title="Edit Profile">
						<ProfileDetails />
					</TabPane.Pane>
				</TabPane>
			</SubContainer>
			{isLoading && <LoadingScreen />}
		</SContainer>
	);
};

export default CompanyProfile;
