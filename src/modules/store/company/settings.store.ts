import { ISettingsState } from '@/models/store/company/settings.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISettingsState = {
	isLoading: false,
	generaleInfo: {},
	securityInfo: {},
};

const reducerSlices = createSlice({
	name: 'companySettings',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setGeneral: (state, action) => {
			state.generaleInfo = action.payload;
		},
		setSecurity: (state, action) => {
			state.securityInfo = action.payload;
		},
		setIsUpdated: (state, action) => {
			const { updated } = action.payload;
			state.isUpdated = updated;
		},
		setErrors: (state, action) => {
			const { errors } = action.payload;
			state.errors = errors;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
