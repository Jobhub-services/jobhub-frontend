import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HeaderBar, SideBar } from "@/components/companies";

const StyledPublicView = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    width:100%;
	height:100%;
`
const StyledFlexBox = styled(FlexBox)`
	padding: 0px !important;
	height: 100%;
`
const MasterLayout: FC = () => {
	return (
		<StyledPublicView>
			<StyledFlexBox align='flex-start'>
                <SideBar />
                <FlexBox width='87%' flexDirection='column' align='flex-start' justify='flex-start'>
                    <HeaderBar />
                </FlexBox>
            </StyledFlexBox>
			<Outlet />
		</StyledPublicView>
	);
};
export default MasterLayout;
