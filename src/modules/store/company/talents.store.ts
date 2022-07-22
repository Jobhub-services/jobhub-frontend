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
			state.showTalents = action.payload;
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
