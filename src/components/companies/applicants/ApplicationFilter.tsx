import FilterContianer from '@/components/common/filter/FilterContainer';
import { CheckBox, DateRangePicker, FlexBox, Input, InputPicker, TagInput, TagPicker } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useParams, useSearchParams } from 'react-router-dom';
import { ApplicationStatus, FilterType } from '@/types/applications.type';
import { toString } from '@/utils/helpers';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const ApplicationsFilter = () => {
	const { status } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const { filter } = useAppSelector((state) => state.applications);
	function onClear() {
		const filter: FilterType = {
			jobTitle: '',
			country: [],
			occupationType: '',
			applicationDate: [null, null],
			applicantRole: [],
			skills: [],
		};
		applicationsActions.setFilter(filter);
	}
	function onApply() {
		for (var [key, value] of Object.entries(filter)) {
			if ((typeof value === 'string' && value !== '') || (typeof value === 'object' && value.length > 0)) searchParams.set(key, toString(value));
		}
		setSearchParams(searchParams);
		applicationsActions.getShowApplicants(status as ApplicationStatus, filter);
	}

	return (
		<FilterContianer title="Applications Searcher" type="applications" onApply={onApply} onClear={onClear}>
			<FilterContianer.Body>
				<div>
					<div>
						<SH3>Job title</SH3>
						<Input placeholder="Title" value={filter.jobTitle} />
					</div>
					<div className="mt-20">
						<SH3>Applicants Role</SH3>
						<TagInput value={filter.applicantRole} />
					</div>
					<div className="mt-20">
						<SH3>Country</SH3>
						<TagPicker values={filter.country}>
							<InputPicker.Option>Germany</InputPicker.Option>
							<InputPicker.Option>Turkey</InputPicker.Option>
							<InputPicker.Option>Bahrain</InputPicker.Option>
						</TagPicker>
					</div>
					<div className="mt-20">
						<SH3>Application date</SH3>
						<DateRangePicker placeholder="Start date - End date" startDate={filter.applicationDate![0]} endDate={filter.applicationDate![1]} />
					</div>
					<div className="mt-20">
						<SH3>Skills</SH3>
						<TagPicker name="skills" values={filter.skills}>
							<TagPicker.Option value="reactjs">ReactJs</TagPicker.Option>
							<TagPicker.Option value="php">PHP</TagPicker.Option>
						</TagPicker>
					</div>
					<div className="mt-20">
						<SH3>Occupation type</SH3>
						<FlexBox align="start" flexDirection="column" style={{ rowGap: '10px' }}>
							<CheckBox>Full-time</CheckBox>
							<CheckBox>Part-time</CheckBox>
							<CheckBox>Parmanent</CheckBox>
							<CheckBox>Temporary/Seasonal</CheckBox>
						</FlexBox>
					</div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};
export default ApplicationsFilter;
