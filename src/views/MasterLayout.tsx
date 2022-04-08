import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { HeaderBar, SideBar } from "@/components/companies";
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';

const StyledPublicView = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    width:100%;
	height:100%;
    background:#f5f8fa;
`
const StyledFlexBox = styled(FlexBox)`
	padding: 0px !important;
	height: 100%;
    overflow:auto;
    &::-webkit-scrollbar {
        width: 7px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        transition-duration: 0.5s;
        cursor:pointer;
        border-radius:8px;
        background-color: ${Colors.BLACK_11};
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: ${Colors.BLACK_10};
    }
`
const MasterLayout: FC = () => {
	return (
		<StyledPublicView>
			<StyledFlexBox align='flex-start'>
                <SideBar />
                <StyledFlexBox width='86%' flexDirection='column' align='flex-start' justify='flex-start'>
                    <HeaderBar />
                    <FlexBox width='100%' align='flex-start' justify='flex-start'>
                        <Outlet />
                    </FlexBox>
                </StyledFlexBox>
            </StyledFlexBox>
		</StyledPublicView>
	);
};
export default MasterLayout;
