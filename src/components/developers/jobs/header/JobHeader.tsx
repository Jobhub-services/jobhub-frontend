import { Button, FlexBox, InputPicker } from 'staak-ui';
import HeaderNav from '@/components/developers/jobs/header/HeaderNav';
import { FilterIcon } from '@/assets/icons';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useSearchParams } from 'react-router-dom';

const SORT_MAP_APP = { '-1': 'Most recent', '1': 'Highest salary', '0': 'Lowest salary' };
// os mean Only Saved
const JobHeader = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { filterClosed, jobInfo } = useAppSelector((state) => state.developerJobs);

	const onChangeTab = (value: string) => {
		let val = '0';
		value === 'Saved' ? (val = '1') : (val = '0');
		const currentOs = searchParams.get('os') ?? '0';
		searchParams.set('os', val);
		setSearchParams(searchParams);
		let params: any = {};
		for (const [k, v] of searchParams.entries()) params[k] = v;
		if (currentOs !== val) {
			jobActions.getJobs(true, params, true);
		}
	};

	const handleChange = (event: any, value: string, label: string, name: string) => {
		const sort = searchParams.get('sort') ?? '-1';
		searchParams.set('sort', value);
		setSearchParams(searchParams);
		let params: any = {};
		for (const [k, v] of searchParams.entries()) params[k] = v;
		if (sort !== value) {
			jobActions.getJobs(true, params, true);
		}
	};

	const os = searchParams.get('os') ?? '0';
	return (
		<FlexBox justify="space-between">
			<FlexBox gap={20}>
				<HeaderNav
					onClick={onChangeTab}
					status="Browse all"
					active={os === '0'}
					title="Browse all"
					badge={jobInfo?.count ? jobInfo?.count?.toString() : '0'}
				/>
				<HeaderNav onClick={onChangeTab} status="Saved" active={os === '1'} title="Saved" badge={jobInfo?.count ? jobInfo?.count?.toString() : '0'} />
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

				<InputPicker
					placeholder="Sort application by"
					width="300px"
					onChange={handleChange}
					value={SORT_MAP_APP[(searchParams.get('sort') as '-1' | '1' | '0') ?? '-1']}
				>
					<InputPicker.Option value="-1">Most recent</InputPicker.Option>
					<InputPicker.Option value="1">Highest salary</InputPicker.Option>
					<InputPicker.Option value="0">Lowest salary</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default JobHeader;
