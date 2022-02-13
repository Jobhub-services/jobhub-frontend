import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const reducerSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {},
	},
});
export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
