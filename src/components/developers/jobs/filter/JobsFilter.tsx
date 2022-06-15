import FilterContianer from '@/components/common/filter/FilterContainer';
import Salary from '@/components/developers/jobs/filter/Salary';

const JobsFilter = () => {
	const onApply = () => {};
	const onClear = () => {};
	return (
		<FilterContianer title="Applications Searcher" type="developerJobs" onApply={onApply} onClear={onClear} width="40%">
			<FilterContianer.Body>
				<Salary />
			</FilterContianer.Body>
		</FilterContianer>
	);
};

export default JobsFilter;
