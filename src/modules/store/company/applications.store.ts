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
		content: [],
	},
	showApplicants: {
		size: 0,
		pages: 0,
		count: 0,
		content: [],
	},
	filter: {
		country: [],
		applicantRole: [],
		skills: [],
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
		interviews: [
			{
				title: 'HR interview',
				location: 'remote',
				status: 'Pending',
				endDate: new Date(2022, 2, 10, 12, 12, 12),
				startDate: new Date(2022, 2, 2, 12, 12, 12),
				link: 'http://www.google.com',
				note: 'this interview is for consulting the technical skills of the candidates',
			},
			{
				title: 'Technical interview',
				location: 'remote',
				status: 'Finished',
				endDate: new Date(2022, 2, 10, 12, 12, 12),
				startDate: new Date(2022, 2, 2, 12, 12, 12),
				link: 'http://www.google.com/sdfksdfj sdfkjsdfkl sdfdskjfdskjlf sdkfjdsfjlskdfj sdfjsldkjfdlskfjlsdkfj sdfjdslfjdsklfjdslkfjlksdjflksdjfsdfjldskjfldksjflsdjflsdkjfldsjflskdjflkdsjflksdjflkjsdlk',
				note: 'this interview is for consulting the technical skills of the candidates',
			},
			{
				title: 'Interview with the CEO',
				location: 'remote',
				status: 'On Progress',
				endDate: new Date(2022, 2, 10, 12, 12, 12),
				startDate: new Date(2022, 2, 2, 12, 12, 12),
				link: 'http://www.google.com',
				note: 'this interview is for consulting the technical skills of the candidates',
			},
			{
				title: 'Interview with the CEO',
				location: 'remote',
				status: 'On Progress',
				endDate: new Date(2022, 2, 10, 12, 12, 12),
				startDate: new Date(2022, 2, 2, 12, 12, 12),
				link: 'http://www.google.com',
				note: 'this interview is for consulting the technical skills of the candidates',
			},
		],
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
			state.applicantsByJobs = action.payload;
		},
		setShowApplicants: (state, action) => {
			state.showApplicants = action.payload;
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		setApplicationStatus: (state, action) => {
			const { status, applicantId } = action.payload;
			const currentTotal = state.showApplicants.content.length;
			if (state.applicantDetails._id === applicantId) state.applicantDetails.status = status;
			state.showApplicants.content = state.showApplicants.content.filter((elem) => elem._id !== applicantId);
			state.showApplicants.size = state.showApplicants.size! + currentTotal - state.showApplicants.content.length;
		},
		setApplicantDetails: (state, action) => {
			state.applicantDetails = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
