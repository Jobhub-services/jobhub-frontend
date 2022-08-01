import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { JobsList, JobHeader, JobsFilter } from '@/components/developers/jobs';
import { jobActions, jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import { checkScrollToButtom, pushNotification } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
const SAVE_JOB_ID = 'saveJob';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	overflow-y: auto;
	padding: 10px 20px;
	height: inherit;
`;
const ViewJobs = () => {
	const { isLoading, jobInfo, jobSaved } = useAppSelector((state) => state.developerJobs);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const params = {
			page: 0,
			limit: 20,
		};
		jobActions.getJobs(!jobInfo.size, params);
		return function cleanup() {
			jobDispatcher.setJobs({}, true);
		};
	}, []);

	useEffect(() => {
		if (jobSaved) {
			pushNotification.success('The Operation was successfully processed');
			jobDispatcher.setSaveJob(false);
		}
	}, [jobSaved]);
	useEffect(() => {
		setIsFetching(false);
	}, [jobInfo]);

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		if (!isFetching) {
			if (jobInfo?.page! < jobInfo?.pages!) {
				if (checkScrollToButtom(event.target as any, 10)) {
					setIsFetching(true);
					searchParams.set('page', `${jobInfo.page ?? 0}`);
					searchParams.set('limit', `20`);
					jobActions.getJobs(false, searchParams);
				}
			}
		}
	};
	return (
		<>
			<SContainer>
				{isLoading ? (
					<LoadingScreen />
				) : (
					<>
						<SubContainer className="staak_scrollbar" onScroll={handleScroll}>
							<JobHeader />
							<JobsList />
							{isFetching && (
								<div>
									<LoadingIcon width="60px" height="60px" color={colors.PURPLE_BASE} />
								</div>
							)}
						</SubContainer>
						<JobsFilter />
						<Outlet />
					</>
				)}
			</SContainer>
		</>
	);
};

export default ViewJobs;
