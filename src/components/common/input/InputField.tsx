import React from 'react';
import { Input } from 'staak-ui';
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

const InputContainer = styled.div`
	margin-bottom: 15px;
`;

const InputField = (props: InputProps) => {
	let wrapper;
	if (React.isValidElement(props.children)) wrapper = props.children.props;

	return (
		<InputContainer>
			<SLabel>{wrapper ? wrapper.children : props.children}</SLabel>
			<Input
				onChange={props.onChange}
				startIcon={props.startIcon}
				width={props.width}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				required={props.required}
			/>
			{wrapper && wrapper.error && <ErrorSpan>{wrapper.message}</ErrorSpan>}
		</InputContainer>
	);
};

export default InputField;
