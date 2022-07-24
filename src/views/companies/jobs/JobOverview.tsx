import React, { useEffect } from 'react';
import { StandardProps } from '@/models/component';
import ShowJobs from '@/components/companies/jobs/showjob/ShowJobs';
import styled from 'styled-components';
import { jobActions } from '@/modules/actions/company/job.actions';
import JobHeader from '@/components/companies/jobs/showjob/JobHeader';
import JobFilter from '@/components/companies/jobs/showjob/filter/JobFilter';
import { Outlet } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { useAppSelector } from '@/utils/appHooks';

const Container = styled.div`
	position: relative;
	height: 100%;
`;

const JobOverview = (props: StandardProps) => {
	const { isLoading } = useAppSelector((state) => state.job);
	useEffect(() => {
		jobActions.getJobs();
	}, []);
	return (
		<Container>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<div style={{ padding: '10px 40px 10px 40px', height: 'inherit' }}>
					<JobHeader />
					<ShowJobs />
				</div>
			)}
			<Outlet />
			<JobFilter />
		</Container>
	);
};

export default JobOverview;
