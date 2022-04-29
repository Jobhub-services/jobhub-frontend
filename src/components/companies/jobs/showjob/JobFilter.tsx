import { CheckBox, DateRangePicker, FlexBox, Input } from 'staak-ui';
import FilterContianer from '@/components/companies/_common/filter/FilterContainer';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

export const STitle = styled.h3`
	margin: 10px 0;
	color: ${colors.BLUE_DARK_4};
`;
const JobFilter = () => {
	return (
		<FilterContianer title="Job Searcher" type="job">
			<FilterContianer.Body>
				<div>
					<STitle>Employement Type</STitle>
					<div>
						<CheckBox className="mb-10">Full-time</CheckBox>
						<CheckBox className="mb-10">Part-time</CheckBox>
						<CheckBox className="mb-10">Permanent</CheckBox>
						<CheckBox className="mb-10">Temporary/Sesoneal</CheckBox>
					</div>
				</div>
				<div>
					<STitle>Job Salary</STitle>
					<div>
						<CheckBox className="mb-10">Hourly</CheckBox>
						<CheckBox className="mb-10">Monthly</CheckBox>
						<CheckBox className="mb-10">Annually</CheckBox>
					</div>
					<FlexBox gap={10}>
						<Input placeholder="From" />
						<Input placeholder="To" />
					</FlexBox>
				</div>
				<div>
					<STitle>Visa Sponsorship</STitle>
					<div>
						<CheckBox className="mb-10">Avavailable</CheckBox>
						<CheckBox className="mb-10">Unavavailable</CheckBox>
					</div>
				</div>
				<div>
					<STitle>Posted Date</STitle>
					<div>
						<DateRangePicker />
					</div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default JobFilter;
