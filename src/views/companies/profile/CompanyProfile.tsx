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
	height: 100%;
	margin: 0 180px;
	padding: 15px 0;
`;
const CompanyProfile = () => {
	const { isLoading } = useAppSelector((state) => state.companyProfile);
	useEffect(() => {
		profileAction.getProfile();
	}, []);
	return (
		<SContainer>
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
				</TabPane>
			</div>
			{isLoading && <LoadingScreen />}
		</SContainer>
	);
};

export default CompanyProfile;
