import { useEffect, useState } from 'react';
import { JobReviewProps } from '@/models/component';
import { FlexBox, Button, Radio, DateRangePicker } from 'staak-ui';
import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { jobActions } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { StyledGap } from '../newjob.styles';
import React from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { JobStringIndex } from '@/types/jobs';

const BasicDetails = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { job_categories, comapny_division } = useAppSelector((state) => state.metadata);
	const data = createJob;
	/* get job categories and company division from the server */
	useEffect(() => {
		metadataActions.getComapnyDivision();
		metadataActions.getJobCategories();
	}, []);
	function handleNext(event: React.SyntheticEvent) {
		jobActions.saveJobData(data);
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const value = event.target.value;
		const name: JobStringIndex = event.target.name as JobStringIndex;
		let tmp = { ...data };
		tmp[name] = value;
		jobActions.saveJobData(tmp);
	}
	function handleDate(date: [Date | null, Date | null]) {
		let tmp = { ...data };
		tmp['duration_range'] = date;
		jobActions.saveJobData(tmp);
	}
	function handleInputPicker(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		let tmp = { ...data };
		const idx = name as JobStringIndex;
		tmp[idx] = label;
		jobActions.saveJobData(tmp);
	}
	return (
		<>
			<FlexBox justify="flex-start" align="flex-start">
				<div style={{ padding: '0px 15px 0 0', width: '50%' }}>
					<h3>General information</h3>
					<InputField placeholder="Title" name="title" onChange={handleInput} value={data.title}>
						Title
					</InputField>
					<TextAreaField
						className="mt-10"
						placeholder="Description"
						name="description"
						height="200px"
						onChange={handleInput}
						value={data.description}
					>
						Job Description
					</TextAreaField>
					<TextAreaField
						className="mt-10"
						placeholder="Responsabilities"
						name="responsabilities"
						height="190px"
						onChange={handleInput}
						value={data.responsabilities}
					>
						Job Responsabilities
					</TextAreaField>
				</div>
				<div style={{ padding: '0px 0px 0px 15px', width: '50%' }}>
					<div>
						<h3>Job function</h3>
						<InputPickerField
							name="company_division"
							placeholder="Division"
							title="Company division"
							value={data.company_division}
							onChange={handleInputPicker}
						>
							{comapny_division?.map((elem, idx) => {
								return (
									<InputPickerField.Option key={idx} value={elem.value!}>
										{elem.label}
									</InputPickerField.Option>
								);
							})}
						</InputPickerField>
						<InputPickerField name="category" placeholder="Category" title="Category" value={data.category} onChange={handleInputPicker}>
							{job_categories?.map((elem, idx) => {
								return (
									<InputPickerField.Option key={idx} value={elem.value!}>
										{elem.label}
									</InputPickerField.Option>
								);
							})}
						</InputPickerField>
					</div>
					<div>
						<h3>Employment type & Duration</h3>
						<div>
							<label>Type</label>
							<StyledGap justify="flex-start">
								<Radio name="job_type" value="full_time" checked={data.job_type === 'full_time'} onChange={handleInput}>
									Full-Time
								</Radio>
								<Radio name="job_type" value="part_time" checked={data.job_type === 'part_time'} onChange={handleInput}>
									Part-Time
								</Radio>
							</StyledGap>
						</div>
						<div className="mt-15">
							<label>Duration</label>
							<StyledGap justify="flex-start">
								<Radio name="duration" value="permanent" checked={data.duration === 'permanent'} onChange={handleInput}>
									Permanent
								</Radio>
								<Radio name="duration" value="temporary" checked={data.duration === 'temporary'} onChange={handleInput}>
									Temporary/Seasonal
								</Radio>
							</StyledGap>
						</div>
						{data.duration === 'temporary' && (
							<div className="mt-15">
								<DateRangePicker
									placeholder="Start date - End Date"
									onChange={handleDate}
									startDate={data.duration_range![0]}
									endDate={data.duration_range![1]}
								/>
							</div>
						)}
					</div>
				</div>
			</FlexBox>
			<StyledGap align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Save & Continue</Button>
			</StyledGap>
		</>
	);
};

export default BasicDetails;
