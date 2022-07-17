import SideItems from '@/components/companies/settings/SideItems';
import { Outlet } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled.div`
	padding: 0 0 15px 0;
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	width: 50%;
`;

const MainContainer = styled.div`
	padding: 40px 10px;
`;
const CompanySettings = () => {
	return (
		<MainContainer>
			<FlexBox align="start" gap={30}>
				<SideItems />
				<SContainer>
					<Outlet />
				</SContainer>
			</FlexBox>
		</MainContainer>
	);
};

export default CompanySettings;
