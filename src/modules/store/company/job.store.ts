import { createSlice } from '@reduxjs/toolkit';
import { IJobState } from '@/models/store/company/job.interface';

export const initialState: IJobState = {
	filterClosed: true,
	isLoading: false,
	jobCreated: false,
	createJob: {
		title: '',
		description: '',
		responsabilities: '',
		company_division: '',
		category: { id: '', name: '' },
		job_type: '',
		duration: '',
		duration_range: [null, null],
		salary_type: '',
		start_salary: '',
		end_salary: '',
		currency: { id: '', name: '' },
		benefits: '',
		work_remotly: false,
		hire_remotly: false,
		visa_sponsorship: false,
		work_location: [{ country: { id: '', name: '' }, city: '' }],
		hire_location: [{ country: { id: '', name: '' }, city: '' }],
		education: [],
		certification: [],
		skills: [],
		requirements: '',
		questions: [''],
	},
	showJob: {
		content: [],
		count: 0,
		pages: 0,
		size: 0,
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
		createdAt: null,
		hire_location: [],
		applicants: [],
		responsabilities: '',
		company_division: '',
		duration_range: [null, null],
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
	filters: {},
	jobsOrderedBy: 'newest',
	errors: {
		job: [],
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
			const { isLoading } = action.payload;
			state.isLoading = isLoading;
		},
		setJobCreated: (state, action) => {
			const { created } = action.payload;
			state.jobCreated = created;
		},
		setShowJobs: (state, action) => {
			state.showJob = action.payload;
		},
		setJobDetails: (state, action) => {
			state.jobDetails = action.payload;
		},
		saveJobData: (state, action) => {
			state.createJob = action.payload;
		},

		createJob: (state, action) => {
			const { createJob } = action.payload;
			state.createJob = createJob;
		},
		setOrderBy: (state, action) => {
			const { order } = action.payload;
			state.jobsOrderedBy = order;
		},
		setJobErrors: (state, action) => {
			state.errors.job = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
