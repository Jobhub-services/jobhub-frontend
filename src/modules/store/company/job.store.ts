import { createSlice } from '@reduxjs/toolkit';
import { IJobState } from '@/models/store/company/job.interface';
import { JobInstance } from '@/constants/company/job.contants';

export const initialState: IJobState = {
	filterClosed: true,
	isLoading: false,
	jobCreated: false,
	createJob: JobInstance,
	showJob: {
		content: [],
		count: 0,
		pages: 0,
		size: 0,
		page: 0,
	},
	jobDetails: {
		_id: '',
		title: '',
		category: '',
		description: '',
		status: 'ready',
		job_type: 'Full time',
		duration: 'Permanent',
		start_salary: '',
		end_salary: '',
		hire_location: [],
		applications: [],
		responsabilities: '',
		company_division: '',
		work_location: { country: '', city: '' },
		work_remotly: false,
		hire_remotly: false,
		visa_sponsorship: false,
		education: [],
		certification: [],
		skills: [],
		requirements: '',
		benefits: '',
		questions: [],
	},
	filters: {
		category: [],
	},
	errors: {
		job: {
			status: false,
		},
		currencies: {},
		categories: {},
		division: {},
	},
};

const reducerSlices = createSlice({
	name: 'job',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setIsLoading: (state, action) => {
			const { isLoading, attr } = action.payload;
			state[attr as 'isLoading' | 'isDetailLoading'] = isLoading;
		},
		setJobCreated: (state, action) => {
			const { created } = action.payload;
			state.jobCreated = created;
		},
		setShowJobs: (state, action) => {
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
						(state.showJob?.page ?? 0) <= (state.showJob?.pages ?? 0)
							? [...(state.showJob.content ?? []), ...(data?.content ?? [])]
							: state.showJob.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.showJob?.page! < data?.pages ? (state.showJob?.page ?? 0) + 1 : state.showJob?.page,
				};
			}
			state.showJob = tmp;
		},
		setJobDetails: (state, action) => {
			state.jobDetails = action.payload;
		},
		setFilters: (state, action) => {
			state.filters = action.payload;
		},
		saveJobData: (state, action) => {
			state.createJob = action.payload;
		},

		createJob: (state, action) => {
			state.createJob = action.payload;
		},
		setJobErrors: (state, action) => {
			state.errors.job = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
