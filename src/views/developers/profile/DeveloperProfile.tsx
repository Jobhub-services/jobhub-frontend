import { colors } from '@/assets/theme';
import { TabPane } from 'staak-ui';
import { ProfileOverview, ProfileDetails, ProfilePreferences } from '@/components/developers';
import { useEffect } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import styled from 'styled-components';

const SContainer = styled.div`
	height: 100%;
	margin: 0 11%;
	padding: 15px 0;
`;
const SSubContainer = styled.div`
	height: 100%;
	overflow: auto;
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 7px;
`;

const DeveloperProfile = () => {
	const { isLoading } = useAppSelector((state) => state.developerProfile);
	useEffect(() => {
		profileAction.getProfile();
	}, []);
	return (
		<SContainer>
			<SSubContainer className="staak_scrollbar">
				<TabPane activeItem="overview" paneWidth="500px" paneJustify="center">
					<TabPane.Pane style={{ padding: '0' }} name="overview" title="Profile Overview">
						<ProfileOverview />
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="profile" title="Edit Profile">
						<ProfileDetails />
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="preferences" title="Edit Preferences">
						<ProfilePreferences />
					</TabPane.Pane>
				</TabPane>
			</SSubContainer>
			{isLoading && <LoadingScreen />}
		</SContainer>
	);
};

export default DeveloperProfile;
