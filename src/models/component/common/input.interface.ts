import { TypeAttributes } from '@/types/common.type';
import { StandardProps } from '@/models/component/app.interface';

interface StandardInputProps extends StandardProps {
	children?: JSX.Element | JSX.Element[] | React.ReactNode;
	name: string;
	width?: string;
	placeholder?: string;
	required?: boolean;
	value?: string;
}
export interface InputProps extends StandardInputProps {
	type?: 'text' | 'email' | 'password';
	startIcon?: React.ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputPickerProps extends StandardInputProps {
	children?: JSX.Element | JSX.Element[];
	title: string;
	message?: string;
	error?: boolean;
	onChange?: (event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) => void;
}
export interface InputDateProps extends StandardInputProps {
	timeIntervals?: number;
	dateFormat?: string;
	timeFormat?: string;
	title: string;
	showTime?: boolean;
	date?: Date | null;
	onChange?: (date: Date | null | [Date | null, Date | null]) => void;
}
export interface TagPickerProps extends StandardInputProps {
	children?: JSX.Element | JSX.Element[];
	title: string;
	message?: string;
	error?: boolean;
	values?: { value: string; label: string }[];
	onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent, value: { value: string; label: string }[], name?: string) => void;
}
export interface TagInputProps extends StandardInputProps {
	title: string;
	message?: string;
	error?: boolean;
	values?: string[];
	onChange?: (event: any, value: string[], name?: string) => void;
}

export interface InputPickerOptionProps extends StandardProps {
	value: string;
}
export interface TagPickerOptionProps extends StandardProps {
	value: string;
}

export interface TextAreaProps extends StandardInputProps {
	height?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface CheckBoxProps extends StandardProps {
	name?: string;
}

export interface FormProps extends StandardProps {
	children?: JSX.Element | JSX.Element[];
	jusitfy?: TypeAttributes.Justify;
	align?: TypeAttributes.Align;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
	onSubmit?: (event: React.SyntheticEvent) => void;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

export interface ButtonProps extends StandardProps {
	type?: 'button' | 'submit';
	width?: string;
}
