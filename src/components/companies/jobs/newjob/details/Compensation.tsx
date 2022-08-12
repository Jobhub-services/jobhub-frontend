import { InputField, InputPickerField } from '@/components/common';
import InputEditor from '@/components/common/input/InputEditor';
import { PCompensation } from '@/models/component/companies/jobs/newjob.interface';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { JobStringIndex } from '@/types/company/jobs.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { useEffect, useState } from 'react';
import { FlexBox, Radio } from 'staak-ui';

const Compensation = ({ onBenefitChange, errors }: PCompensation) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { currencies } = useAppSelector((state) => state.metadata);
	const [compensationErrors, setCompensationErrors] = useState<typeof errors>({
		start_salary: false,
		end_salary: false,
		currency: false,
	});
	const data = createJob;
	const enableInputs = data.salary_type === 'Monthly' || data.salary_type === 'Hourly' || data.salary_type === 'Yearly';

	useEffect(() => {
		if (currencies?.size === 0) metadataActions.getCurrency();
	}, []);
	useEffect(() => {
		setCompensationErrors(errors);
	}, [errors]);

	const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = event.target.value;
		let tmp = { ...data };
		tmp.salary_type = value;
		jobDispatcher.saveJobData(tmp);
	};
	const handleInputPicker = (evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) => {
		let tmp = { ...data };
		const obj = { id: value, name: label };
		tmp.currency = obj;
		jobDispatcher.saveJobData(tmp);
	};
	const handleTxt = (event: any, value?: string, name?: string) => {
		const idx: JobStringIndex = name as JobStringIndex;
		let tmp = { ...data };
		tmp[idx] = value;
		jobDispatcher.saveJobData(tmp);
	};
	const handleFocus = (name: 'start_salary' | 'end_salary' | 'currency') => {
		let tmpErr = { ...compensationErrors };
		tmpErr[name] = false;
		setCompensationErrors(tmpErr);
	};
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
				<InputField
					name="start_salary"
					disabled={!enableInputs}
					placeholder="Low end"
					value={data.start_salary}
					onDataChange={handleTxt}
					error={compensationErrors?.start_salary}
					onFocus={() => handleFocus('start_salary')}
				>
					From
				</InputField>
				<InputField
					name="end_salary"
					disabled={!enableInputs}
					placeholder="High end"
					value={data.end_salary}
					onDataChange={handleTxt}
					error={compensationErrors?.end_salary}
					onFocus={() => handleFocus('end_salary')}
				>
					To
				</InputField>
				<InputPickerField
					placeholder="Currency"
					disabled={!enableInputs}
					name="currency"
					title="Currency"
					onChange={handleInputPicker}
					value={data.currency?.name}
					error={compensationErrors?.currency}
					onFocus={() => handleFocus('currency')}
				>
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
			<InputEditor
				className="mt-10"
				title="Benefit"
				name="benefits"
				initialValue={data.benefits}
				initOptions={{
					height: 400,
				}}
				onEditorChange={onBenefitChange}
			/>
		</div>
	);
};

export default Compensation;
