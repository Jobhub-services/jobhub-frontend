import { InputDateProps } from '@/models/component';
import styled from 'styled-components';
import { DateRangePicker } from 'staak-ui';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;

const InputDateRangeField = (props: InputDateProps) => {
	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<DateRangePicker
				onChange={props.onChange}
				dateFormat={props.dateFormat}
				timeIntervals={props.timeIntervals}
				timeFormat={props.timeFormat}
				placeholder={props.placeholder}
				showTime={props.showTime}
			/>
		</div>
	);
};

export default InputDateRangeField;
