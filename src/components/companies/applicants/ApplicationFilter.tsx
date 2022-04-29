import FilterContianer from '@/components/companies/_common/filter/FilterContainer';
import { CheckBox, DateRangePicker, FlexBox, Input, InputPicker } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const ApplicationsFilter = () => {
	return (
		<FilterContianer title="Applications Searcher" type="applications">
			<FilterContianer.Body>
				<div>
					<div>
						<SH3>Job title</SH3>
						<Input placeholder="Title" />
					</div>
					<div>
						<SH3>Country</SH3>
						<InputPicker placeholder="Country">
							<InputPicker.Option>Germany</InputPicker.Option>
							<InputPicker.Option>Turkey</InputPicker.Option>
							<InputPicker.Option>Bahrain</InputPicker.Option>
						</InputPicker>
					</div>
					<div>
						<SH3>Application date</SH3>
						<DateRangePicker placeholder="Start date - End date" />
					</div>
					<div>
						<SH3>Occupation type</SH3>
						<FlexBox align="start" flexDirection="column" style={{ rowGap: '10px' }}>
							<CheckBox>Full-time</CheckBox>
							<CheckBox>Part-time</CheckBox>
							<CheckBox>Parmanent</CheckBox>
							<CheckBox>Temporary/Seasonal</CheckBox>
						</FlexBox>
					</div>
					<div>
						<SH3>Desired salary</SH3>
						<FlexBox style={{ gap: '10px' }}>
							<Input placeholder="From" />
							<Input placeholder="To" />
						</FlexBox>
					</div>
					<div></div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};
export default ApplicationsFilter;
