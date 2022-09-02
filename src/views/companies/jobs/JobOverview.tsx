import React, { useEffect, useState } from 'react';
import { StandardProps } from '@/models/component';
import ShowJobs from '@/components/companies/jobs/showjob/ShowJobs';
import styled from 'styled-components';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import JobHeader from '@/components/companies/jobs/showjob/JobHeader';
import JobFilter from '@/components/companies/jobs/showjob/filter/JobFilter';
import { Outlet, useSearchParams } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { checkScrollToButtom } from '@/utils/helpers';

const Container = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 40px 10px 40px;
	height: inherit;
`;
const JobOverview = (props: StandardProps) => {
	const { isLoading, showJob, isDetailLoading } = useAppSelector((state) => state.job);
	const [isFetching, setIsFetching] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		jobActions.getJobs(!isDetailLoading && showJob.size === 0);
		return function cleanup() {
			jobDispatcher.setJobs({}, true);
		};
	}, []);

	useEffect(() => {
		setIsFetching(false);
	}, [showJob]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (showJob?.page! < showJob?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${showJob.page ?? 0}`);
					searchParams.set('limit', `20`);
					jobActions.getJobs(false, searchParams);
				}
			}
		}
	};
	return (
		<Container>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
					<JobHeader />
					<ShowJobs />
					{isFetching && (
						<div>
							<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
						</div>
					)}
				</SubContainer>
			)}
			<Outlet />
			<JobFilter />
		</Container>
	);
};

export default JobOverview;
