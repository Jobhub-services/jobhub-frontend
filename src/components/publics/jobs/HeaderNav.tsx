import styled from 'styled-components';
import { Button, FlexBox } from 'staak-ui';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { colors } from '@/assets/theme';
import StaakLogo from '@/assets/theme/StaakLogo';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { Link, useNavigate } from 'react-router-dom';

const SyledContainer = styled.div`
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	border-bottom: 1px solid ${colors.BLACK_12};
	width: 100%;
	height: ${HEADER_HIEGHT}px;
	z-index: 10;
	background-color: #292961;
`;

const SContainer = styled(FlexBox)`
	padding: 0px 60px !important;
	width: 100%;
`;
const VDivider = styled.div`
	width: 2px;
	height: 50px;
	background-color: ${'white'};
`;
const SLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SH2 = styled.h2`
	margin: 0;
	color: white;
`;
const HeaderNav = () => {
	const navigate = useNavigate();
	return (
		<SyledContainer>
			<FlexBox gap={10} width="100%">
				<SContainer justify="space-between">
					<FlexBox justify="start" gap={20}>
						<SLink to="/">
							<StaakLogo variant={VariantType.LIGHT} size={150} />
						</SLink>
						<VDivider />
						<div>
							<SH2>JOBS</SH2>
							<div style={{ color: 'white' }}>By Staak</div>
						</div>
					</FlexBox>
					<FlexBox gap={15}>
						<Button
							variant="outlined"
							color="white"
							size="md"
							onClick={() => {
								navigate('/login');
							}}
						>
							Login
						</Button>
						<Button
							variant="light"
							size="md"
							onClick={() => {
								navigate('/register/developer');
							}}
						>
							Sign up
						</Button>
					</FlexBox>
				</SContainer>
			</FlexBox>
		</SyledContainer>
	);
};
HeaderNav.defaultProps = {
	width: '100%',
};
export default HeaderNav;
