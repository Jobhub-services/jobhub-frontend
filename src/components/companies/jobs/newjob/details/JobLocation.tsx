import React, { useState } from 'react';
import { InputPicker, Input, CheckBox, Radio } from 'staak-ui';
import { PlusIcon, TrashIcon } from 'staak-ui';
import { StyledGap } from '../newjob.styles';
import { SButton, SIcon } from '@/components/companies/jobs/newjob/newjob.styles';

const JobLocation = (props: any) => {
	const [workLocations, setWorkLocations] = useState<{ index: number; value: string }[]>([]);
	const [hireLocations, setHireLocations] = useState<{ index: number; value: string }[]>([]);
	function addWorkLocation(event: React.SyntheticEvent) {
		const tmp = [...workLocations, { index: workLocations.length + 2, value: '' }];
		setWorkLocations(tmp);
	}
	function addHireLocation(event: React.SyntheticEvent) {
		const tmp = [...hireLocations, { index: hireLocations.length + 2, value: '' }];
		setHireLocations(tmp);
	}
	function removeWorkLocation(event: React.SyntheticEvent, index: number) {
		setWorkLocations(workLocations.filter((elem) => elem.index !== index));
	}
	function removeHireLocation(event: React.SyntheticEvent, index: number) {
		setHireLocations(hireLocations.filter((elem) => elem.index !== index));
	}
	return (
		<div>
			<h3>Location</h3>
			<div>
				<div>Job location</div>
				<div style={{ marginTop: '12px' }}>
					<CheckBox>Allow Remote Workers</CheckBox>
					<StyledGap justify="flex-start">
						<InputPicker width="45%" name="job_location" placeholder="Country" title="Country">
							<InputPicker.Option value="full_time">Full-time</InputPicker.Option>
							<InputPicker.Option value="part_time">Part-time</InputPicker.Option>
							<InputPicker.Option value="contract">Contract</InputPicker.Option>
							<InputPicker.Option value="temporary">Temporary</InputPicker.Option>
							<InputPicker.Option value="other">Other</InputPicker.Option>
						</InputPicker>
						<Input width="45%" name="zip_code" placeholder="Region, City or Zip Code" />
					</StyledGap>
				</div>
				{workLocations.map((elem, key) => {
					return (
						<StyledGap key={key} justify="flex-start">
							<InputPicker width="45%" name="job_location" placeholder="Country" title="Country">
								<InputPicker.Option value="full_time">Full-time</InputPicker.Option>
								<InputPicker.Option value="part_time">Part-time</InputPicker.Option>
								<InputPicker.Option value="contract">Contract</InputPicker.Option>
								<InputPicker.Option value="temporary">Temporary</InputPicker.Option>
								<InputPicker.Option value="other">Other</InputPicker.Option>
							</InputPicker>
							<Input width="45%" name="zip_code" placeholder="Region, City or Zip Code" />
							<SIcon onClick={(event: React.SyntheticEvent) => removeWorkLocation(event, elem.index)} width="25px" height="25px">
								<TrashIcon color="inherit" />
							</SIcon>
						</StyledGap>
					);
				})}
				<SButton onClick={addWorkLocation} variant="text" startIcon={<PlusIcon />}>
					Add location
				</SButton>
			</div>
			<div className="mt-15">
				<div>Hire Remotly</div>
				<div style={{ marginTop: '12px' }}>
					<CheckBox>Allow Remote Hiring</CheckBox>
					<StyledGap justify="flex-start">
						<InputPicker width="45%" name="hire_remotly" placeholder="Country" title="Hire Remotly">
							<InputPicker.Option value="full_time">Full-time</InputPicker.Option>
							<InputPicker.Option value="part_time">Part-time</InputPicker.Option>
							<InputPicker.Option value="contract">Contract</InputPicker.Option>
							<InputPicker.Option value="temporary">Temporary</InputPicker.Option>
							<InputPicker.Option value="other">Other</InputPicker.Option>
						</InputPicker>
						<Input width="45%" name="zip_code" placeholder="Region, City or Zip Code" />
					</StyledGap>
				</div>
				{hireLocations.map((elem, key) => {
					return (
						<StyledGap key={key} justify="flex-start">
							<InputPicker width="45%" name="job_location" placeholder="Country" title="Country">
								<InputPicker.Option value="full_time">Full-time</InputPicker.Option>
								<InputPicker.Option value="part_time">Part-time</InputPicker.Option>
								<InputPicker.Option value="contract">Contract</InputPicker.Option>
								<InputPicker.Option value="temporary">Temporary</InputPicker.Option>
								<InputPicker.Option value="other">Other</InputPicker.Option>
							</InputPicker>
							<Input width="45%" name="zip_code" placeholder="Region, City or Zip Code" />
							<SIcon onClick={(event: React.SyntheticEvent) => removeHireLocation(event, elem.index)} width="25px" height="25px">
								<TrashIcon color="inherit" />
							</SIcon>
						</StyledGap>
					);
				})}
				<SButton onClick={addHireLocation} variant="text" startIcon={<PlusIcon />}>
					Add location
				</SButton>
			</div>
			<div className="mt-15">
				<div>Visa sponsorship</div>
				<StyledGap align="flex-start" justify="flex-start">
					<Radio>Yes</Radio>
					<Radio>No</Radio>
				</StyledGap>
			</div>
		</div>
	);
};

export default JobLocation;
