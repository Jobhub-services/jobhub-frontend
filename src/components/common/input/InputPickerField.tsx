import { colors } from '@/assets/theme';
import { InputPickerProps, InputPickerOptionProps } from '@/models/component';
import React from 'react';
import { InputPicker } from 'staak-ui';
import styled from 'styled-components';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const ErrorSpan = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	margin-top: 5px;
	font-size: 12px;
`;

const InputPickerField = (props: InputPickerProps) => {
	const options = React.Children.map(props.children, (child) => (typeof child !== 'string' && child?.type?.displayName === 'Option' ? child : null));

	return (
		<div className={props.className}>
			<SLabel>{props.title}</SLabel>
			<InputPicker onChange={props.onChange} width={props.width} name={props.name} placeholder={props.placeholder} required={props.required}>
				{options}
			</InputPicker>
			{props.error && <ErrorSpan>{props.message}</ErrorSpan>}
		</div>
	);
};

const Option = (props: InputPickerOptionProps) => <>{props.children}</>;
Option.displayName = 'Option';
InputPickerField.Option = Option;

export default InputPickerField;
