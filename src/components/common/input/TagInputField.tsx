import { TagInput } from 'staak-ui';
import styled from 'styled-components';
import { TagInputProps } from '@/models/component';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const TagInputField = (props: TagInputProps) => {
	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<TagInput
				errorMessage={props.errorMessage}
				error={props.error}
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				values={props.values}
				onChange={props.onChange}
				disabled={props.disabled}
			/>
		</div>
	);
};

export default TagInputField;
