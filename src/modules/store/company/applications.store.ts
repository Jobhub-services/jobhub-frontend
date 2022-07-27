import { createSlice } from '@reduxjs/toolkit';
import { IApplicationsState } from '@/models/store/company/applications.interface';

const initialState: IApplicationsState = {
	isLoading: false,
	isDetailLoading: false,
	isStatusChange: false,
	filterClosed: true,
	applicantsByJobs: {
		size: 0,
		pages: 0,
		count: 0,
		page: 0,
		content: [],
	},
	showApplicants: {
		size: 0,
		pages: 0,
		count: 0,
		page: 0,
		content: [],
	},
	filter: {
		country: [],
		applicantRole: [],
		skills: [],
		occupationType: [],
	},
	applicantDetails: {
		_id: '1',
		status: 'NEW',
		linkedIn: '',
		git: '',
		cv: '',
		createdAt: '',
		email: '',
		phone: '',
		website: '',
		start_date: '',
		notice_period: '',
		responses: [],
		work_experience: [],
		interviews: [],
	},
};

const reducerSlices = createSlice({
	name: 'applications',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading, attr } = action.payload;
			state[attr as 'isLoading' | 'isDetailLoading'] = loading;
		},
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setApplicantsByJobs: (state, action) => {
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
						(state.applicantsByJobs?.page ?? 0) <= (state.applicantsByJobs?.pages ?? 0)
							? [...(state.applicantsByJobs.content ?? []), ...(data?.content ?? [])]
							: state.applicantsByJobs.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.applicantsByJobs?.page! < data?.pages ? (state.applicantsByJobs?.page ?? 0) + 1 : state.applicantsByJobs?.page,
				};
			}
			state.applicantsByJobs = tmp;
		},
		setShowApplicants: (state, action) => {
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
						(state.showApplicants?.page ?? 0) <= (state.showApplicants?.pages ?? 0)
							? [...(state.showApplicants.content ?? []), ...(data?.content ?? [])]
							: state.showApplicants.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.showApplicants?.page! < data?.pages ? (state.showApplicants?.page ?? 0) + 1 : state.showApplicants?.page,
				};
			}
			state.showApplicants = tmp;
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		setApplicationStatus: (state, action) => {
			const { status, applicantId } = action.payload;
			const currentTotal = state.showApplicants?.content?.length;
			if (state.applicantDetails._id === applicantId) state.applicantDetails.status = status;
			state.showApplicants.content = state.showApplicants?.content?.filter((elem) => elem._id !== applicantId);
			state.showApplicants.size = state.showApplicants.size! + currentTotal! - state.showApplicants?.content?.length!;
		},
		setApplicantDetails: (state, action) => {
			state.applicantDetails = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
