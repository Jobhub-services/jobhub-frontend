import { ISettingsState } from '@/models/store/developer/settings.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISettingsState = {
	isLoading: false,
	generaleInfo: {},
	securityInfo: {},
};

const reducerSlices = createSlice({
	name: 'talentSettings',
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
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
