import { Form, InputDateField, InputField, InputPickerField, TextAreaField } from '@/components/common';
import { FlexBox } from 'staak-ui';

const InterviewForm = () => {
	return (
		<Form>
			<InputField name="title" placeholder="title">
				Interview Title
			</InputField>
			<FlexBox gap={10} className="mt-10">
				<InputDateField placeholder="Jan 01, 2022 00:00 PM" name="start" title="Start" showTime={true} />
				<InputDateField placeholder="Feb 01, 2022 00:00 PM" name="End" title="End" showTime={true} />
			</FlexBox>
			<FlexBox gap={10} className="mt-10">
				<InputField name="location" placeholder="Location">
					Interview Location
				</InputField>
				<InputPickerField name="status" title="Status" placeholder="Status">
					<InputPickerField.Option value="pending">Pending</InputPickerField.Option>
					<InputPickerField.Option value="progress">On Progress</InputPickerField.Option>
					<InputPickerField.Option value="Finished">Finished</InputPickerField.Option>
				</InputPickerField>
			</FlexBox>
			<InputField className="mt-10" name="link" placeholder="Link">
				Interview Link
			</InputField>
			<TextAreaField className="mt-10" name="note" placeholder="Description">
				Interview Note
			</TextAreaField>
		</Form>
	);
};

export default InterviewForm;
