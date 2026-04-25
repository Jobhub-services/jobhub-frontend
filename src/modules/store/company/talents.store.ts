import { ITalentState } from '@/models/store/company/talents.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITalentState = {
	isLoading: false,
	filterClosed: true,
	showTalents: {
		size: 0,
		pages: 0,
		count: 0,
		content: [],
	},
	talentDetails: {
		_id: '',
	},
	filter: {},
};

const reducerSlices = createSlice({
	name: 'talents',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setIsLoading: (state, action) => {
			const { loading, attr } = action.payload;
			state[attr as 'isLoading' | 'isDetailLoading'] = loading;
		},
		setTalentDetails: (state, action) => {
			state.talentDetails = action.payload;
		},
		setTalents: (state, action) => {
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
						(state.showTalents?.page ?? 0) <= (state.showTalents?.pages ?? 0)
							? [...(state.showTalents.content ?? []), ...(data?.content ?? [])]
							: state.showTalents.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.showTalents?.page! < data?.pages ? (state.showTalents?.page ?? 0) + 1 : state.showTalents?.page,
				};
			}
			state.showTalents = tmp;
		},
		setFilters: (state, action) => {
			state.filter = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
/* 


		
*/
