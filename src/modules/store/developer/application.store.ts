import { IApplicationState } from '@/models/store/developer/application.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IApplicationState = {
	isLoading: false,
	isDetailLoading: false,
	applicationInfo: {
		content: [],
		count: 0,
		size: 0,
		pages: 0,
		page: 0,
	},
	applicationDetails: {
		_id: '',
		responses: [],
		notice_period: '',
		start_date: null,
		job: {
			_id: '',
		},
		company: {
			_id: '',
		},
	},
};

const reducerSlice = createSlice({
	name: 'talentApplication',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			const { attr, loading } = action.payload;
			state[attr as 'isLoading' | 'isDetailLoading'] = loading;
		},
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setIsDetailLoading: (state, action) => {
			const { loading } = action.payload;
			state.isDetailLoading = loading;
		},
		setApplications: (state, action) => {
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
						(state.applicationInfo?.page ?? 0) <= (state.applicationInfo?.pages ?? 0)
							? [...(state.applicationInfo?.content ?? []), ...(data?.content ?? [])]
							: state.applicationInfo?.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.applicationInfo?.page! < data?.pages ? (state.applicationInfo?.page ?? 0) + 1 : state.applicationInfo?.page,
				};
			}
			state.applicationInfo = tmp;
		},
		setApplication: (state: any, action: any) => {
			state.applicationDetails = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
