import styled from 'styled-components';
import { TalentsHeader, TalentsFilter, CardContainer } from '@/components/companies/talents';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { useEffect, useState } from 'react';
import { talentsActions, talentsDispatcher } from '@/modules/actions/company/talents.actions';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { colors } from '@/assets/theme';
import { LoadingIcon } from '@/assets/icons';
import { checkScrollToButtom } from '@/utils/helpers';

const MainContainer = styled.div`
	position: relative;
	height: 100%;
`;

const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 40px 10px 40px;
	height: inherit;
`;
const TalentsView = () => {
	const { isLoading, showTalents } = useAppSelector((state) => state.talent);
	const [isFetching, setIsFetching] = useState(false);
	const [searchParams] = useSearchParams();
	const { state } = useLocation();
	const onlyDetail = (state as any)?.onlyDetail ?? false;

	useEffect(() => {
		if (!onlyDetail) {
			if (!isLoading) talentsActions.getTalents();
		}
		return function cleanup() {
			talentsDispatcher.setTalents({}, true);
		};
	}, []);

	useEffect(() => {
		setIsFetching(false);
	}, [showTalents]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (showTalents?.page! < showTalents?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${showTalents.page ?? 0}`);
					searchParams.set('limit', `20`);
					talentsActions.getTalents(false, searchParams);
				}
			}
		}
	};

	return (
		<MainContainer>
			{!onlyDetail &&
				(isLoading ? (
					<LoadingScreen />
				) : (
					<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
						<TalentsHeader />
						<CardContainer />
						{isFetching && (
							<div>
								<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
							</div>
						)}
					</SubContainer>
				))}
			<Outlet />
			<TalentsFilter />
		</MainContainer>
	);
};

export default TalentsView;
