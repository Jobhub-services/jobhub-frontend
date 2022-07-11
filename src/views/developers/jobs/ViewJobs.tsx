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
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<SubContainer>
						<JobHeader />
						<JobsList />
					</SubContainer>
					<JobsFilter />
					<Outlet />
				</>
			)}
		</SContainer>
	);
};

export default ViewJobs;
