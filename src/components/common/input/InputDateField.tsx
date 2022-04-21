import { InputDateProps } from '@/models/component';
import styled from 'styled-components';
import { InputDatePicker } from 'staak-ui';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;

const InputDateField = (props: InputDateProps) => {
	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<InputDatePicker
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

export default InputDateField;
