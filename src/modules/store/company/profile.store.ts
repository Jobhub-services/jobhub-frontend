import { IProfileState } from '@/models/store/company/profile.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IProfileState = {
	isLoading: false,
	profile: {
		social_profile: {
			website: '',
			facebook: '',
			linkedin: '',
			twitter: '',
		},
	},
};

const reducerSlices = createSlice({
	name: 'companyProfile',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setProfile: (state, action) => {
			state.profile = action.payload;
		},
		setAttribute: (state, action) => {
			const { attr, data } = action.payload;
			state.profile[attr as 'description'] = data;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
