import { FlexBox, Button } from 'staak-ui';
import { InputPickerField, TextAreaField, TagPickerField } from '@/components/common';
import { StyledGap } from '../newjob.styles';
import Questions from './Questions';

const AddTests = (props: any) => {
	function handleNext(event: React.SyntheticEvent) {
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	return (
		<>
			<FlexBox flexDirection="column" align="flex-start">
				<div style={{ width: '95%' }}>
					<h3>Experience details</h3>
					<StyledGap justify="flex-start" align="flex-start">
						<InputPickerField name="education" placeholder="Education" title="Education">
							<InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
							<InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
							<InputPickerField.Option value="contract">Contract</InputPickerField.Option>
							<InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
							<InputPickerField.Option value="other">Other</InputPickerField.Option>
						</InputPickerField>
						<InputPickerField name="education" placeholder="Certification" title="Certification">
							<InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
							<InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
							<InputPickerField.Option value="contract">Contract</InputPickerField.Option>
							<InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
							<InputPickerField.Option value="other">Other</InputPickerField.Option>
						</InputPickerField>
					</StyledGap>
					<StyledGap align="flex-start" justify="flex-start">
						<TagPickerField name="hire_remotly" placeholder="Add skills" title="Skills">
							<TagPickerField.Option value="full_time">Full-time</TagPickerField.Option>
							<TagPickerField.Option value="part_time">Part-time</TagPickerField.Option>
							<TagPickerField.Option value="full_time1">Full-time</TagPickerField.Option>
							<TagPickerField.Option value="part_time2">Part-time</TagPickerField.Option>
							<TagPickerField.Option value="full_time4">Full-time</TagPickerField.Option>

							<TagPickerField.Option value="full_time4">Full-time</TagPickerField.Option>
							<TagPickerField.Option value="part_time3">Part-time</TagPickerField.Option>
							<TagPickerField.Option value="part_time84">Part-time</TagPickerField.Option>
						</TagPickerField>
					</StyledGap>
					<TextAreaField className="mt-10" placeholder="Requirements" name="job_desc" height="120px">
						Job Requirements
					</TextAreaField>
				</div>
				<Questions />
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

export default AddTests;
