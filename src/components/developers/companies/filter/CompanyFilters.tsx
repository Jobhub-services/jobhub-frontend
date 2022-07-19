import { colors } from '@/assets/theme';
import FilterContianer from '@/components/common/filter/FilterContainer';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { TagPicker } from 'staak-ui';
import styled from 'styled-components';

export const STitle = styled.h3`
	margin: 10px 0;
	color: ${colors.BLUE_DARK_4};
`;

const CompanyFilters = () => {
	const { countries } = useAppSelector((state) => state.metadata);
	const { filters } = useAppSelector((state) => state.companies);
	const [clear, setClear] = useState();
	const localFilters: typeof filters = {};

	useEffect(() => {
		if (countries?.count === 0) metadataActions.getCountries();
	}, [clear]);

	const onApply = () => {};
	const handleJobType = (value: any, name?: string) => {};
	const onClear = () => {};
	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		let tmp = { ...localFilters };
		tmp.headquarters = value;
	};
	return (
		<FilterContianer title="Job Filters" type="companies" onApply={onApply} onClear={onClear} width="25%">
			<FilterContianer.Body>
				<div className="mt-15">
					<STitle>Headquarters</STitle>
					<div className="mb-10">
						<TagPicker
							name="work_location"
							placeholder="Choose your countries"
							values={localFilters?.headquarters ?? []}
							className="mt-15"
							onChange={handleChange}
						>
							{countries?.content?.map((elem, idx) => {
								const str = elem.name + '(' + elem.code + ')';
								return (
									<TagPicker.Option key={idx} value={elem._id!}>
										{str}
									</TagPicker.Option>
								);
							})}
						</TagPicker>
					</div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default CompanyFilters;
