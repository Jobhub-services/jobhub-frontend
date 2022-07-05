import { LoadingScreen } from '@/components/common/LoadingScreen';
import { JobsList, JobHeader, JobsFilter } from '@/components/developers/jobs';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SContainer = styled.div`
	position: relative;
	height: 100%;
`;
const SubContainer = styled.div`
	padding: 10px 20px;
`;
const ViewJobs = () => {
	const { isLoading } = useAppSelector((state) => state.developerJobs);
	useEffect(() => {
		jobActions.getJobs();
	}, []);
	return (
		<SContainer>
			<SubContainer>
				<JobHeader />
				{!isLoading && <JobsList />}
			</SubContainer>
			<JobsFilter />
			<Outlet />
			{isLoading && <LoadingScreen />}
		</SContainer>
	);
};

export default ViewJobs;
