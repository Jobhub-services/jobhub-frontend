import { StandardProps } from '@/models/component';
import { FilterType } from '@/types';

export interface FilterContianerProps extends StandardProps {
	children?: JSX.Element;
	closed?: boolean;
	title?: string;
	type: FilterType;
}
