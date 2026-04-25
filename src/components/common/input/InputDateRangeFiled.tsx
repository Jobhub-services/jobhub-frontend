import { RangeDateProps } from '@/models/component';
import styled from 'styled-components';
import { DateRangePicker } from 'staak-ui';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;

const InputDateRangeField = (props: RangeDateProps) => {
	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<DateRangePicker
				errorMessage={props.errorMessage}
				error={props.error}
				onChange={props.onChange}
				dateFormat={props.dateFormat}
				timeIntervals={props.timeIntervals}
				timeFormat={props.timeFormat}
				placeholder={props.placeholder}
				showTime={props.showTime}
				endDate={props.endDate}
				startDate={props.startDate}
				disabled={props.disabled}
			/>
		</div>
	);
};

export default InputDateRangeField;
