import { createSlice } from '@reduxjs/toolkit';
import { IApplicationsState } from '@/models/store/company/applications.interface';

const initialState: IApplicationsState = {
	isLoading: false,
	filterClosed: true,
	applicantsByJobs: {
		total: 0,
		pages: 0,
		currentPage: 0,
		applicants: [],
	},
	showApplicants: {
		total: 0,
		pages: 0,
		currentPage: 0,
		applicants: [],
	},
	filter: {
		jobTitle: '',
		country: [],
		occupationType: '',
		applicationDate: [null, null],
		applicantRole: [],
		skills: [],
	},
	applicantDetails: {
		applicantId: '1',
		applicationStatus: 'new',
		img: '/src/assets/icons/jerome.jpg',
		name: 'Jerome Bell',
		role: 'Fullstack developer',
		experience_duration: '4 Years of experience',
		cover_letter: '',
		skils: [],
		linkedIn: '',
		github: '',
		cv: '',
		applied: '',
		email: '',
		phone: '',
		website: '',
		start_working: null,
		notice_period: '',
		questions: [],
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
		job: {
			title: 'Product Manager',
			category: 'Humain resource administration ',
			applied: new Date('22 March 2022'),
		},
	},
};

const reducerSlices = createSlice({
	name: 'applications',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
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
			const currentTotal = state.showApplicants.applicants.length;
			if (state.applicantDetails.applicantId === applicantId) state.applicantDetails.applicationStatus = status;
			state.showApplicants.applicants = state.showApplicants.applicants.filter((elem) => elem.applicantId !== applicantId);
			state.showApplicants.total = state.showApplicants.total! + currentTotal - state.showApplicants.applicants.length;
		},
		setApplicantDetails: (state, action) => {
			state.applicantDetails = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
