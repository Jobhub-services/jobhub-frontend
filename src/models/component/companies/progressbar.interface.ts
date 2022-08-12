import { StandardProps } from '@/models/component/app.interface';

type StepItem = { name: string; valid?: boolean; active?: boolean; error?: boolean };

export interface WizardProps extends StandardProps {
	items?: StepItem[];
	active?: boolean;
	valid?: boolean;
	error?: boolean;
	direction?: 'horizontal' | 'vertical';
	onSelectStep?: (event: React.SyntheticEvent, step: number) => void;
}
export interface SlantedBarProps extends StandardProps {
	children?: JSX.Element | JSX.Element[];
	active?: boolean;
	activeItem?: string;
	value?: string;
}

export interface StageBarProps extends StandardProps {
	children?: JSX.Element | JSX.Element[];
	stage?: number;
	data: { name: string; passed: boolean }[];
	current: string;
}
