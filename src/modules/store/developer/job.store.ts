import { createSlice } from '@reduxjs/toolkit';
import { IJobsState } from '@/models/store/developer/jobs.interface';
import { TLoading } from '@/types/developer/job.type';

const initialState: IJobsState = {
	filterClosed: true,
	isLoading: false,
	isDetailLoading: false,
	showDetails: false,
	jobInfo: {
		content: [],
		size: null,
		count: null,
		pages: null,
	},
	jobDetails: {
		_id: '',
		title: '',
		company: {},
		currency: {},
		start_salary: '',
		end_salary: '',
		salary_type: '',
		responsabilities: '',
		description: '',
		benefits: '',
		skills: [],
		work_location: undefined,
		//hire_remotly: true,
		category: '',
		job_type: 'Full time',
		duration: 'Permanent',
		hire_location: [],
		requirements: ``,
		education: [],
		certification: [],
		questions: [],
	},
	jobApplication: {
		jobId: undefined,
		motivation: '',
		responses: [],
		notice_period: undefined,
		start_date: undefined,
	},
	succesApplication: {
		message: '',
		status: false,
	},
	errors: {
		status: false,
	},
	filterInfo: {
		job_categories: [],
		job_type: {
			full_time: false,
			part_time: false,
			permanent: false,
			temporary: false,
		},
		job_salary: {
			hourly: {},
			monthly: {},
			annually: {},
			currencies: [],
		},
	},
};
const reducerSlice = createSlice({
	name: 'developerJobs',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setLoading: (state, action) => {
			const { loading, attr } = action.payload;
			state[attr as TLoading] = loading;
		},
		setShowDetails: (state, action) => {
			const { show } = action.payload;
			state.showDetails = show;
		},
		setJobApplication: (state, action) => {
			state.jobApplication = action.payload;
		},
		setJobs: (state, action) => {
			state.jobInfo = action.payload;
		},
		setJob: (state, action) => {
			state.jobDetails = action.payload;
		},
		setErrors: (state, action) => {
			state.errors = action.payload;
		},
		setFilters: (state, action) => {
			state.filterInfo = action.payload;
		},
		setSuccessApplication: (state, action) => {
			if (action.payload.status) {
				const jobId = action.payload.application.jobId;
				const tmpArr = state.jobInfo.content?.map((elem) => {
					if (elem._id === jobId) {
						elem.applied = true;
						return elem;
					}
					return elem;
				});
				state.jobInfo.content = tmpArr;
			}
			state.succesApplication = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
