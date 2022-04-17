import { store } from '@/config/store';

export declare namespace TypeAttributes {
	type Align = 'center' | 'flex-start' | 'flex-end';
	type Justify = 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start';
	type Color = 'red' | 'purple' | 'blue' | 'black' | 'white' | 'gray';
	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
	type TextAlign = 'center' | 'end' | 'start' | 'justify' | 'left' | 'right';
	type Direction = 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

export type FilterType = 'applications' | 'job';
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
