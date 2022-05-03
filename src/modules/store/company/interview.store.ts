import { IAddInterviewState } from '@/models/store/company/interview.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAddInterviewState = {
	isLoading: false,
	createInterview: {
		title: '',
		note: '',
		startDate: null,
		endDate: null,
		link: '',
		location: '',
		status: 'Pending',
	},
	showInterviews: {
		total: 0,
		currentPage: 0,
		pages: 0,
		interviews: [],
	},
};

const reducerSlices = createSlice({
	name: 'interview',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		create: (state, action) => {
			state.createInterview = action.payload;
		},
		setInterviews: (state, action) => {
			state.showInterviews = action.payload;
		},
	},
});

export const storeActions = reducerSlices.actions;
export const reducer = reducerSlices.reducer;
