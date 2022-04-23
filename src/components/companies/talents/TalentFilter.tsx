import { TagPicker } from 'staak-ui';
import FilterContianer from '@/components/companies/filter/FilterContainer';
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
					<TagPicker placeholder="Role">
						<TagPicker.Option value="frontend">Frontend developer</TagPicker.Option>
						<TagPicker.Option value="backend">Backend developer</TagPicker.Option>
					</TagPicker>
				</div>
				<div>
					<SH3>Country</SH3>
					<TagPicker placeholder="Country">
						<TagPicker.Option value="france">France</TagPicker.Option>
						<TagPicker.Option value="china">China</TagPicker.Option>
						<TagPicker.Option value="turkey">Turkey</TagPicker.Option>
					</TagPicker>
				</div>
				<div>
					<SH3>Skills</SH3>
					<TagPicker placeholder="Country">
						<TagPicker.Option value="reactjs">ReactJs</TagPicker.Option>
						<TagPicker.Option value="php">PHP</TagPicker.Option>
						<TagPicker.Option value="laravel">Laravel</TagPicker.Option>
					</TagPicker>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default TalentsFilter;
