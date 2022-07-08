import { IApplicationState } from '@/models/store/developer/application.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IApplicationState = {
	isLoading: false,
	isDetailLoading: false,
	applicationInfo: {
		content: [],
		count: 0,
		size: 0,
	},
	applicationDetails: {
		_id: '',
		responses: [],
		notice_period: '',
		start_date: null,
		jobId: {
			_id: '',
		},
		company: {
			_id: '',
		},
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
		setIsDetailLoading: (state, action) => {
			const { loading } = action.payload;
			state.isDetailLoading = loading;
		},
		setApplications: (state, action) => {
			state.applicationInfo = action.payload;
		},
		setApplication: (state, action) => {
			state.applicationDetails = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
