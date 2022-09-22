import { IPublicJobsState } from '@/models/store/publicJobs.interface';
import { TBooleanAttr, TJobDuration, TTJob } from '@/types/publicJobs.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IPublicJobsState = {
	[TBooleanAttr.IS_JOB_FETCHING]: false,
	jobs: {
		content: [],
		size: 0,
		count: 0,
		pages: 0,
		page: 0,
	},
};

const reducerSlice = createSlice({
	name: 'publicJobs',
	initialState,
	reducers: {
		setBooleanAttr: (state, action) => {
			const { value, attr } = action.payload;
			state[attr as TBooleanAttr] = value;
		},
		setJobs: (state, action) => {
			state.jobs = action.payload;
		},
	},
});

export const storeAction = reducerSlice.actions;
export const reducer = reducerSlice.reducer;
