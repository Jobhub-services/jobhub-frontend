import { Form, InputDateField, InputField, InputPickerField, TextAreaField } from '@/components/common';
import { InterviewFormProps } from '@/models/component/companies/interview/interview.interface';
import { InterviewStatus } from '@/types/company/interview.type';
import React from 'react';
import { FlexBox } from 'staak-ui';

const InterviewForm = (props: InterviewFormProps) => {
	const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		if (props.onInputChange) props.onInputChange(name, value);
	};
	const handleDate = (name: string, date: Date | null | [Date | null, Date | null]) => {
		if (props.onDateChange) props.onDateChange(name, date as Date | null);
	};
	const handlePicker = (event: any, value: string, label: string, name: string) => {
		if (props.onPickerChange) props.onPickerChange(name, label);
	};
	return (
		<Form>
			<InputField name="title" placeholder="title" value={props.title ?? ''} onChange={handleInput}>
				Interview Title
			</InputField>
			<FlexBox gap={10} className="mt-10">
				<InputDateField
					placeholder="Jan 01, 2022 00:00 PM"
					name="startDate"
					title="Start"
					showTime={true}
					date={props?.startDate ? new Date(props?.startDate) : null}
					onChange={(date: Date | null | [Date | null, Date | null]) => handleDate('startDate', date)}
				/>
				<InputDateField
					placeholder="Feb 01, 2022 00:00 PM"
					name="endDate"
					title="End"
					showTime={true}
					date={props?.endDate ? new Date(props?.endDate) : null}
					onChange={(date: Date | null | [Date | null, Date | null]) => handleDate('endDate', date)}
				/>
			</FlexBox>
			<FlexBox gap={10} className="mt-10">
				<InputField name="location" placeholder="Location" value={props.location ?? ''} onChange={handleInput}>
					Interview Location
				</InputField>
				<InputPickerField name="status" title="Status" placeholder="Status" value={props.status} onChange={handlePicker}>
					<InputPickerField.Option value={InterviewStatus.PENDING}>{InterviewStatus.PENDING}</InputPickerField.Option>
					<InputPickerField.Option value={InterviewStatus.IN_PROGRESS}>{InterviewStatus.IN_PROGRESS}</InputPickerField.Option>
					<InputPickerField.Option value={InterviewStatus.FINISHED}>{InterviewStatus.FINISHED}</InputPickerField.Option>
				</InputPickerField>
			</FlexBox>
			<InputField className="mt-10" name="link" placeholder="Link" value={props.link ?? ''} onChange={handleInput}>
				Interview Link
			</InputField>
			<TextAreaField className="mt-10" name="note" placeholder="Description" value={props.note ?? ''} onChange={handleInput}>
				Interview Note
			</TextAreaField>
		</Form>
	);
};

export default InterviewForm;
