import { StandardProps } from '@/models/component';
import { FilterType, TValueLabel } from '@/types';
import { TJobType } from '@/types/developer/job.type';

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

export interface PFSkills extends StandardProps {
	skills?: TValueLabel[];
	clear?: boolean;
	onChange?: (value: TValueLabel[], name?: string) => void;
}

export interface PFJobType extends StandardProps {
	jobType?: TJobType;
	clear?: boolean;
	onChange?: (value: TJobType, name?: string) => void;
}
