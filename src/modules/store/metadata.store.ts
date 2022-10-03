import { IAppState } from '@/models/store/metadata.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAppState = {
	appExpanded: true,
	countries: {
		count: 0,
		size: 0,
		content: [],
	},
	isLoading: false,
	job_categories: {
		count: 0,
		size: 0,
		content: [],
	},
	comapny_division: {
		size: 0,
		content: [],
	},
	currencies: {
		count: 0,
		size: 0,
		content: [],
	},
	skills_list: {
		count: 0,
		size: 0,
		content: [],
	},
	langs: {
		count: 0,
		size: 0,
		content: [],
	},
	roles: {
		count: 0,
		size: 0,
		content: [],
	},
	timezones: {
		count: 0,
		size: 0,
		content: [],
	},
	industries: {
		count: 0,
		size: 0,
		content: [],
	},
};

const reducerSlice = createSlice({
	name: 'metadata',
	initialState,
	reducers: {
		setAppExpanded: (state, action) => {
			//test
			const { expanded } = action.payload;
			state.appExpanded = expanded;
		},
		isLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setCountries: (state, action) => {
			let sortedArray = action.payload?.content;
			sortedArray.sort((a: any, b: any) => {
				return a?.name?.localeCompare(b?.name);
			});
			state.countries = { ...action.payload, content: sortedArray };
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
		setRoles: (state, action) => {
			state.roles = action.payload;
		},
		setIndustry: (state, action) => {
			state.industries = action.payload;
		},
		setLanguages: (state, action) => {
			let sortedArray = action.payload?.content;
			sortedArray.sort((a: any, b: any) => {
				return a?.name?.localeCompare(b?.name);
			});
			state.langs = { ...action.payload, content: sortedArray };
		},
		setTimeZone: (state, action) => {
			state.timezones = action.payload;
		},
	},
});

export const storeActions = reducerSlice.actions;
export const reducer = reducerSlice.reducer;
