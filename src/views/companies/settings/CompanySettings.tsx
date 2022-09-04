import SideItems from '@/components/companies/settings/SideItems';
import { Outlet, useLocation } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled.div<any>`
	padding: 0 0 15px 0;
	background: ${(props) => (props.plan ? '#f5f8fa' : 'white')};
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	width: ${(props) => (props.plan ? '70%' : '50%')};
`;

const MainContainer = styled.div`
	height: 100%;
	padding: 40px 10px;
	overflow: auto;
`;
const CompanySettings = () => {
	const { pathname } = useLocation();
	return (
		<MainContainer className="staak_scrollbar">
			<FlexBox align="start" gap={30}>
				<SideItems />
				<SContainer plan={pathname.includes('subscription')}>
					<Outlet />
				</SContainer>
			</FlexBox>
		</MainContainer>
	);
};

export default CompanySettings;
