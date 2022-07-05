import { createSlice } from '@reduxjs/toolkit';
import { IJobsState } from '@/models/store/developer/jobs.interface';

const initialState: IJobsState = {
	filterClosed: true,
	isLoading: false,
	isDetailLoading: false,
	showDetails: false,
	jobInfo: {
		content: [],
		size: 0,
		count: 0,
		pages: 1,
	},
	jobDetails: {
		_id: '',
		title: '',
		createdBy: {},
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
};
const reducerSlice = createSlice({
	name: 'developerJobs',
	initialState,
	reducers: {
		closeFilter: (state, action) => {
			const { closed } = action.payload;
			state.filterClosed = closed;
		},
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setIsDetailLoading: (state, action) => {
			const { loading } = action.payload;
			state.isDetailLoading = loading;
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
