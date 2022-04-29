import React, { useState, useEffect } from 'react';
import { InputPicker, Input, CheckBox, Radio } from 'staak-ui';
import { PlusIcon, TrashIcon } from 'staak-ui';
import { StyledGap } from '../newjob.styles';
import { SButton, SIcon } from '@/components/companies/jobs/newjob/newjob.styles';
import { JobArrayIndex, JobBooleanIndex } from '@/types/jobs';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';

const JobLocation = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { countries } = useAppSelector((state) => state.metadata);
	const data = createJob;
	useEffect(() => {
		metadataActions.getCountries();
	}, []);
	function addWorkLocation(event: React.SyntheticEvent) {
		const tmp = { ...data };
		tmp.work_location = [...data.work_location!, { country: '', city: '' }];
		jobActions.saveJobData(tmp);
	}
	function addHireLocation(event: React.SyntheticEvent) {
		const tmp = { ...data };
		tmp.hire_location = [...data.hire_location!, { country: '', city: '' }];
		jobActions.saveJobData(tmp);
	}
	function removeWorkLocation(event: React.SyntheticEvent, index: number) {
		const tmp = { ...data };
		tmp.work_location = tmp.work_location?.filter((elem, idx) => idx !== index);
		jobActions.saveJobData(tmp);
	}
	function removeHireLocation(event: React.SyntheticEvent, index: number) {
		const tmp = { ...data };
		tmp.hire_location = tmp.hire_location?.filter((elem, idx) => idx !== index);
		jobActions.saveJobData(tmp);
	}
	function handleInput(event: React.ChangeEvent<HTMLInputElement>, index: number) {
		const value = event.target.value;
		const name: JobArrayIndex.location = event.target.name as JobArrayIndex.location;
		let tmp = { ...data };
		let tmpArray = [...tmp[name]!];
		tmpArray[index] = { country: tmpArray[index]!.country, city: value };
		tmp[name] = tmpArray;
		jobActions.saveJobData(tmp);
	}
	function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		const name: JobBooleanIndex = event.target.name as JobBooleanIndex;
		let tmp = { ...data };
		tmp[name] = value === 'false';
		jobActions.saveJobData(tmp);
	}
	function handleInputPicker(event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string, index: number) {
		const idx = name as JobArrayIndex.location;
		let tmp = { ...data };
		let tmpArray = [...tmp[idx]!];
		tmpArray[index] = { country: label, city: tmpArray[index].city };
		tmp[idx] = tmpArray;
		jobActions.saveJobData(tmp);
	}

	return (
		<div>
			<h3>Job Location</h3>
			<div>
				<div>Work location</div>
				<div style={{ marginTop: '12px' }}>
					<CheckBox name="work_remotly" value={data.work_remotly} checked={data.work_remotly} onChange={handleCheckBox}>
						Allow Remote Workers
					</CheckBox>
					{data.work_location?.map((elem, idx) => {
						return (
							<StyledGap key={idx} justify="flex-start">
								<InputPicker
									type="text"
									width="45%"
									name="work_location"
									placeholder="Country"
									title="Country"
									value={elem.country}
									onChange={(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) =>
										handleInputPicker(evet, value, label, name, idx)
									}
								>
									{countries?.map((elem, idx) => {
										return (
											<InputPicker.Option key={idx} value={elem.code!}>
												{elem.label}
											</InputPicker.Option>
										);
									})}
								</InputPicker>
								<Input
									width="45%"
									name="work_location"
									placeholder="Region, City or Zip Code"
									value={elem.city}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event, idx)}
								/>
								<SIcon onClick={(event: React.SyntheticEvent) => removeWorkLocation(event, idx)} width="25px" height="25px">
									<TrashIcon color="inherit" />
								</SIcon>
							</StyledGap>
						);
					})}
				</div>
				<SButton onClick={addWorkLocation} variant="text" startIcon={<PlusIcon />}>
					Add location
				</SButton>
			</div>
			<div className="mt-15">
				<div>Candidate Location</div>
				<div style={{ marginTop: '12px' }}>
					<CheckBox name="hire_remotly" value={data.hire_remotly} checked={data.hire_remotly} onChange={handleCheckBox}>
						Allow Remote Hiring
					</CheckBox>
					{data.hire_location?.map((elem, idx) => {
						return (
							<StyledGap key={idx} justify="flex-start">
								<InputPicker
									width="45%"
									name="hire_location"
									placeholder="Country"
									title="Country"
									value={elem.country}
									onChange={(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) =>
										handleInputPicker(evet, value, label, name, idx)
									}
								>
									{countries?.map((elem, idx) => {
										return (
											<InputPicker.Option key={idx} value={elem.code!}>
												{elem.label}
											</InputPicker.Option>
										);
									})}
								</InputPicker>
								<Input
									width="45%"
									name="hire_location"
									placeholder="Region, City or Zip Code"
									value={elem.city}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event, idx)}
								/>
								<SIcon onClick={(event: React.SyntheticEvent) => removeHireLocation(event, idx)} width="25px" height="25px">
									<TrashIcon color="inherit" />
								</SIcon>
							</StyledGap>
						);
					})}
				</div>
				<SButton onClick={addHireLocation} variant="text" startIcon={<PlusIcon />}>
					Add location
				</SButton>
			</div>
			<div className="mt-15">
				<CheckBox name="visa_sponsorship" value={data.visa_sponsorship} checked={data.visa_sponsorship} onChange={handleCheckBox}>
					Visa sponsorship
				</CheckBox>
			</div>
		</div>
	);
};

export default JobLocation;
