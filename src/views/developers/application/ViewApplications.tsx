import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { ApplicationsList } from '@/components/developers/applications';
import { applicationActions } from '@/modules/actions/developer/application.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	padding: 10px 20px;
`;
const ViewApplications = () => {
	const { isLoading, applicationInfo } = useAppSelector((state) => state.talentApplications);
	useEffect(() => {
		if (!applicationInfo?.content || applicationInfo?.content?.length === 0) applicationActions.getApplications(true);
	}, []);
	return (
		<SContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<SubContainer>
						<h1 style={{ color: `${colors.PURPLE_BASE}`, margin: '5px 0', fontSize: '24px' }}>Applications</h1>
						<ApplicationsList />
					</SubContainer>
					<Outlet />
				</>
			)}
		</SContainer>
	);
};

export default ViewApplications;
