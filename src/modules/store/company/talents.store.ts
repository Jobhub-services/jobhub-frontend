import { ITalentState } from '@/models/store/company/talents.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITalentState = {
	isLoading: false,
	filterClosed: true,
	showTalents: {
		size: 0,
		pages: 0,
		count: 0,
		content: [
			{
				_id: '629ceef81068328d62d6ac21',
				avatar: '/src/assets/icons/women.jpg',
				role: {
					primary_role: 'Lead Android/IOS developer',
				},
				user: {
					fullName: 'Margurerite Burns Margurerite Burns',
				},
				address: { country: 'United State', city: 'Los Angeles, CA' },
				status: 'ready',
				summary: 'I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018.',
				skills: ['ReactJs', 'PHP', 'Laravel'],
			},
		],
	},
	talentDetails: {
		_id: '629ceef81068328d62d6ac218',
		avatar: '/src/assets/icons/women.jpg',
		role: {
			other_roles: ['Backend developer', 'Project Manager', 'Frontend Lead', 'CTO & Co-Founder'],
			primary_role: 'Lead Android/IOS developer',
			experience: '5 Years of experience',
		},
		user: {
			email: 'itachibatna@gmail.com',
			fullName: 'Margurerite Burns',
		},
		salary: '8000',
		currency: 'USD',
		address: { country: 'USA', city: 'Los Angeles, CA' },
		status: 'open',
		summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
					of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.`,
		skills: ['ReactJs', 'PHP', 'Laravel', 'Mongo DB'],
		work_experience: [
			{
				title: 'Senior frontend developer',
				job_type: 'Part time',
				company_name: 'Google',
				location: 'Los Angeles',
				startDate: '2022-06-08T18:24:52.790Z',
				endDate: '2022-06-08T18:24:52.790Z',
				description:
					"The course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
			},
			{
				title: 'Senior frontend developer',
				job_type: 'Full time',
				company_name: 'Google',
				location: 'Los Angeles',
				startDate: '2022-06-08T18:24:52.790Z',
				endDate: '2022-06-08T18:24:52.790Z',
				description:
					"The course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
			},
		],
		educations: [
			{
				title: 'Master in computer science',
				school: 'Hight School of Computer Science',
				startDate: '2022-06-08T18:24:52.790Z',
				endDate: '2022-06-08T18:24:52.790Z',
			},
			{
				title: 'Master in computer science',
				school: 'Hight School of Computer Science',
				startDate: '2022-06-08T18:24:52.790Z',
				endDate: '2022-06-08T18:24:52.790Z',
			},
		],
		certifications: [
			{
				title: 'Building Web Applications in PHP',
				issuedDate: '2022-06-08T18:24:52.790Z',
				expirationDate: '2022-06-08T18:24:52.790Z',
				provider: 'Coursera',
				description:
					"the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
				link: 'http://www.google.com',
				certificationId: 'sdflkmsdmfk',
			},
			{
				title: 'Frontend developer',
				issuedDate: '2022-06-08T18:24:52.790Z',
				expirationDate: '2022-06-08T18:24:52.790Z',
				provider: 'Coursera',
				description:
					"the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
				link: 'http://www.google.com/sdfksmdlfks',
			},
		],
		wants: `Having a say in team/company direction,
			Opportunities to progress,
			A flexible remote work policy,
			Quiet office,
			Company with clear roles`,
		languages: [
			{
				language: 'English',
				level: 'Conversational',
			},
			{
				language: 'French',
				level: 'Intermediate',
			},
		],
		desired_location: ['Russia', 'Norway', 'USA', 'Singapor', 'Austria'],
		other_job_type: ['Part time', 'Full time', 'Permanent', 'Temporary'],
		social_profile: {
			linkedin: 'https://linkedin.com/jerom',
			git: 'https://gitlab.com/jerom',
			website: 'https://google.com/jerom',
			twitter: 'https://twitter.com/jerom',
			phone: '+44 230 659 236',
		},

		resume: 'https://google.com',
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
