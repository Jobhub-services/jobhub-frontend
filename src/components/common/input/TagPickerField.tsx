import React from 'react';
import { TagPickerProps, TagPickerOptionProps } from '@/models/component';
import { TagPicker } from 'staak-ui';
import styled from 'styled-components';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;

const TagPickerField = (props: TagPickerProps) => {
	const options = React.Children.map(props.children, (child) => (typeof child !== 'string' && child?.type?.displayName === 'Option' ? child : null));

	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<TagPicker
				errorMessage={props.errorMessage}
				error={props.error}
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				values={props.values}
				onChange={props.onChange}
				onDataChange={props.onDataChange}
				disabled={props.disabled}
			>
				{options}
			</TagPicker>
		</div>
	);
};

const Option = (props: TagPickerOptionProps) => <>{props.children}</>;
Option.displayName = 'Option';
TagPickerField.Option = Option;

export default TagPickerField;
