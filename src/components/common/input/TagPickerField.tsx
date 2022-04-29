import React from 'react';
import { TagPickerProps, TagPickerOptionProps } from '@/models/component';
import { TagPicker } from 'staak-ui';
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

const TagPickerField = (props: TagPickerProps) => {
	const options = React.Children.map(props.children, (child) => (typeof child !== 'string' && child?.type?.displayName === 'Option' ? child : null));

	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<TagPicker
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				values={props.values}
				onChange={props.onChange}
			>
				{options}
			</TagPicker>
			{props.error && <ErrorSpan>{props.message}</ErrorSpan>}
		</div>
	);
};

const Option = (props: TagPickerOptionProps) => <>{props.children}</>;
Option.displayName = 'Option';
TagPickerField.Option = Option;

export default TagPickerField;
