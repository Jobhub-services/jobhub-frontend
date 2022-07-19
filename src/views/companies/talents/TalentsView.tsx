import styled from 'styled-components';
import { TalentsHeader, TalentsFilter, CardContainer } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { useEffect } from 'react';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { Outlet } from 'react-router-dom';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;

const TalentsView = () => {
	const { isLoading } = useAppSelector((state) => state.talent);
	useEffect(() => {
		talentsActions.getTalents();
	}, []);
	return (
		<MainContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<TalentsHeader />
					<CardContainer />
				</>
			)}
			<Outlet />
			<TalentsFilter />
		</MainContainer>
	);
};

export default TalentsView;
