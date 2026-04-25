import { colors } from '@/assets/theme';
import { PInputEditor } from '@/models/component';
import { Editor } from '@tinymce/tinymce-react';
import { FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';

const { TINY_TEXT_EDITOR_API_KEY } = STAAK_ENV;

const PLUGINS = [
	'advlist',
	//'advcode',
	//'advtable',
	'autolink',
	//'checklist',
	//'export',
	'lists',
	'link',
	'image',
	'charmap',
	'preview',
	'anchor',
	'searchreplace',
	'visualblocks',
	//'powerpaste',
	'fullscreen',
	//'formatpainter',
	'insertdatetime',
	'media',
	//'table',
	'help',
	'wordcount',
];
const TOOLBAR =
	'undo redo | bold italic backcolor | ' +
	'alignleft aligncenter alignright alignjustify | ' +
	'bullist numlist checklist outdent indent | removeformat | table help';

const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;

const SRequired = styled.span`
	display: inline-block;
	color: ${colors.RED_BASE};
	font-size: 16px;
`;

const SDiv = styled.div<any>`
	${(props) =>
		props.error &&
		css`
			& .tox-tinymce {
				box-shadow: 0px 0px 0px 3px ${colors.RED_CLEAR_3} !important;
				border: 1px solid ${colors.RED_BASE} !important;
			}
		`}
`;

const InputEditor = (props: PInputEditor) => {
	const handleInput = (val: string) => {
		if (props.onEditorChange) props.onEditorChange(val, props.name);
	};
	return (
		<div className={props.className}>
			<FlexBox justify="start" gap={5}>
				<SLabel>{props.title}</SLabel>
				{props.required && <SRequired>*</SRequired>}
			</FlexBox>
			<SDiv error={props.error}>
				<Editor
					apiKey={TINY_TEXT_EDITOR_API_KEY}
					initialValue={props.initialValue}
					init={{
						...props.initOptions,
						menubar: false,
						branding: false,
						plugins: PLUGINS,
						toolbar: TOOLBAR,
						content_style: 'div { margin: 10px; border: 5px solid red; padding: 3px; } .blue { color: blue; } .red { color: red; }',
					}}
					onEditorChange={handleInput}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
				/>
			</SDiv>
		</div>
	);
};

export default InputEditor;
