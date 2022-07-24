import { createSlice } from '@reduxjs/toolkit';
import { ICompanyState } from '@/models/store/developer/companies.interface';

const initialState: ICompanyState = {
	isLoading: false,
	isDetailLoading: false,
	filterClosed: true,
	companies: {
		count: 0,
		size: 0,
		pages: 0,
		content: [],
	},
	companyDetail: {
		_id: '',
		jobs: [],
	},
};
const reducerSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading, attr } = action.payload;
			state[attr as 'isDetailLoading' | 'isLoading'] = loading;
		},
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setCompanies: (state, action) => {
			state.companies = action.payload;
		},
		setComapnyDetail: (state, action) => {
			state.companyDetail = action.payload;
		},
		setFilters: (state, action) => {
			state.filters = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
