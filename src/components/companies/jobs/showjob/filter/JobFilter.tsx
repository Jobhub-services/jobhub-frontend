import { CheckBox, DateRangePicker, TagPicker } from 'staak-ui';
import FilterContianer from '@/components/common/filter/FilterContainer';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import OccupationType from '@/components/companies/_common/filter/OccupationType';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import { createSearchParams, useSearchParams } from 'react-router-dom';

export const STitle = styled.h3`
	margin: 10px 0;
	color: ${colors.BLUE_DARK_4};
`;
const JobFilter = () => {
	const { filters } = useAppSelector((state) => state.job);
	const { job_categories } = useAppSelector((state) => state.metadata);
	const [searchParams, setSearchParams] = useSearchParams();
	const [clear, setClear] = useState(false);
	let localFilters: typeof filters = { ...filters };

	useEffect(() => {
		if (job_categories?.count === 0) metadataActions.getJobCategories();
	}, [clear]);

	const handleDate = (date: [Date | null, Date | null]) => {
		localFilters.createdAt = date;
		jobDispatcher.setFilters(localFilters);
	};

	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		localFilters[name as 'category'] = value;
	};

	const handleComponentChanges = (value: any, name?: string) => {
		localFilters[name as 'job_type'] = value;
	};
	const onClear = () => {
		setClear(!clear);
		localFilters = { category: [] };
		jobDispatcher.setFilters({ category: [] });
	};
	const onApply = () => {
		let tmpFilters: any = {};
		if (localFilters?.category?.length! > 0) tmpFilters.category = localFilters.category?.map((elem) => elem.value);
		if (localFilters?.createdAt?.length! > 0) tmpFilters.createdAt = localFilters.createdAt;
		if (localFilters?.job_type?.length! > 0) tmpFilters.job_type = localFilters.job_type;

		if (searchParams.get('sort')) tmpFilters['sort'] = searchParams.get('sort');

		setSearchParams(createSearchParams(tmpFilters));
		jobDispatcher.setFilters(localFilters);
		jobActions.getJobs(true, tmpFilters, true);
		jobDispatcher.setClosedFilter(true);
	};
	return (
		<FilterContianer title="Job filters" type="job" onApply={onApply} onClear={onClear}>
			<FilterContianer.Body>
				<div className="mt-15">
					<OccupationType onChange={handleComponentChanges} jobType={localFilters?.job_type} clear={clear} title="Employement Type" name="job_type" />
				</div>
				<div className="mt-20">
					<STitle>Job category</STitle>
					<TagPicker placeholder="Select job categories" values={localFilters?.category} onChange={handleChange} name="category">
						{job_categories?.content.map((elem, idx) => {
							return (
								<TagPicker.Option key={idx} value={elem._id}>
									{elem.name}
								</TagPicker.Option>
							);
						})}
					</TagPicker>
				</div>
				{/*<div>
					<STitle>Visa Sponsorship</STitle>
					<div>
						<CheckBox className="mb-10">Avavailable</CheckBox>
						<CheckBox className="mb-10">Unavavailable</CheckBox>
					</div>
					</div>*/}
				<div className="mt-20">
					<STitle>Posted date</STitle>
					<div>
						<DateRangePicker
							placeholder="Creation date"
							onChange={handleDate}
							startDate={filters?.createdAt && filters?.createdAt.length > 0 ? filters?.createdAt![0] : null}
							endDate={filters?.createdAt && filters?.createdAt.length > 1 ? filters?.createdAt![1] : null}
						/>
					</div>
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default JobFilter;
