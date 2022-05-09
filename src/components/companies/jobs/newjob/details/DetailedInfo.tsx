import React, { useEffect } from 'react';
import { FlexBox, Button, Radio } from 'staak-ui';
import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import JobLocation from '@/components/companies/jobs/newjob/details/JobLocation';
import { JobStringIndex } from '@/types/jobs.type';
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
		if (name === 'currency') {
			const obj = { id: value, name: label };
			tmp.currency = obj;
		} else {
			const idx = name as JobStringIndex;
			tmp[idx] = label;
		}
		jobActions.saveJobData(tmp);
	}
	return (
		<div>
			<FlexBox align="flex-start" justify="flex-start">
				<div style={{ width: '50%' }}>
					<h3>Compensation</h3>
					<div>Salary Type</div>
					<FlexBox gap={15} className="mt-10" justify="flex-start">
						<Radio name="salary_type" value="Hourly" checked={data.salary_type === 'Hourly'} onChange={handleInput}>
							Hourly
						</Radio>
						<Radio name="salary_type" value="Monthly" checked={data.salary_type === 'Monthly'} onChange={handleInput}>
							Monthly
						</Radio>
						<Radio name="salary_type" value="Annually" checked={data.salary_type === 'Annually'} onChange={handleInput}>
							Annually
						</Radio>
					</FlexBox>
					<FlexBox gap={15} className="mt-10" justify="flex-start">
						<InputField name="start_salary" placeholder="Low end" value={data.start_salary} onChange={handleInput}>
							From
						</InputField>
						<InputField name="end_salary" placeholder="High end" value={data.end_salary} onChange={handleInput}>
							To
						</InputField>
						<InputPickerField placeholder="Currency" name="currency" title="Currency" onChange={handleInputPicker} value={data.currency?.name}>
							{currencies?.content?.map((elem, idx) => {
								const str = elem.name + ' (' + elem.code?.toUpperCase() + ')';
								return (
									<InputPickerField.Option key={idx} value={elem._id!}>
										{str}
									</InputPickerField.Option>
								);
							})}
						</InputPickerField>
					</FlexBox>
					<TextAreaField className="mt-10" placeholder="Benefts" name="benefits" height="250px" onChange={handleInput} value={data.benefits}>
						Benefts
					</TextAreaField>
				</div>
				<div style={{ padding: '0 0 0 15px', width: '50%' }}>
					<JobLocation />
				</div>
			</FlexBox>
			<FlexBox gap={15} className="mt-10" align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Save & Continue</Button>
			</FlexBox>
		</div>
	);
};

export default DetailedInfo;
