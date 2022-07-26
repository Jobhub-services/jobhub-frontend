import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { ApplicationsList } from '@/components/developers/applications';
import { applicationActions, applicationDispatcher } from '@/modules/actions/developer/application.actions';
import { useAppSelector } from '@/utils/appHooks';
import { checkScrollToButtom } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Headline } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 20px;
	height: inherit;
`;
const ViewApplications = () => {
	const { isLoading, applicationInfo } = useAppSelector((state) => state.talentApplications);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		if (!applicationInfo?.content || applicationInfo?.content?.length === 0) {
			const params = {
				page: 0,
				limit: 20,
			};
			applicationActions.getApplications(true, params);
		}
		return function cleanup() {
			applicationDispatcher.setApplications({}, true);
		};
	}, []);

	useEffect(() => {
		setIsFetching(false);
	}, [applicationInfo]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (applicationInfo?.page! < applicationInfo?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					const params = {
						page: applicationInfo?.page ?? 0,
						limit: 20,
					};
					applicationActions.getApplications(false, params);
				}
			}
		}
	};

	return (
		<SContainer>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
						<Headline size="sm" variant="h2">
							{applicationInfo?.content?.length ?? 0} Applications
						</Headline>
						<ApplicationsList />
						{isFetching && (
							<div>
								<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
							</div>
						)}
					</SubContainer>
					<Outlet />
				</>
			)}
		</SContainer>
	);
};

export default ViewApplications;
