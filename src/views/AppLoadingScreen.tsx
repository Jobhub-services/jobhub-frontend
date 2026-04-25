import { FC } from 'react';
import styled from 'styled-components';
import StaakLogo from '@/assets/theme/StaakLogo';
import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';

const ScreenContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const LoadingIconContent = styled.div`
	margin-top: 15px;
	text-align: center;
`;

const AppLoadingScreen: FC = () => {
	return (
		<ScreenContainer>
			<StaakLogo size={200} />
			<LoadingIconContent>
				<LoadingIcon width="57px" height="57px" color={colors.PURPLE_BASE} />
			</LoadingIconContent>
		</ScreenContainer>
	);
};

export default AppLoadingScreen;
