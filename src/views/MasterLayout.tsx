import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HeaderBar, SideBar } from '@/components/companies';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { userActions } from '@/modules/actions/user.actions';
import { useAppSelector } from '@/utils/appHooks';

const StyledPublicView = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #f5f8fa;
`;
const StyledFlexBox = styled(FlexBox)`
	padding: 0px !important;
	height: 100%;
	width: 100%;
`;

const MainContent = styled.div`
	width: calc(100% - ${ASIDE_WIDTH}px);
	overflow-y: auto;
	height: 100%;
`;

const MainContainer = styled.div`
	width: 100%;
	padding: 10px 15px;
`;
const MasterLayout: FC = () => {
	const { userInfoLoaded } = useAppSelector((state) => state.user);
	useEffect(() => {
		if (!userInfoLoaded) userActions.getUserInfo();
	}, []);
	return (
		<StyledPublicView>
			<StyledFlexBox align="flex-start" className="staak_scrollbar">
				<SideBar />
				<MainContent className="staak_scrollbar">
					<HeaderBar />
					<MainContainer>
						<Outlet />
					</MainContainer>
				</MainContent>
			</StyledFlexBox>
		</StyledPublicView>
	);
};
export default MasterLayout;
