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

const JobsFilter = () => {
	const { filterInfo } = useAppSelector((state) => state.developerJobs);
	const [clear, setClear] = useState(false);
	let localFilters: typeof filterInfo = {};
	const onApply = () => {
		console.log(localFilters);
		jobDispatcher.setFilters(localFilters);
		let tmp = {
			job_categories: localFilters?.job_categories?.map((elem) => elem.value),
			skills: localFilters?.skills?.map((elem) => elem.value),
			work_location: {
				remote: localFilters?.work_location?.remote,
				countries: localFilters?.work_location?.countries?.map((elem) => elem.value),
			},
			job_type: localFilters.job_type,
			job_salary: {
				...localFilters.job_salary,
				currencies: localFilters.job_salary?.currencies?.map((elem) => elem.value),
			},
			company_size: localFilters.company_size,
		};
		jobActions.getJobs(false, tmp);
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
