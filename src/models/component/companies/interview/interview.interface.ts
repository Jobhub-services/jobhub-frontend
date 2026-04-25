import { InterviewInfo } from '@/types/company/interview.type';
import { StandardProps } from '@/models/component';

export interface InterviewFormProps extends StandardProps, InterviewInfo {
	onDateChange?: (name: string, date: Date | null) => void;
	onInputChange?: (name: string, value: string) => void;
	onPickerChange?: (name: string, label: string) => void;
}
