import { createSlice } from '@reduxjs/toolkit';
import { IJobState } from '@/models/store/company/job.interface';

const initialState: IJobState = {
	filterClosed: true,
};

const reducerSlices = createSlice({
	name: 'job',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
