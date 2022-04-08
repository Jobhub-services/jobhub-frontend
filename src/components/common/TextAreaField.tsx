import React from 'react';
import { TextAreaProps } from '@/models/component';
import styled from 'styled-components';
import { TextArea } from 'staak-ui';
import { AppColors } from '@/constants';

const StyledLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const StyledSpan = styled.span`
	display: inline-block;
	color: ${AppColors['red'].primary};
	margin-top: 5px;
`;

const TextAreaField = (props: TextAreaProps) => {
	let wrapper;
	if (React.isValidElement(props.children)) wrapper = props.children.props;

	return (
		<div className={props.className}>
			<StyledLabel>{wrapper ? wrapper.children : props.children}</StyledLabel>
			<TextArea
				onChange={props.onChange}
				height={props.height}
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
			/>
			{wrapper && wrapper.error && <StyledSpan>{wrapper.message}</StyledSpan>}
		</div>
	);
};

export default TextAreaField;
