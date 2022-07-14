import { createSlice } from '@reduxjs/toolkit';
import { IApplicationsState } from '@/models/store/company/applications.interface';
import Jerome from '@/assets/icons/jerome.jpg';

const initialState: IApplicationsState = {
	isLoading: false,
	isDetailLoading: false,
	filterClosed: true,
	applicantsByJobs: {
		size: 0,
		pages: 0,
		count: 0,
		content: [
			{
				jobId: '1',
				title: 'Senior Forntend developer',
				category: 'Inofrmation Technology',
				applicants: [
					{
						_id: '1',
						img: `${Jerome}`,
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: 'new',
					},
					{
						_id: '2',
						img: '/src/assets/icons/women.jpg',
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: 'new',
					},
				],
			},
			{
				jobId: '2',
				title: 'Humain resource administrator',
				category: 'Humain resource',
				applicants: [
					{
						_id: '1',
						img: '/src/assets/icons/women.jpg',
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: 'new',
					},
					{
						_id: '2',
						img: `${Jerome}`,
						name: 'Jerome Bell',
						role: 'Full stack developer',
						experience_duration: '4 Years of experience',
						cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
						skils: [
							{ value: 'reatcjs', label: 'React Js' },
							{ value: 'php', label: 'PHP' },
							{ value: 'laravel', label: 'Laravel' },
						],
						applied: 'April 12. 2022',
						linkedIn: 'https://linkedin.com',
						applicationStatus: 'new',
					},
				],
			},
			{
				jobId: '2',
				title: 'Humain resource administrator',
				category: 'Humain resource',
				applicants: [],
			},
		],
	},
	showApplicants: {
		size: 0,
		pages: 0,
		count: 0,
		content: [
			{
				_id: '1',
				img: `${Jerome}`,
				name: 'Jerome Bell',
				role: 'Full stack developer',
				experience_duration: '4 Years of experience',
				cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
				skils: [
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				],
				applied: 'April 12. 2022',
				linkedIn: 'https://linkedin.com',
				applicationStatus: 'new',
				job: {
					title: 'Senior frontend developer',
				},
			},
			{
				_id: '1',
				img: `${Jerome}`,
				name: 'Jerome Bell',
				role: 'Full stack developer',
				experience_duration: '4 Years of experience',
				cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
				skils: [
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				],
				applied: 'April 12. 2022',
				linkedIn: 'https://linkedin.com',
				applicationStatus: 'new',
				job: {
					title: 'Senior frontend developer',
				},
			},
			{
				_id: '1',
				img: `${Jerome}`,
				name: 'Jerome Bell',
				role: 'Full stack developer',
				experience_duration: '4 Years of experience',
				cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
				skils: [
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				],
				applied: 'April 12. 2022',
				linkedIn: 'https://linkedin.com',
				applicationStatus: 'new',
				job: {
					title: 'Senior frontend developer',
				},
			},
			{
				_id: '1',
				img: `${Jerome}`,
				name: 'Jerome Bell',
				role: 'Full stack developer',
				experience_duration: '4 Years of experience',
				cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
				skils: [
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				],
				applied: 'April 12. 2022',
				linkedIn: 'https://linkedin.com',
				applicationStatus: 'new',
				job: {
					title: 'Senior frontend developer',
				},
			},
			{
				_id: '1',
				img: `${Jerome}`,
				name: 'Jerome Bell',
				role: 'Full stack developer',
				experience_duration: '4 Years of experience',
				cover_letter: `I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
							applications for many France companies.`,
				skils: [
					{ value: 'reatcjs', label: 'React Js' },
					{ value: 'php', label: 'PHP' },
					{ value: 'laravel', label: 'Laravel' },
				],
				applied: 'April 12. 2022',
				linkedIn: 'https://linkedin.com',
				applicationStatus: 'new',
				job: {
					title: 'Senior frontend developer',
				},
			},
		],
	},
	filter: {
		country: [],
		applicantRole: [],
		skills: [],
	},
	applicantDetails: {
		_id: '1',
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
			if (state.applicantDetails._id === applicantId) state.applicantDetails.applicationStatus = status;
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
