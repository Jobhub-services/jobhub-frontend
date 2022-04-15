import React, { useState } from 'react';
import { StandardProps } from '@/models/component';
import ShowJobs from '@/components/companies/jobs/showjob/ShowJobs';
import styled from 'styled-components';
import { CloseIcon, FlexBox, Headline, IconButton, InputPicker, Button, CheckBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import FilterIcon from '@/assets/icons/FilterIcon';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';

const Container = styled.div`
	position: relative;
	height: 100%;
`;
const FilterContainer = styled.div<any>`
	position: fixed;
	top: ${HEADER_HIEGHT}px;
	left: ${ASIDE_WIDTH}px;
	background: white;
	width: ${(props) => (props.closed ? '0' : '300px')};
	overflow-x: hidden;
	height: calc(100% - ${HEADER_HIEGHT}px);
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
	transition: width 0.2s, visibility 50ms;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 100%;
`;
const JobOverview = (props: StandardProps) => {
	const [closed, setClosed] = useState(true);
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
								setClosed(!closed);
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

			<FilterContainer closed={closed}>
				<SubContainer>
					<FlexBox style={{ borderBottom: `1px solid ${colors.BLACK_12}`, padding: '5px 10px' }} justify="space-between">
						<Headline variant="h2" size="sm">
							Job Searcher
						</Headline>
						<IconButton
							onClick={(event: React.SyntheticEvent) => {
								setClosed(true);
							}}
							width="30px"
							height="30px"
							circle
						>
							<CloseIcon color={colors.BLACK_8} />
						</IconButton>
					</FlexBox>
					<div style={{ padding: '5px 10px', flexGrow: '1' }}>
						<h3>Employement Type</h3>
						<div>
							<CheckBox className="mb-10">Full-time</CheckBox>
							<CheckBox className="mb-10">Part-time</CheckBox>
							<CheckBox className="mb-10">Permanent</CheckBox>
							<CheckBox className="mb-10">Temporary/Sesoneal</CheckBox>
						</div>
					</div>
					<FlexBox style={{ borderTop: `1px solid ${colors.BLACK_12}`, padding: '15px 10px', gap: '10px' }}>
						<Button variant="outlined" width="100%">
							Clean
						</Button>
						<Button width="100%">Apply</Button>
					</FlexBox>
				</SubContainer>
			</FilterContainer>
		</Container>
	);
};

export default JobOverview;
