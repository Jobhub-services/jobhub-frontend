import { CheckBox, FlexBox, TagInput, TagPicker } from 'staak-ui';
import FilterContianer from '@/components/common/filter/FilterContainer';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import ApplicantStatus from '@/components/companies/talents/filter/ApplicantStatus';
import Skills from '@/components/companies/_common/filter/Skills';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { CExperience } from '@/constants/company/talent.contants';
import { talentsActions, talentsDispatcher } from '@/modules/actions/company/talents.actions';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import OccupationType from '@/components/companies/_common/filter/OccupationType';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const TalentsFilter = () => {
	const { countries, roles } = useAppSelector((state) => state.metadata);
	const { filter } = useAppSelector((state) => state.talent);
	const [searchParams, setSearchParams] = useSearchParams();
	const [clear, setClear] = useState(false);
	let localFilters: typeof filter = { ...filter };

	useEffect(() => {
		if (countries?.count === 0) metadataActions.getCountries();
		if (roles?.count === 0) metadataActions.getRoles();
	}, []);

	const handleComponentChanges = (value: any, name?: string) => {
		localFilters[name as 'skills' | 'jobType' | 'status'] = value;
	};

	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		localFilters[name as 'country' | 'roles' | 'experienceYear'] = value;
	};

	const handleApply = () => {
		let tmpParams: any = {};
		if (Array.isArray(localFilters.skills) && localFilters.skills.length > 0) tmpParams['skills'] = localFilters.skills.map((elem) => elem.value);
		if (Array.isArray(localFilters.country) && localFilters.country.length > 0) tmpParams['country'] = localFilters.country.map((elem) => elem.value);
		if (Array.isArray(localFilters.roles) && localFilters.roles.length > 0) tmpParams['roles'] = localFilters.roles.map((elem) => elem.value);
		if (Array.isArray(localFilters.experienceYear) && localFilters.experienceYear.length > 0)
			tmpParams['experienceYear'] = localFilters.experienceYear.map((elem) => elem.value);
		if (Array.isArray(localFilters?.status) && localFilters.status.length > 0) tmpParams['status'] = localFilters.status;
		if (localFilters?.jobType?.length! > 0) tmpParams['jobType'] = localFilters.jobType;

		console.log(tmpParams);
		setSearchParams(createSearchParams(tmpParams));
		talentsActions.getTalents(true, tmpParams, true);
		talentsDispatcher.setFilters(localFilters);
	};

	const handleClear = () => {
		talentsDispatcher.setFilters({});
		setClear(!clear);
	};
	return (
		<FilterContianer title="Talents Filters" type="talent" onApply={handleApply} onClear={handleClear}>
			<FilterContianer.Body>
				<div>
					<SH3>Role</SH3>
					<TagPicker placeholder="Select talents roles" name="roles" values={localFilters.roles ?? []} onChange={handleChange}>
						{roles?.content?.map((elem, idx) => {
							return (
								<TagPicker.Option key={idx} value={elem._id}>
									{elem.name}
								</TagPicker.Option>
							);
						})}
					</TagPicker>
				</div>
				<div className="mt-15">
					<SH3>Country</SH3>
					<TagPicker placeholder="Select talents countries" name="country" values={localFilters.country ?? []} onChange={handleChange}>
						{countries?.content?.map((elem, idx) => {
							const tmp = elem.name + '(' + elem.code + ')';
							return (
								<TagPicker.Option key={idx} value={elem._id}>
									{tmp}
								</TagPicker.Option>
							);
						})}
					</TagPicker>
				</div>
				<Skills onChange={handleComponentChanges} skills={localFilters.skills} clear={clear} />
				<div className="mt-15">
					<SH3>Years of experience</SH3>
					<TagPicker
						placeholder="Choose years of experience"
						name="experienceYear"
						values={localFilters.experienceYear ?? []}
						onChange={handleChange}
					>
						{CExperience.map((elem, idx) => {
							return (
								<TagPicker.Option key={idx} value={elem}>
									{elem}
								</TagPicker.Option>
							);
						})}
					</TagPicker>
				</div>
				<ApplicantStatus onChange={handleComponentChanges} status={localFilters?.status} clear={clear} />
				<OccupationType onChange={handleComponentChanges} jobType={localFilters?.jobType} clear={clear} title="Occupation type" name="jobType" />
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default TalentsFilter;
