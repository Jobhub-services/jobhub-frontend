import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const StyledHomeView = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    width:100%;
    height:100%;
`
const GuestLayout: FC = () => {
	return (
		<StyledHomeView>
			<Outlet />
		</StyledHomeView>
	);
};
export default GuestLayout;
