import React from 'react';
import { FlexBox, Input } from 'staak-ui';
import { InputProps } from '@/models/component';
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
const InputField = (props: InputProps) => {
	let wrapper;
	if (React.isValidElement(props.children)) wrapper = props.children.props;

	return (
		<div className={`w-100 ${props.className}`}>
			<FlexBox justify="start" gap={5}>
				<SLabel>{wrapper ? wrapper.children : props.children}</SLabel>
				{props.required && <SRequired>*</SRequired>}
			</FlexBox>
			<Input
				errorMessage={props.errorMessage}
				error={props.error}
				onChange={props.onChange}
				startIcon={props.startIcon}
				width={props.width}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				required={props.required}
				value={props.value}
				onDataChange={props.onDataChange}
				onFocus={props.onFocus}
				disabled={props.disabled}
			/>
			{wrapper && wrapper.error && <ErrorSpan>{wrapper.message}</ErrorSpan>}
		</div>
	);
};

export default InputField;
