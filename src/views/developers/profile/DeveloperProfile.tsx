import { colors } from '@/assets/theme';
import { TabPane } from 'staak-ui';
import { ProfileOverview, ProfileDetails, ProfilePreferences } from '@/components/developers';
import { useEffect } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/LoadingScreen';

const DeveloperProfile = () => {
	const { isLoading } = useAppSelector((state) => state.developerProfile);
	useEffect(() => {
		profileAction.getProfile();
	}, []);
	return (
		<div style={{ height: '100%', margin: '0 180px', padding: '15px 0' }}>
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
						<ProfileDetails />
					</TabPane.Pane>
					<TabPane.Pane style={{ padding: '0' }} name="preferences" title="Preferences">
						<ProfilePreferences />
					</TabPane.Pane>
				</TabPane>
			</div>
			{isLoading && <LoadingScreen />}
		</div>
	);
};

export default DeveloperProfile;
