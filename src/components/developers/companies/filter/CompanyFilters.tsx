import { colors } from '@/assets/theme';
import FilterContianer from '@/components/common/filter/FilterContainer';
import { CCompanySizesArray } from '@/constants/company/profile.constants';
import { companiesActions, companiesDispatcher } from '@/modules/actions/developer/companies.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { TagInput, TagPicker } from 'staak-ui';
import styled from 'styled-components';

export const STitle = styled.h3`
	margin: 10px 0;
	color: ${colors.BLUE_DARK_4};
`;

const CompanyFilters = () => {
	const { countries } = useAppSelector((state) => state.metadata);
	const { filters } = useAppSelector((state) => state.companies);
	const [searchParams, setSearchParams] = useSearchParams();

	const [clear, setClear] = useState(false);
	let localFilters: typeof filters = filters;

	useEffect(() => {
		if (countries?.count === 0) metadataActions.getCountries();
	}, [clear]);

	const onApply = () => {
		const tmp: any = {};

		if (localFilters?.headquarters?.length! > 0) tmp.headquarters = localFilters?.headquarters?.map((elem) => elem.value);
		if (localFilters?.company_size?.length! > 0) tmp.company_size = localFilters?.company_size?.map((elem) => elem.value);
		if (localFilters?.industry?.length! > 0) tmp.industry = localFilters?.industry;
		if (localFilters?.keywords?.length! > 0) tmp.keywords = localFilters?.keywords;

		companiesDispatcher.setFilters(localFilters);
		setSearchParams(createSearchParams(tmp));
		companiesActions.getCompanies(true, tmp, true);
	};

	const onClear = () => {
		setClear(!clear);
		companiesDispatcher.setFilters({});
		localFilters = {};
		setSearchParams({});
	};

	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		let tmp = { ...localFilters };
		tmp[name as 'headquarters' | 'company_size'] = value;
		localFilters = tmp;
	};
	const handleInputChange = (event: any, value: string[], name?: string) => {
		let tmp = { ...localFilters };
		tmp[name as 'keywords' | 'industry'] = value;
		localFilters = tmp;
	};
	return (
		<FilterContianer title="Company Filters" type="companies" onApply={onApply} onClear={onClear} width="25%">
			<FilterContianer.Body>
				<div className="mt-15">
					<STitle>Headquarters</STitle>
					<div className="mb-10">
						<TagPicker
							name="headquarters"
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
				<div className="mt-15">
					<STitle>Company size</STitle>
					<div className="mb-10">
						<TagPicker
							name="company_size"
							placeholder="Choose company size"
							values={localFilters?.company_size ?? []}
							className="mt-15"
							onChange={handleChange}
						>
							{CCompanySizesArray.map((elem, idx) => {
								return (
									<TagPicker.Option key={idx} value={elem}>
										{elem}
									</TagPicker.Option>
								);
							})}
						</TagPicker>
					</div>
				</div>
				<div className="mt-15">
					<STitle>Industry</STitle>
					<div className="mb-10">
						<TagInput
							name="industry"
							placeholder="Choose company industry and press enter"
							values={localFilters?.industry ?? []}
							className="mt-15"
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="mt-15">
					<STitle>Specialities</STitle>
					<div className="mb-10">
						<TagInput
							name="keywords"
							placeholder="Choose company specialities and press enter"
							values={localFilters?.keywords ?? []}
							className="mt-15"
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default CompanyFilters;
