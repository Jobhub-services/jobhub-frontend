import { FilterIcon } from '@/assets/icons';
import { Button, FlexBox, InputPicker } from 'staak-ui';
import HeaderTab from './HeaderTab';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ApplicantsHeader = () => {
	const navigate = useNavigate();
	const { status } = useParams();
	const { pathname, search } = useLocation();
	const { filterClosed, applicantsByJobs } = useAppSelector((state) => state.applications);
	const { total } = applicantsByJobs;

	function onChangeTab(status: string) {
		let path = pathname.split('/');
		path[2] = status;
		navigate(`${path.join('/')}${search}`);
	}
	return (
		<FlexBox justify="space-between">
			<FlexBox gap={20}>
				<HeaderTab onClick={onChangeTab} title="New Applicants" badge={`${total}`} active={status === 'new'} status="new" />
				<HeaderTab onClick={onChangeTab} title="In Process" badge={`${total}`} active={status === 'process'} status="process" />
				<HeaderTab onClick={onChangeTab} title="Hired" badge={`${total}`} active={status === 'hired'} status="hired" />
				<HeaderTab onClick={onChangeTab} title="Declined" badge={`${total}`} active={status === 'declined'} status="declined" />
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
				<InputPicker placeholder="Sort application by" width="300px">
					<InputPicker.Option>Newest</InputPicker.Option>
					<InputPicker.Option>Oldest</InputPicker.Option>
				</InputPicker>
			</FlexBox>
		</FlexBox>
	);
};

export default ApplicantsHeader;
