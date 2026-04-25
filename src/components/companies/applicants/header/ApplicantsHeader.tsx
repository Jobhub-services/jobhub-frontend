import { FilterIcon } from '@/assets/icons';
import { Button, FlexBox, InputPicker } from 'staak-ui';
import HeaderTab from './HeaderTab';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { PApplicationHeader } from '@/models/component/companies/applications/applications.interface';

const SORT_MAP = { '-1': 'Newest job', '1': 'Oldest job' };
const SORT_MAP_APP = { '-1': 'Newest applicant', '1': 'Oldest applicant' };

const ApplicantsHeader = ({ viewType, count, onChangeTab }: PApplicationHeader) => {
	const { status } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const { filterClosed } = useAppSelector((state) => state.applications);

	const handleChange = (event: any, value: string, label: string, name: string) => {
		const sort = searchParams.get('sort') ?? '-1';
		searchParams.set('sort', value);
		setSearchParams(searchParams);
		let params: any = {};
		for (const [k, v] of searchParams.entries()) params[k] = v;
		if (sort !== value) {
			if (viewType === 'byjob') applicationsActions.getApplicantsByJobs(status as any, true, params, true);
			else applicationsActions.getShowApplicants(status as any, true, params, true);
		}
	};
	return (
		<FlexBox justify="space-between">
			<FlexBox gap={20}>
				<HeaderTab onClick={onChangeTab} title="New Applicants" badge={`${count ?? '0'}`} active={status === 'NEW'} status="NEW" />
				<HeaderTab onClick={onChangeTab} title="In Process" badge={`${count ?? '0'}`} active={status === 'IN_PROGRESS'} status="IN_PROGRESS" />
				<HeaderTab onClick={onChangeTab} title="Hired" badge={`${count ?? '0'}`} active={status === 'HIRED'} status="HIRED" />
				<HeaderTab onClick={onChangeTab} title="Declined" badge={`${count ?? '0'}`} active={status === 'DECLINED'} status="DECLINED" />
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
							? SORT_MAP[(searchParams.get('sort') as '-1' | '1') ?? '-1']
							: SORT_MAP_APP[(searchParams.get('sort') as '-1' | '1') ?? '-1']
					}
				>
					<InputPicker.Option value="-1">Newest {viewType === 'byjob' ? 'job' : 'applicant'}</InputPicker.Option>
					<InputPicker.Option value="1">Oldest {viewType === 'byjob' ? 'job' : 'applicant'}</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default ApplicantsHeader;
