import { InputPickerProps, InputPickerOptionProps } from '@/models/component';
import React from 'react';
import { InputPicker, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const ErrorSpan = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	margin-top: 5px;
	font-size: 13px;
`;
const SRequired = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	font-size: 16px;
`;
const InputPickerField = (props: InputPickerProps) => {
	const options = React.Children.map(props.children, (child) => (typeof child !== 'string' && child?.type?.displayName === 'Option' ? child : null));

	return (
		<div className={`w-100 ${props.className}`}>
			<FlexBox justify="start" gap={5}>
				<SLabel>{props.title}</SLabel>
				{props.required && <SRequired>*</SRequired>}
			</FlexBox>
			<InputPicker
				onChange={props.onChange}
				width={props.width}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				required={props.required}
			>
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
