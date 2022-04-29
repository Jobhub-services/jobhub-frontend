import React, { useEffect } from 'react';
import { StandardProps } from '@/models/component';
import ShowJobs from '@/components/companies/jobs/showjob/ShowJobs';
import styled from 'styled-components';
import { jobActions } from '@/modules/actions/company/job.actions';
import JobDetails from '@/components/companies/jobs/showjob/details/JobDetails';
import DataEmpty from '@/components/companies/_common/DataEmpty';
import JobHeader from '@/components/companies/jobs/showjob/JobHeader';
import JobFilter from '@/components/companies/jobs/showjob/JobFilter';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
	position: relative;
	height: 100%;
`;

const JobOverview = (props: StandardProps) => {
	useEffect(() => {}, [jobActions.getJobs()]);
	return (
		<Container>
			<div style={{ padding: '10px 40px 10px 40px', height: 'inherit' }}>
				<JobHeader />
				{/*<DataEmpty />*/}
				<ShowJobs />
			</div>
			<Outlet />
			<JobFilter />
		</Container>
	);
};

export default JobOverview;
