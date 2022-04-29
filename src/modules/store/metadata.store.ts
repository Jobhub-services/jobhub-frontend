import { IAppState } from '@/models/store/metadata.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAppState = {
	countries: [],
	isLoading: false,
	job_categories: [],
	comapny_division: [],
	currencies: [],
	skills_list: [],
};

const reducerSlice = createSlice({
	name: 'metadata',
	initialState,
	reducers: {
		isLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setCountries: (state, action) => {
			state.countries = action.payload;
		},
		setSkills: (state, action) => {
			state.skills_list = action.payload;
		},
		setJobCategories: (state, action) => {
			state.job_categories = action.payload;
		},
		setCompanyDivision: (state, action) => {
			state.comapny_division = action.payload;
		},
		setCurrency: (state, action) => {
			state.currencies = action.payload;
		},
	},
});

export const storeActions = reducerSlice.actions;
export const reducer = reducerSlice.reducer;
