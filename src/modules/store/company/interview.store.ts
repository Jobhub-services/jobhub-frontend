import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const reducerSlices = createSlice({
	name: 'interview',
	initialState,
	reducers: {},
});

export const storeActions = reducerSlices.actions;
export const reducer = reducerSlices.reducer;
