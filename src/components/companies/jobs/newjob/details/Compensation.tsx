import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { jobActions } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { JobStringIndex } from '@/types/jobs.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { useEffect } from 'react';
import { FlexBox, Radio } from 'staak-ui';
const Compensation = React.memo(() => {
	const { createJob } = useAppSelector((state) => state.job);
	const { currencies } = useAppSelector((state) => state.metadata);
	const data = createJob;
	useEffect(() => {
		metadataActions.getCurrency();
	}, []);
	function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const value = event.target.value;
		let tmp = { ...data };
		tmp.salary_type = value;
		jobActions.saveJobData(tmp);
	}
	function handleInputPicker(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		let tmp = { ...data };
		const obj = { id: value, name: label };
		tmp.currency = obj;
		jobActions.saveJobData(tmp);
	}
	function handleTxt(event: any, value?: string, name?: string) {
		const idx: JobStringIndex = name as JobStringIndex;
		let tmp = { ...data };
		tmp[idx] = value;
		jobActions.saveJobData(tmp);
	}
	return (
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
				<Radio name="salary_type" value="Yearly" checked={data.salary_type === 'Yearly'} onChange={handleInput}>
					Yearly
				</Radio>
			</FlexBox>
			<FlexBox gap={15} className="mt-10" justify="flex-start">
				<InputField name="start_salary" placeholder="Low end" value={data.start_salary} onDataChange={handleTxt}>
					From
				</InputField>
				<InputField name="end_salary" placeholder="High end" value={data.end_salary} onDataChange={handleTxt}>
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
			<TextAreaField className="mt-10" placeholder="Benefts" name="benefits" height="250px" onDataChange={handleTxt} value={data.benefits}>
				Benefts
			</TextAreaField>
		</div>
	);
});

export default Compensation;
