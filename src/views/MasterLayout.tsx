import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HeaderBar, SideBar } from '@/components/common';
import { COLLAPSED_ASIDE_WIDTH, EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { userActions } from '@/modules/actions/user.actions';
import { useAppSelector } from '@/utils/appHooks';
import PrivateRoutes from '@/routes/PrivateRoutes';

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
	height: calc(100% - ${HEADER_HIEGHT}px);
	width: 100%;
`;

const MainContent = styled.div<any>`
	width: calc(100% - ${(props) => (props.expanded ? EXPANDED_ASIDE_WIDTH : COLLAPSED_ASIDE_WIDTH)}px);
	transition: width 0.2s ease-in-out;
	//overflow-y: auto;
	height: 100%;
`;

const MainContainer = styled.div`
	width: 100%;
	/*height: calc(100% - ${HEADER_HIEGHT}px);*/
	height: 100%;
	/*padding: 10px 15px;*/
`;
const MasterLayout: FC = () => {
	const { userInfoLoaded } = useAppSelector((state) => state.user);
	const { appExpanded } = useAppSelector((state) => state.metadata);

	useEffect(() => {
		if (!userInfoLoaded) userActions.getUserInfo();
	}, []);
	return (
		<StyledPublicView>
			<HeaderBar />
			<StyledFlexBox align="flex-start" className="staak_scrollbar">
				<SideBar />
				<MainContent className="staak_scrollbar" expanded={appExpanded}>
					<MainContainer>
						<PrivateRoutes />
					</MainContainer>
				</MainContent>
			</StyledFlexBox>
		</StyledPublicView>
	);
};
export default MasterLayout;
