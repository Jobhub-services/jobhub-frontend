import React, { useEffect } from 'react';
import { FlexBox, Button, Radio } from 'staak-ui';
import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { StyledGap } from '../newjob.styles';
import JobLocation from '@/components/companies/jobs/newjob/details/JobLocation';
import { JobStringIndex } from '@/types/jobs';
import { jobActions } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';

const DetailedInfo = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { currencies } = useAppSelector((state) => state.metadata);
	const data = createJob;
	useEffect(() => {
		metadataActions.getCurrency();
	}, []);
	function handleNext(event: React.SyntheticEvent) {
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
	function handleInputPicker(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		let tmp = { ...data };
		const idx = name as JobStringIndex;
		tmp[idx] = label;
		jobActions.saveJobData(tmp);
	}
	return (
		<div>
			<FlexBox align="flex-start" justify="flex-start">
				<div style={{ width: '50%' }}>
					<h3>Compensation</h3>
					<div>Salary Type</div>
					<StyledGap justify="flex-start">
						<Radio name="salary_type" value="hourly" checked={data.salary_type === 'hourly'} onChange={handleInput}>
							Hourly
						</Radio>
						<Radio name="salary_type" value="monthly" checked={data.salary_type === 'monthly'} onChange={handleInput}>
							Monthly
						</Radio>
						<Radio name="salary_type" value="annually" checked={data.salary_type === 'annually'} onChange={handleInput}>
							Annually
						</Radio>
					</StyledGap>
					<StyledGap justify="flex-start">
						<InputField name="start_salary" placeholder="Low end" value={data.start_salary} onChange={handleInput}>
							From
						</InputField>
						<InputField name="end_salary" placeholder="High end" value={data.end_salary} onChange={handleInput}>
							To
						</InputField>
						<InputPickerField name="currency" title="Currency" onChange={handleInputPicker} value={data.currency}>
							{currencies?.map((elem, idx) => {
								return (
									<InputPickerField.Option key={idx} value={elem.value!}>
										{elem.label} ({elem.value?.toUpperCase()})
									</InputPickerField.Option>
								);
							})}
						</InputPickerField>
					</StyledGap>
					<TextAreaField className="mt-10" placeholder="Benefts" name="benefits" height="250px" onChange={handleInput} value={data.benefits}>
						Benefts
					</TextAreaField>
				</div>
				<div style={{ padding: '0 0 0 15px', width: '50%' }}>
					<JobLocation />
				</div>
			</FlexBox>
			<StyledGap align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Save & Continue</Button>
			</StyledGap>
		</div>
	);
};

export default DetailedInfo;
