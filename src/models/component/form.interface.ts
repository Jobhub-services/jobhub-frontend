import { TypeAttributes } from '@/types/common';
import { StandardProps } from '@/models/component/app.interface';

interface StandardInputProps extends StandardProps {
	children?: JSX.Element | JSX.Element[] | React.ReactNode;
	name: string;
	width?: string;
	placeholder?: string;
	required?: boolean;
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
	onChange?: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
}
export interface InputDateProps extends StandardInputProps {
	timeIntervals?: number;
	dateFormat?: string;
	timeFormat?: string;
	title: string;
	showTime?: boolean;
	onChange?: (date: Date | null | [Date | null, Date | null]) => void;
}
export interface TagPickerProps extends StandardInputProps {
	children?: JSX.Element | JSX.Element[];
	title: string;
	message?: string;
	error?: boolean;
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
