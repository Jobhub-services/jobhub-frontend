import { createSlice } from '@reduxjs/toolkit';
import { IApplicationsState } from '@/models/store/company/applications.interface';

const initialState: IApplicationsState = {
	filterClosed: true,
};

const reducerSlices = createSlice({
	name: 'applications',
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
