import { InputPickerField } from '@/components/common';
import { SSpan, SpanTitle } from '@/components/developers/profile/common';
import { JobTypeBColor } from '@/constants/public/job.constants';
import { profileDispatcher } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { CheckBox, FlexBox, Button, Tag } from 'staak-ui';
import styled from 'styled-components';
const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;
const DesiredJob = () => {
	const { job_type, other_job_type } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const onSave = () => {
		setShow(false);
	};
	const valExists = (val: string) => {
		return other_job_type?.some((elem) => elem === val);
	};
	const handlePicker = (e: any, value: string, label: string, name: string) => {
		if (!show) setShow(true);
		profileDispatcher.setAttribute(value, 'job_type');
	};
	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!show) setShow(true);
		const { value, checked } = event.target;
		const tmp = checked ? [...(other_job_type ?? []), value] : other_job_type?.filter((elem) => elem !== value);
		profileDispatcher.setAttribute(tmp, 'other_job_type');
	};
	return (
		<FlexBox justify="start" align="start" gap={20}>
			<div style={{ width: '45%' }}>
				<SpanTitle>Job type</SpanTitle>
				<div>
					{job_type && job_type !== '' && (
						<FlexBox className="mt-15" gap={20} justify="start">
							<span>Primary job types</span>
							<Tag color={JobTypeBColor[job_type!]}>{job_type}</Tag>
						</FlexBox>
					)}
					{Array.isArray(other_job_type) && other_job_type.length > 0 && (
						<div className="mt-15">
							<div className="mb-10">Open to the following job types</div>
							<TagWrapper className="mt-15">
								{other_job_type?.map((elem, idx) => {
									return (
										<Tag key={idx} value={elem}>
											{elem}
										</Tag>
									);
								})}
							</TagWrapper>
						</div>
					)}
					{!job_type && !Array.isArray(other_job_type) && <SSpan className="mt-15">What type of job are you interested in</SSpan>}
				</div>
			</div>
			<div style={{ width: '50%' }}>
				<InputPickerField name="job_type" value={job_type} placeholder="Job type" title="Desired job type" onChange={handlePicker}>
					<InputPickerField.Option value="Full time">Full time</InputPickerField.Option>
					<InputPickerField.Option value="Part time">Part time</InputPickerField.Option>
					<InputPickerField.Option value="Permanent">Permanent</InputPickerField.Option>
					<InputPickerField.Option value="Temporary">Temporary</InputPickerField.Option>
				</InputPickerField>
				<div className="mt-15">
					<div className="mb-10">Also open to the following job types</div>
					<CheckBox active={valExists('Full time')} value="Full time" className="mb-10" onChange={handleCheck}>
						Full time
					</CheckBox>
					<CheckBox active={valExists('Part time')} value="Part time" className="mb-10" onChange={handleCheck}>
						Part time
					</CheckBox>
					<CheckBox active={valExists('Permanent')} value="Permanent" className="mb-10" onChange={handleCheck}>
						Permanent
					</CheckBox>
					<CheckBox active={valExists('Temporary')} value="Temporary" onChange={handleCheck}>
						Temporary
					</CheckBox>
				</div>
				{show && (
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button size="md" variant="text" onClick={() => setShow(false)}>
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

export default DesiredJob;
