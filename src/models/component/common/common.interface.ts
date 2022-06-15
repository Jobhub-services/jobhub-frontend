import { StandardProps } from '@/models/component';
import { FilterType } from '@/types';
export interface PNav extends StandardProps {
	title?: string;
	badge?: string;
	active?: boolean;
	onClick: (status: string, event?: React.SyntheticEvent) => void;
}

export interface FilterContianerProps extends StandardProps {
	children?: JSX.Element;
	closed?: boolean;
	title?: string;
	type: FilterType;
	width?: string;
	onClear?: (event: React.SyntheticEvent) => void;
	onApply?: (event: React.SyntheticEvent) => void;
}

export interface ITitleIcon extends StandardProps {
	title?: string;
	icon: React.ReactNode;
}
