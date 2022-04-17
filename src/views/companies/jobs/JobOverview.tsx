import React from 'react';
import { StandardProps } from '@/models/component';
import ShowJobs from '@/components/companies/jobs/showjob/ShowJobs';
import styled from 'styled-components';
import { FlexBox, Headline, InputPicker, Button, CheckBox } from 'staak-ui';
import FilterIcon from '@/assets/icons/FilterIcon';
import FilterContianer from '@/components/companies/filter/FilterContainer';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';

const Container = styled.div`
	position: relative;
	height: 100%;
`;

const JobOverview = (props: StandardProps) => {
	const { filterClosed } = useAppSelector((state) => state.job);
	return (
		<Container>
			<div style={{ padding: '5px 15px' }}>
				<FlexBox justify="space-between">
					<Headline variant="h2" size="sm">
						Search result : 120 Jobs
					</Headline>
					<FlexBox style={{ gap: '10px' }}>
						<Button
							onClick={(event: React.SyntheticEvent) => {
								jobActions.setClosedFilter(!filterClosed);
							}}
							variant="primary"
							startIcon={<FilterIcon />}
						>
							Filter
						</Button>
						<InputPicker placeholder="Sort by">
							<InputPicker.Option value="dzd">Newest jobs</InputPicker.Option>
							<InputPicker.Option value="dzd">Oldest jobs</InputPicker.Option>
						</InputPicker>
					</FlexBox>
				</FlexBox>
				<ShowJobs />
			</div>
			<FilterContianer title="Job Searcher" type="job">
				<FilterContianer.Body>
					<div>
						<h3>Employement Type</h3>
						<div>
							<CheckBox className="mb-10">Full-time</CheckBox>
							<CheckBox className="mb-10">Part-time</CheckBox>
							<CheckBox className="mb-10">Permanent</CheckBox>
							<CheckBox className="mb-10">Temporary/Sesoneal</CheckBox>
						</div>
					</div>
				</FilterContianer.Body>
			</FilterContianer>
		</Container>
	);
};

export default JobOverview;
