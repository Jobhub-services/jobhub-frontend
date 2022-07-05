import { IApplicationState } from '@/models/store/developer/application.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IApplicationState = {
	isLoading: false,
	applicationInfo: {
		content: [],
		count: 0,
		size: 0,
	},
};

const reducerSlice = createSlice({
	name: 'talentApplication',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setApplications: (state, action) => {
			state.applicationInfo = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
