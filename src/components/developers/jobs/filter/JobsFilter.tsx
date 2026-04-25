import FilterContianer from '@/components/common/filter/FilterContainer';
import Salary from '@/components/developers/jobs/filter/Salary';
import JobCategories from '@/components/developers/jobs/filter/JobCategories';
import JobType from '@/components/developers/jobs/filter/JobType';
import WorkLocation from '@/components/developers/jobs/filter/WorkLocation';
import Skills from '@/components/developers/jobs/filter/Skills';
import CompanySize from '@/components/developers/jobs/filter/CompanySize';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions, jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';

const JobsFilter = () => {
	const { filterInfo } = useAppSelector((state) => state.developerJobs);
	const [searchParams, setSearchParams] = useSearchParams();
	const [clear, setClear] = useState(false);
	let localFilters: typeof filterInfo = { ...filterInfo };
	const onApply = () => {
		jobDispatcher.setFilters(localFilters);
		let tmp: any = {};
		if (localFilters?.job_categories?.length! > 0) tmp.job_categories = localFilters?.job_categories?.map((elem) => elem.value);
		if (localFilters?.skills?.length! > 0) tmp.skills = localFilters?.skills?.map((elem) => elem.value);
		if (localFilters?.company_size?.length! > 0) tmp.company_size = localFilters?.company_size;

		if (localFilters?.job_type?.length! > 0) tmp.job_type = localFilters?.job_type;
		if (localFilters?.work_location?.remote) tmp.work_remotly = true;
		if (localFilters?.work_location?.countries?.length! > 0) tmp.work_location = localFilters?.work_location?.countries?.map((elem) => elem.value);
		if (localFilters.job_salary?.currencies?.length! > 0) tmp.currencies = localFilters.job_salary?.currencies?.map((elem) => elem.value);
		if (localFilters?.job_salary?.hourly?.checked && localFilters.job_salary?.hourly?.from && localFilters.job_salary?.hourly?.to)
			tmp.hourly = [localFilters.job_salary?.hourly?.from, localFilters.job_salary?.hourly?.to];
		if (localFilters?.job_salary?.monthly?.checked && localFilters.job_salary?.monthly?.to && localFilters.job_salary?.monthly?.from)
			tmp.monthly = [localFilters.job_salary?.monthly?.from, localFilters.job_salary?.monthly?.to];
		if (localFilters?.job_salary?.annually?.checked && localFilters.job_salary?.annually?.from && localFilters.job_salary?.annually?.to)
			tmp.annually = [localFilters.job_salary?.annually?.from, localFilters.job_salary?.annually?.to];

		if (searchParams.get('sort')) tmp['sort'] = searchParams.get('sort');
		const newParams = createSearchParams(tmp);
		setSearchParams(newParams);
		jobActions.getJobs(true, tmp, true);
	};
	const handleJobType = (value: any, name?: string) => {
		localFilters[name as 'job_type' | 'company_size' | 'job_categories' | 'work_location' | 'skills' | 'job_salary'] = value;
	};
	const onClear = () => {
		jobDispatcher.setFilters({});
		localFilters = {};
		setClear(!clear);
	};
	return (
		<FilterContianer title="Job Filters" type="developerJobs" onApply={onApply} onClear={onClear} width="40%">
			<FilterContianer.Body>
				<Salary onChange={handleJobType} jobSalary={localFilters?.job_salary} clear={clear} />
				<JobCategories onChange={handleJobType} jobCategories={localFilters?.job_categories} clear={clear} />
				<JobType onChange={handleJobType} jobType={localFilters?.job_type} clear={clear} />
				<WorkLocation onChange={handleJobType} worklocation={localFilters?.work_location} clear={clear} />
				<Skills onChange={handleJobType} skills={localFilters?.skills} clear={clear} />
				<CompanySize onChange={handleJobType} companySize={localFilters?.company_size} clear={clear} />
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default JobsFilter;
