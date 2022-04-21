import FilterIcon from '@/assets/icons/FilterIcon';
import { Button, FlexBox, InputPicker } from 'staak-ui';
import styled from 'styled-components';
import HeaderTab from './HeaderTab';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useNavigate, useParams } from 'react-router-dom';

const Sgap = styled(FlexBox)`
	gap: ${(props) => props.gap}px;
`;
const ApplicantsHeader = () => {
	const navigate = useNavigate();
	const { status } = useParams();
	const { filterClosed } = useAppSelector((state) => state.applications);
	function onChangeTab(status: string) {
		navigate(`/applicants/${status}`, { replace: true });
	}
	return (
		<FlexBox justify="space-between">
			<Sgap gap="20">
				<HeaderTab onClick={onChangeTab} title="New Applicants" badge="10" active={status === 'new'} status="new" />
				<HeaderTab onClick={onChangeTab} title="In Process" badge="5" active={status === 'process'} status="process" />
				<HeaderTab onClick={onChangeTab} title="Hired" badge="2" active={status === 'hired'} status="hired" />
				<HeaderTab onClick={onChangeTab} title="Declined" badge="3" active={status === 'declined'} status="declined" />
			</Sgap>
			<Sgap gap="10">
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
			</Sgap>
		</FlexBox>
	);
};

export default ApplicantsHeader;
