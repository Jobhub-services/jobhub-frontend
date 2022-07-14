import { FilterIcon } from '@/assets/icons';
import { Button, FlexBox, InputPicker } from 'staak-ui';
import HeaderTab from './HeaderTab';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useAppSelector } from '@/utils/appHooks';
import { createSearchParams, useParams, useSearchParams } from 'react-router-dom';

const SORT_MAP = { des: 'Newest job', asc: 'Oldest job' };
const SORT_MAP_APP = { des: 'Newest applicant', asc: 'Oldest applicant' };

const ApplicantsHeader = ({ viewType, onChangeTab }: { viewType: 'byjob' | 'search'; onChangeTab: (status: string) => void }) => {
	const { status } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const { filterClosed, applicantsByJobs } = useAppSelector((state) => state.applications);
	const { count } = applicantsByJobs;

	const handleChange = (event: any, value: string, label: string, name: string) => {
		const sort = searchParams.get('sort') ?? 'des';
		searchParams.set('sort', value);
		setSearchParams(searchParams);
		let params: any = {};
		for (const [k, v] of searchParams.entries()) params[k] = v;
		if (sort !== value) {
			if (viewType === 'byjob') applicationsActions.getApplicantsByJobs(status as any, params);
			else applicationsActions.getShowApplicants(params, status as any);
		}
	};
	return (
		<FlexBox justify="space-between">
			<FlexBox gap={20}>
				<HeaderTab onClick={onChangeTab} title="New Applicants" badge={`${count}`} active={status === 'new'} status="new" />
				<HeaderTab onClick={onChangeTab} title="In Process" badge={`${count}`} active={status === 'process'} status="process" />
				<HeaderTab onClick={onChangeTab} title="Hired" badge={`${count}`} active={status === 'hired'} status="hired" />
				<HeaderTab onClick={onChangeTab} title="Declined" badge={`${count}`} active={status === 'declined'} status="declined" />
			</FlexBox>
			<FlexBox gap={10}>
				<Button
					startIcon={<FilterIcon />}
					onClick={() => {
						applicationsActions.setClosedFilter(!filterClosed);
					}}
				>
					Filter
				</Button>
				<InputPicker
					placeholder="Sort application by"
					width="300px"
					onChange={handleChange}
					value={
						viewType === 'byjob'
							? SORT_MAP[(searchParams.get('sort') as 'des' | 'asc') ?? 'des']
							: SORT_MAP_APP[(searchParams.get('sort') as 'des' | 'asc') ?? 'des']
					}
				>
					<InputPicker.Option value="des">Newest {viewType === 'byjob' ? 'job' : 'applicant'}</InputPicker.Option>
					<InputPicker.Option value="asc">Oldest {viewType === 'byjob' ? 'job' : 'applicant'}</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default ApplicantsHeader;
