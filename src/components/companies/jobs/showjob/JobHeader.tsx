import { FlexBox, Headline, Button, InputPicker } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { FilterIcon } from '@/assets/icons';
import { useSearchParams } from 'react-router-dom';
const JOB_SORT: any = { '-1': 'Newest jobs', '1': 'Oldest jobs' };

const JobHeader = () => {
	const { filterClosed, showJob } = useAppSelector((state) => state.job);
	const [searchParams, setSearchParams] = useSearchParams();

	const handlePicker = (evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) => {
		const sort = searchParams.get('sort') ?? '-1';
		searchParams.set('sort', value);
		setSearchParams(searchParams);
		if (sort !== value) jobActions.getJobs(true, searchParams, true);
	};

	return (
		<FlexBox justify="space-between">
			<Headline variant="h2" size="sm">
				{showJob.count} Job(s) founds
			</Headline>
			<FlexBox gap={10}>
				<Button
					onClick={(event: React.SyntheticEvent) => {
						jobActions.setClosedFilter(!filterClosed);
					}}
					variant="primary"
					startIcon={<FilterIcon />}
				>
					Filter
				</Button>
				<InputPicker placeholder="Sort by" width="300px" onChange={handlePicker} value={JOB_SORT[searchParams.get('sort') ?? '-1']}>
					<InputPicker.Option value="-1">Newest jobs</InputPicker.Option>
					<InputPicker.Option value="1">Oldest jobs</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default JobHeader;
