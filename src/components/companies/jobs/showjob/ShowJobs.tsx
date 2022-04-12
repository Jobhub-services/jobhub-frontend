import { Button, FlexBox, Headline, InputPicker } from 'staak-ui';
import FilterIcon from '@/assets/icons/FilterIcon';
import JobCard from './JobCard';
import styled from 'styled-components';

const SWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

const ShowJobs = (props: any) => {
	return (
		<div>
			<FlexBox justify="space-between">
				<Headline variant="h2" size="sm">
					Search result : 120 Jobs
				</Headline>
				<FlexBox style={{ gap: '10px' }}>
					<Button variant="primary" startIcon={<FilterIcon />}>
						Filter
					</Button>
					<InputPicker placeholder="Sort by">
						<InputPicker.Option value="dzd">Creation date</InputPicker.Option>
					</InputPicker>
				</FlexBox>
			</FlexBox>
			<SWrapper>
				<JobCard status="active" />
				<JobCard status="active" />
				<JobCard status="suspended" />
				<JobCard status="suspended" />
				<JobCard />
			</SWrapper>
		</div>
	);
};

export default ShowJobs;
