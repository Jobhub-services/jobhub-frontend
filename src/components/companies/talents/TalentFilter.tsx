import { CheckBox, FlexBox, TagInput, TagPicker } from 'staak-ui';
import FilterContianer from '@/components/common/filter/FilterContainer';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const TalentsFilter = () => {
	return (
		<FilterContianer title="Talents Searcher" type="talent">
			<FilterContianer.Body>
				<div>
					<SH3>Role</SH3>
					<TagInput />
				</div>
				<div className="mt-15">
					<SH3>Country</SH3>
					<TagPicker placeholder="Country">
						<TagPicker.Option value="france">France</TagPicker.Option>
						<TagPicker.Option value="china">China</TagPicker.Option>
						<TagPicker.Option value="turkey">Turkey</TagPicker.Option>
					</TagPicker>
				</div>
				<div className="mt-15">
					<SH3>Skills</SH3>
					<TagPicker placeholder="" name="skills">
						<TagPicker.Option value="reactjs">ReactJs</TagPicker.Option>
						<TagPicker.Option value="php">PHP</TagPicker.Option>
						<TagPicker.Option value="laravel">Laravel</TagPicker.Option>
					</TagPicker>
				</div>
				<div>
					<SH3>Work experience</SH3>
					<TagInput />
				</div>
				<div className="mt-15">
					<SH3>Status</SH3>
					<FlexBox align="start" flexDirection="column" style={{ rowGap: '10px' }}>
						<CheckBox>Ready To Interview</CheckBox>
						<CheckBox>Open To Offers</CheckBox>
						<CheckBox>Closed To Offers</CheckBox>
					</FlexBox>
				</div>
				<div className="mt-15">
					<SH3>Job Type</SH3>
					<FlexBox align="start" flexDirection="column" style={{ rowGap: '10px' }}>
						<CheckBox>Part-time</CheckBox>
						<CheckBox>Full-time</CheckBox>
						<CheckBox>Permanent</CheckBox>
						<CheckBox>Temporary</CheckBox>
					</FlexBox>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default TalentsFilter;
