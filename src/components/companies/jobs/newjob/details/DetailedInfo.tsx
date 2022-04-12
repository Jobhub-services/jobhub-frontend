import { FlexBox, Button, Radio } from 'staak-ui';
import { InputField, InputPickerField, TextAreaField } from '@/components/common';
import { StyledGap } from '../newjob.styles';
import JobLocation from '@/components/companies/jobs/newjob/details/JobLocation';

const AdditionalInfo = (props: any) => {
	function handleNext(event: React.SyntheticEvent) {
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	return (
		<div>
			<FlexBox align="flex-start" justify="flex-start">
				<div style={{ width: '50%' }}>
					<h3>Compensation</h3>
					<StyledGap justify="flex-start">
						<Radio>Salary</Radio>
						<Radio>Hourly</Radio>
						<Radio>Contract</Radio>
					</StyledGap>
					<StyledGap justify="flex-start">
						<InputField name="low" placeholder="Low end">
							From
						</InputField>
						<InputField name="low" placeholder="High end">
							To
						</InputField>
						<InputPickerField name="currency" title="Currency">
							<InputPickerField.Option value="dzd">Algerien Dinar (DZD)</InputPickerField.Option>
						</InputPickerField>
					</StyledGap>
					<TextAreaField className="mt-10" placeholder="Benifts" name="job_desc" height="250px">
						Benifts
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

export default AdditionalInfo;
