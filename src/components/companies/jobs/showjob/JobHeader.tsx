import { FlexBox, Headline, Button, InputPicker } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { FilterIcon } from '@/assets/icons';
import { JobOrderType } from '@/types/jobs.type';
const JobHeader = () => {
	const { filterClosed, showJob } = useAppSelector((state) => state.job);
	function handlePicker(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		jobActions.setJobOrder(value as JobOrderType);
	}
	return (
		<FlexBox justify="space-between">
			<Headline variant="h2" size="sm">
				{showJob.count} Job founds
			</Headline>
			<FlexBox style={{ gap: '10px' }}>
				<Button
					onClick={(event: React.SyntheticEvent) => {
						jobActions.setClosedFilter(!filterClosed);
					}}
					variant="primary"
					startIcon={<FilterIcon />}
				>
					Filter
				</Button>
				<InputPicker placeholder="Sort by" width="300px" onChange={handlePicker}>
					<InputPicker.Option value="newest">Newest jobs</InputPicker.Option>
					<InputPicker.Option value="oldest">Oldest jobs</InputPicker.Option>
					<InputPicker.Option value="relevant">Most relevant jobs</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default JobHeader;
