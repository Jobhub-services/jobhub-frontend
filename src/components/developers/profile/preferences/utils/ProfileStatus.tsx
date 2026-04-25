import { InputPickerField } from '@/components/common';
import { FlexBox, Button } from 'staak-ui';
import { SSpan, SpanTitle } from '@/components/developers/profile/common';
import { CProfileStatus } from '@/constants/developer/profile.constants';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';
import StatusItem from '@/components/developers/profile/preferences/utils/StatusItem';

const ProfileStatus = () => {
	const { status } = useAppSelector((state) => state.developerProfile.profile);
	const [localStatus, setLocalStatus] = useState(status);
	const [show, setShow] = useState(false);
	const handleInput = (event: any, value: any, label: string, name: string) => {
		event.preventDefault();
		if (localStatus !== value) {
			setShow(true);
			setLocalStatus(value);
			//profileDispatcher.setAttribute(value, 'status');
		}
	};
	const onSave = () => {
		profileAction.setAttribute(localStatus, 'status');
		setShow(false);
	};
	return (
		<FlexBox justify="start" align="start" gap={20}>
			<div style={{ width: '45%' }}>
				<SpanTitle>Your status</SpanTitle>
				{status ? (
					<StatusItem status={status} className="mt-15" />
				) : (
					<SSpan style={{ display: 'block' }} className="mt-15">
						Select the status of your job profile that will be visible to startups
					</SSpan>
				)}
			</div>
			<div style={{ width: '50%' }}>
				<InputPickerField name="status" title="Status" placeholder="Your status" value={CProfileStatus[localStatus!]?.value} onChange={handleInput}>
					<InputPickerField.Option value="ready">
						<StatusItem status="ready" />
					</InputPickerField.Option>
					<InputPickerField.Option value="open">
						<StatusItem status="open" />
					</InputPickerField.Option>
					<InputPickerField.Option value="closed">
						<StatusItem status="closed" />
					</InputPickerField.Option>
				</InputPickerField>
				{show && (
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button
							size="md"
							variant="text"
							onClick={() => {
								setShow(false);
							}}
						>
							Cancel
						</Button>
						<Button size="md" onClick={onSave}>
							Save
						</Button>
					</FlexBox>
				)}
			</div>
		</FlexBox>
	);
};

export default ProfileStatus;
