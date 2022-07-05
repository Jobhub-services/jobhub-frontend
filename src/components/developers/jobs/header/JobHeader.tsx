import { Button, FlexBox, InputPicker } from 'staak-ui';
import HeaderNav from '@/components/developers/jobs/header/HeaderNav';
import { FilterIcon } from '@/assets/icons';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';

const JobHeader = () => {
	const { filterClosed, jobInfo } = useAppSelector((state) => state.developerJobs);
	const onChangeTab = () => {};
	return (
		<FlexBox justify="space-between">
			<FlexBox gap={20}>
				<HeaderNav onClick={onChangeTab} status="Browse all" active title="Browse all" badge={jobInfo?.count?.toString()} />
				<HeaderNav onClick={onChangeTab} status="Saved" title="Saved" badge="30" />
			</FlexBox>
			<FlexBox gap={15}>
				<Button
					startIcon={<FilterIcon />}
					onClick={() => {
						jobActions.setClosedFilter(!filterClosed);
					}}
				>
					Filter
				</Button>

				<InputPicker placeholder="Sort application by" width="300px">
					<InputPicker.Option>Most recent</InputPicker.Option>
					<InputPicker.Option>Highest salary</InputPicker.Option>
					<InputPicker.Option>Lowest salary</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default JobHeader;
