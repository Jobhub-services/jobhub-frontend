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
		page: 0,
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
			const { data, reset } = action.payload;
			let tmp = {};
			if (reset) {
				tmp = {
					content: [],
					size: 0,
					count: 0,
					pages: 0,
					page: 0,
				};
			} else {
				tmp = {
					content:
						(state.companies?.page ?? 0) <= (state.companies?.pages ?? 0)
							? [...(state.companies?.content ?? []), ...(data?.content ?? [])]
							: state.companies?.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.companies?.page! < data?.pages ? (state.companies?.page ?? 0) + 1 : state.companies?.page,
				};
			}
			state.companies = tmp;
		},
		setComapnyDetail: (state, action) => {
			state.companyDetail = action.payload;
		},
		setFilters: (state, action) => {
			state.filters = action.payload;
		},
		setSaveJob: (state, action) => {
			const { saved, jobSaved, id } = action.payload;
			if (id) {
				state.companyDetail.jobs = state.companyDetail.jobs?.map((elem) => {
					if (elem._id === id) {
						return { ...elem, saved: jobSaved };
					}
					return elem;
				});
			}
			state.jobSaved = saved;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
