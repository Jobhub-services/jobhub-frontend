import React from 'react';
import { TextAreaProps } from '@/models/component';
import styled from 'styled-components';
import { TextArea, FlexBox } from 'staak-ui';
import { AppColors } from '@/constants';
import { colors } from '@/assets/theme';

const StyledLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const StyledSpan = styled.span`
	display: inline-block;
	color: ${AppColors['red'].primary};
	margin-top: 5px;
`;
const SRequired = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	font-size: 16px;
`;
const TextAreaField = (props: TextAreaProps) => {
	let wrapper;
	if (React.isValidElement(props.children)) wrapper = props.children.props;

	return (
		<div className={props.className}>
			<FlexBox justify="start" gap={5}>
				<StyledLabel>{wrapper ? wrapper.children : props.children}</StyledLabel>
				{props.required && <SRequired>*</SRequired>}
			</FlexBox>
			<TextArea
				onChange={props.onChange}
				height={props.height}
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				value={props.value}
			/>
			{wrapper && wrapper.error && <StyledSpan>{wrapper.message}</StyledSpan>}
		</div>
	);
};

export default TextAreaField;
