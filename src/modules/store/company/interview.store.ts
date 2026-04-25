import { IAddInterviewState } from '@/models/store/company/interview.interface';
import { InterviewStatus } from '@/types/company/interview.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAddInterviewState = {
	isLoading: false,
	createInterview: {
		_id: '',
		title: '',
		note: '',
		startDate: null,
		endDate: null,
		link: '',
		location: '',
		status: InterviewStatus.PENDING,
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
		setIsDeleted: (state, action) => {
			const { isdeleted } = action.payload;
			state.isDeleted = isdeleted;
		},
		setIsCreated: (state, action) => {
			const { iscreated } = action.payload;
			state.isCreated = iscreated;
		},
		setAttribute: (state, action) => {
			const { value, attr } = action.payload;
			state[attr as 'isUpdated' | 'isError' | 'isCreated' | 'isDeleted'] = value;
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
