import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { SideBar } from "@/components/companies";

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
			<StyledFlexBox>
                <SideBar />
                <FlexBox width='87%'>

                </FlexBox>
            </StyledFlexBox>
			<Outlet />
		</StyledPublicView>
	);
};
export default MasterLayout;
