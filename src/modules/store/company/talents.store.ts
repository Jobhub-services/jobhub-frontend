import { ITalentState } from '@/models/store/company/talents.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITalentState = {
	filterClosed: true,
	showDetails: false,
};

const reducerSlices = createSlice({
	name: 'talents',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		showTalentDetails: (state, action) => {
			const { details } = action.payload;
			state.showDetails = details;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
