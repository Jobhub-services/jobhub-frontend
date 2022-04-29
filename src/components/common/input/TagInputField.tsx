import { TagInput } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { TagInputProps } from '@/models/component';

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
const TagInputField = (props: TagInputProps) => {
	return (
		<div className={`w-100 ${props.className}`}>
			<SLabel>{props.title}</SLabel>
			<TagInput
				width={props.width}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				values={props.values}
				onChange={props.onChange}
			/>
			{props.error && <ErrorSpan>{props.message}</ErrorSpan>}
		</div>
	);
};

export default TagInputField;
