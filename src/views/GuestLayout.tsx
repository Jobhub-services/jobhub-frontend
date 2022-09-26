import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import StaakLogo from '@/assets/theme/StaakLogo';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { FlexBox } from 'staak-ui';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { useAppSelector } from '@/utils/appHooks';
//import IconLogin from '@/assets/icons/login_icon.png';

const StyledPublicView = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	height: 100%;
`;

const LeftSideWidth = 560;

const LeftContainer = styled.div`
	height: 100%;
	padding: 50px 50px;
	background-color: ${colors.PURPLE_BASE};
	width: ${LeftSideWidth}px;
`;
const LeftHeadLine = styled.h1`
	color: ${colors.GRAY_2};
`;
const LoginIcon = styled.img`
	margin: 50px auto 0 auto;
	height: 550px;
`;

const Container = styled.div`
	height: 100%;
	padding: 20px 0;
	width: calc(100% - ${LeftSideWidth}px);
	overflow-y: auto;
`;

const RightContainer = styled(FlexBox)`
	min-height: 100%;
`;

const AuthBlock = styled.div`
	position: relative;
	width: 440px;
	border-radius: 10px;
	overflow: hidden;
	background-color: ${colors.WHITE};
	box-shadow: 0px 0px 5px #00000050;
`;

const GuestLayout: FC = () => {
	const { isLoading } = useAppSelector((state) => state.auth);
	return (
		<StyledPublicView>
			<LeftContainer>
				<StaakLogo variant={VariantType.LIGHT} size={140} />
				<LeftHeadLine>Discover the world's top Companies & Talents.</LeftHeadLine>
				<LoginIcon src="/assets/login-screen.svg" />
			</LeftContainer>
			<Container>
				<RightContainer>
					<AuthBlock>
						{isLoading && <LoadingScreen />}
						<Outlet />
					</AuthBlock>
				</RightContainer>
			</Container>
		</StyledPublicView>
	);
};
export default GuestLayout;
