import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import HeaderNav from '@/components/publics/jobs/HeaderNav';
import JobsList from '@/components/publics/jobs/JobsList';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import { useEffect } from 'react';
import { publicJobsAction } from '@/modules/actions/publicJobs.actions';

const Container = styled.div`
	height: 100%;
	overflow: auto;
`;
const JobsView = () => {
	const { jobs, isJobFetching } = useAppSelector((state) => state.publicJobs);
	useEffect(() => {
		if (!jobs?.size || jobs.size === 0) publicJobsAction.getJobs();
	}, []);
	return (
		<Container className="staak_scrollbar">
			<HeaderNav />
			<JobsList />
			{isJobFetching && <LoadingScreen style={{ top: `${HEADER_HIEGHT}px` }} />}
		</Container>
	);
};

export default JobsView;
