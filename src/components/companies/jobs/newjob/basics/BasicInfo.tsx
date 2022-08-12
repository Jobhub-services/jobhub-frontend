import { useEffect, useRef, useState } from 'react';
import { JobReviewProps } from '@/models/component';
import { FlexBox, Button, Radio, DateRangePicker } from 'staak-ui';
import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import React from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { JobStringIndex } from '@/types/company/jobs.type';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';
import InputEditor from '@/components/common/input/InputEditor';
import { colors } from '@/assets/theme';
import styled, { css } from 'styled-components';

const SLabel = styled.label<any>`
	display: inline-block;
	${(props) =>
		props.error &&
		css`
			color: ${colors.RED_BASE};
		`}//margin: 5px 0px;
`;

const SRequired = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	font-size: 16px;
`;

const BasicDetails = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { job_categories, comapny_division } = useAppSelector((state) => state.metadata);
	const [editorVal, setEditorVal] = useState<{ description?: string; responsabilities?: string }>({});
	const [errors, setErrors] = useState<{ title: boolean; description: boolean; category: boolean; job_type: boolean }>({
		title: false,
		description: false,
		category: false,
		job_type: false,
	});
	const data = createJob;

	/* get job categories and company division from the server */
	useEffect(() => {
		if (comapny_division?.size === 0) metadataActions.getComapnyDivision();
		if (job_categories?.size === 0) metadataActions.getJobCategories();
		setEditorVal({ description: data.description, responsabilities: data.responsabilities });
	}, []);

	const handleEditor = (v: string, n: string) => {
		let tmp = { ...editorVal };
		tmp[n as 'description' | 'responsabilities'] = v;
		setEditorVal(tmp);
	};

	const handleNext = (event: React.SyntheticEvent) => {
		const tmp = { ...data, description: editorVal.description, responsabilities: editorVal.responsabilities };
		const tmpErr: any = {
			title: !tmp.title || tmp.title === '',
			description: !tmp.description || tmp.description === '',
			category: !tmp.category || tmp.category.id === '',
			job_type: !tmp.job_type || tmp.job_type === '',
		};
		const error: boolean = (tmpErr.title || tmpErr.description || tmpErr.category || tmpErr.job_type) as boolean;
		jobDispatcher.saveJobData(tmp);
		setErrors(tmpErr);
		if (props.onNext) props.onNext(event, error);
	};
	const handlePrevious = (event: React.SyntheticEvent) => {
		if (props.onPreviouse) props.onPreviouse(event);
	};
	const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = event.target.value;
		const name: JobStringIndex = event.target.name as JobStringIndex;
		let tmp = { ...data };
		tmp[name] = value;
		jobActions.saveJobData(tmp);
		if (name === 'job_type' && errors.job_type) {
			let tmpErr = { ...errors };
			tmpErr.job_type = false;
			setErrors(tmpErr);
		}
	};
	const handleDate = (date: [Date | null, Date | null]) => {
		let tmp = { ...data };
		tmp['duration_range'] = date;
		jobActions.saveJobData(tmp);
	};
	const handleInputPicker = (evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) => {
		let tmp = { ...data };
		const obj = { id: value, name: label };
		tmp[name as 'company_division' | 'category'] = obj;
		jobActions.saveJobData(tmp);
	};

	const handleFocus = (name: 'title' | 'category' | 'job_type' | 'description') => {
		let tmpErr = { ...errors };
		tmpErr[name] = false;
		setErrors(tmpErr);
	};
	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Basic Informations
				</StyledHeadline>
				<FlexBox gap={10} align="flex-start" justify="flex-start">
					<Button variant="outlined" onClick={handlePrevious}>
						Back
					</Button>
					<Button onClick={handleNext}>Save & Continue</Button>
				</FlexBox>
			</HeaderContainer>
			<StepContent className="staak_scrollbar">
				<FlexBox justify="flex-start" align="flex-start">
					<div style={{ padding: '0px 15px 0 0', width: '50%' }}>
						<h3>General information</h3>
						<InputField
							required
							placeholder="Title"
							name="title"
							onChange={handleInput}
							value={data.title}
							error={errors.title}
							onFocus={() => handleFocus('title')}
						>
							Title
						</InputField>
						<InputEditor
							error={errors.description}
							className="mt-10"
							title="Description"
							name="description"
							required
							initialValue={data.description}
							initOptions={{ height: 270 }}
							onEditorChange={handleEditor}
							onFocus={() => handleFocus('description')}
						/>
						<InputEditor
							className="mt-10"
							title="Responsabilities"
							name="responsabilities"
							initialValue={data.responsabilities}
							initOptions={{ height: 270 }}
							onEditorChange={handleEditor}
						/>
					</div>
					<div style={{ padding: '0px 0px 0px 15px', width: '50%' }}>
						<div>
							<h3>Job function</h3>
							<InputPickerField
								name="company_division"
								placeholder="Division"
								title="Company division"
								value={data?.company_division?.name}
								onChange={handleInputPicker}
							>
								{comapny_division?.content?.map((elem, idx) => {
									return (
										<InputPickerField.Option key={idx} value={elem._id!}>
											{elem.name}
										</InputPickerField.Option>
									);
								})}
							</InputPickerField>
							<InputPickerField
								className="mt-10"
								name="category"
								required
								placeholder="Category"
								title="Category"
								value={data.category?.name}
								onChange={handleInputPicker}
								onFocus={(e: any) => handleFocus('category')}
								error={errors.category}
							>
								{job_categories?.content?.map((elem, idx) => {
									return (
										<InputPickerField.Option key={idx} value={elem._id!}>
											{elem.name}
										</InputPickerField.Option>
									);
								})}
							</InputPickerField>
						</div>
						<div>
							<h3>Employment type & Duration</h3>
							<div>
								<FlexBox justify="start" gap={5}>
									<SLabel error={errors.job_type}>Type</SLabel>
									<SRequired>*</SRequired>
								</FlexBox>
								<FlexBox className="mt-10" gap={15} justify="flex-start">
									<Radio name="job_type" value="Full time" checked={data.job_type === 'Full time'} onChange={handleInput}>
										Full time
									</Radio>
									<Radio name="job_type" value="Part time" checked={data.job_type === 'Part time'} onChange={handleInput}>
										Part time
									</Radio>
									<Radio name="job_type" value="Contract" checked={data.job_type === 'Contract'} onChange={handleInput}>
										Contract
									</Radio>
									<Radio name="job_type" value="Internship" checked={data.job_type === 'Internship'} onChange={handleInput}>
										Internship
									</Radio>
								</FlexBox>
							</div>
							<div className="mt-15">
								<label>Duration</label>
								<FlexBox className="mt-10" gap={15} justify="flex-start">
									<Radio name="duration" value="Permanent" checked={data.duration === 'Permanent'} onChange={handleInput}>
										Permanent
									</Radio>
									<Radio name="duration" value="Temporary" checked={data.duration === 'Temporary'} onChange={handleInput}>
										Temporary/Seasonal
									</Radio>
								</FlexBox>
							</div>
							{data.duration === 'Temporary' && (
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
			</StepContent>
		</>
	);
};

export default BasicDetails;
