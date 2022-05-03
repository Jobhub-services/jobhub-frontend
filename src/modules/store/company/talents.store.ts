import { ITalentState } from '@/models/store/company/talents.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITalentState = {
	isLoading: false,
	filterClosed: true,
	showTalents: {
		total: 0,
		pages: 0,
		currentPage: 0,
		talents: [
			{
				talentId: '1',
				img: '/src/assets/icons/women.jpg',
				main_role: 'Lead Android/IOS developer',
				name: 'Margurerite Burns',
				address: { country: 'United State', city: 'Los Angeles, CA' },
				status: 'ready',
				professional_summary: 'I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018.',
				skills: ['ReactJs', 'PHP', 'Laravel'],
			},
			{
				talentId: '2',
				img: '/src/assets/icons/jerome.jpg',
				main_role: 'Lead Android/IOS developer',
				name: 'Margurerite Burns',
				address: { country: 'USA', city: 'Los Angeles, CA' },
				status: 'closed',
				professional_summary: 'I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018.',
				skills: ['ReactJs', 'PHP', 'Laravel'],
			},
			{
				talentId: '3',
				img: '/src/assets/icons/women.jpg',
				main_role: 'Lead Android/IOS developer',
				name: 'Margurerite Burns',
				address: { country: 'USA', city: 'Los Angeles, CA' },
				status: 'ready',
				professional_summary: 'I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018.',
				skills: ['ReactJs', 'PHP', 'Laravel'],
			},
			{
				talentId: '4',
				img: '/src/assets/icons/jerome.jpg',
				main_role: 'Lead Android/IOS developer',
				name: 'Margurerite Burns',
				address: { country: 'USA', city: 'Los Angeles, CA' },
				status: 'open',
				professional_summary: 'I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018.',
				skills: ['ReactJs', 'PHP', 'Laravel'],
			},
		],
	},
	talentDetails: {
		talentId: '1',
		img: '/src/assets/icons/women.jpg',
		main_role: 'Lead Android/IOS developer',
		name: 'Margurerite Burns',
		address: { country: 'USA', city: 'Los Angeles, CA' },
		status: 'open',
		professional_summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
					of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.`,
		skills: ['ReactJs', 'PHP', 'Laravel', 'Mongo DB'],
		experience: '4 Years of experience',
		work_experience: [
			{
				title: 'Senior frontend developer',
				job_type: 'Part-time',
				company: 'Google',
				location: 'Los Angeles',
				startDate: new Date(2019, 4, 17),
				endDate: new Date(2020, 7, 18),
				description:
					"The course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
			},
		],
		educations: [
			{
				degree: 'Master in computer science',
				school: 'Hight School of Computer Science',
				startDate: new Date(2017, 1, 12),
				endDate: new Date(2022, 12, 12),
			},
		],
		certifications: [
			{
				title: 'Building Web Applications in PHP',
				date: new Date(2017, 1, 12),
				provider: 'Coursera',
				description:
					"the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
				link: 'http://www.google.com',
			},
			{
				title: 'Frontend developer',
				date: new Date(2017, 1, 12),
				provider: 'Coursera',
				description:
					"the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP",
				link: 'http://www.google.com',
			},
		],
		preferences: [
			'Having a say in team/company direction',
			'Opportunities to progress',
			'A flexible remote work policy',
			'Quiet office',
			'Company with clear roles',
		],
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
		roles: ['Backend developer', 'Project Manager', 'Frontend Lead', 'CTO & Co-Founder'],
		desired_location: ['Russia', 'Norway', 'USA', 'Singapor', 'Austria'],
		other_types: ['Part-time', 'Full-time', 'Permanent', 'Temporary'],
		email: 'jerom@gmail.com',
		linkedin: 'https://linkedin.com/jerom',
		git: 'https://gitlab.com/jerom',
		website: 'https://google.com/jerom',
		twitter: 'https://twitter.com/jerom',
		phone: '+44 230 659 236',
		resume: 'https://google.com',
	},
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
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setTalentDetails: (state, action) => {
			state.talentDetails = action.payload;
		},
		setTalents: (state, action) => {
			state.showTalents = action.payload;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
