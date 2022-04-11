import React from 'react';
import InputField from '@/components/common/input/InputField';
import { InputProps, FormProps, ButtonProps, CheckBoxProps } from '@/models/component';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { CheckBox } from 'staak-ui';
const FormStyled = styled.form`
	width: 100%;
`;

const Form = (props: FormProps) => {
	const inputs = React.Children.map(props.children, (child) => (child?.type?.displayName !== 'Submit' ? child : null));
	const submit = React.Children.map(props.children, (child) => (child?.type?.displayName === 'Submit' ? child : null));
	function submitForm(event: React.SyntheticEvent) {
		event.preventDefault();
		if (props.onSubmit) props.onSubmit(event);
	}
	return (
		<FormStyled method="post" onSubmit={submitForm}>
			{inputs?.map((elem) => {
				return elem;
			})}
			{submit}
		</FormStyled>
	);
};

const FormInput = (props: InputProps) => {
	return (
		<InputField
			placeholder={props.placeholder}
			startIcon={props.startIcon}
			type={props.type}
			width={props.width || '100%'}
			name={props.name}
			onChange={props.onChange}
		>
			{props.children}
		</InputField>
	);
};

const FormCheckBox = (props: CheckBoxProps) => {
	return <CheckBox>{props.children}</CheckBox>;
};
const SubmitButton = (props: ButtonProps) => {
	return (
		<Button type="submit" width={props.width}>
			{props.children}
		</Button>
	);
};
const FormGroup = (props: FormProps) => {
	return <FlexBox {...props}>{props.children}</FlexBox>;
};

SubmitButton.displayName = 'Submit';
Form.Submit = SubmitButton;

FormInput.displayName = 'Input';
Form.Input = FormInput;

FormCheckBox.displayName = 'CheckBox';
Form.CheckBox = FormCheckBox;

FormGroup.displayName = 'Group';
Form.Group = FormGroup;

export default Form;
