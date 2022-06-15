import { createSlice } from '@reduxjs/toolkit';
import { IJobsState } from '@/models/store/developer/jobs.interface';

const initialState: IJobsState = {
	filterClosed: true,
	isLoading: false,
	showDetails: false,
	jobDetails: {
		id: '',
		title: 'Senior Full Stack Engineer for Energy Industry Digital Studio (Ruby on Rails in Only EUropa)',
		createdAt: '2022-06-12T20:20:20',
		company_name: 'google',
		currency: {
			id: '',
			name: '',
			code: 'USD',
		},
		start_salary: '120000',
		end_salary: '2000000',
		salary_type: 'Annualy',
		responsabilities: `Discuss, analyse, and understand new feature requirements with tech-lead and the Product/Program Manager.
Learn about Cardano, UTXO, EUTXO Design Patterns, and others.
Develop, Deploy and Test APIs for dApps, Tools and Libraries.
Maintain and implement new Yoroi features.
Implement caching strategies and work closely with our DevOps to improve availability and future demand.
Participate in product meetings.`,
		description: `Bellawatt builds nimble and user-friendly software products for some of the leading energy companies including PG&E, Sunrun, and the DOE. The energy industry is undergoing massive changes and our clients are increasingly using modern software to help solve their biggest challenges and unlock new opportunities.

We typically build web-based applications such as ev.pge.com, and on occasion take on other types of energy software projects we find interesting and/or challenging. A recent example is building IOT backend infrastructure for V2G.

We believe in creating impact quickly: we call this making nimble software. We have been a remote company from well before the pandemic, and believe that high quality software requires designated time for deep work. As a result we lean heavily on written communication and try our best to limit senseless meetings. When we do collaborate, we prefer to pair to tackle the trickier problems of our industry. You can read more about our philosophies at bellawatt.com/work.

We choose tools that empower even single developers to make a big impact. We prefer to participate in vibrant ecosystems that will be around for many years, such as Ruby on Rails and React (our default stack). At the same time, we occasionally leverage Python and have also dabbled in Node.js and TypeScript. We encourage playing around with just about anything that you find interesting, though we are cautious about what we use in production.`,
		benefits: `Health, dental, and vision insurance

			• Voluntary life insurance

			• Paid maternity/paternity leave

			• Unlimited PTO

			• Sick leave as needed

			• 401(k) plan
`,
		skills: ['reactjs', 'php', 'java', 'marketing', 'project manager'],
		work_location: { country: 'Germany', city: 'Berlin' },
		//hire_remotly: true,
		category: 'Software engineer',
		job_type: 'Full time',
		duration: 'Permanent',
		duration_range: ['2022-06-13', '2022-09-13'],
		hire_location: [
			{ country: 'France', city: 'Paris' },
			{ country: 'South africa', city: 'Berlin of africa' },
			{ country: 'France', city: 'Paris' },
			{ country: 'Germany', city: 'Berlin' },
		],
		requirements: `5+ years of proven work experience in software quality assurance
Good knowledge of software QA methodologies, tools and processes
Demonstrated experience of JavaScript language
TypeScript experience
Demonstrated experience in test automation using Cypress
Strong experience with CSS/HTML, WordPress and similar CMS
Experience with API testing
Experience managing, tracking and organizing software tests using a test case management tool: TestRail, Qase or similar
Experience with GitHub & command line
Proven debugging and troubleshooting skills in web, mobile and WordPress environments
Experience in writing clear, comprehensive test plans, test cases and bug reports
Goal driven and product-oriented mindset
Ability to work independently and also as a reliable team-worker`,
		education: ['Bachelor degree in natural science', 'Master in computer science'],
		certification: ['Google cloud certification', 'Data analysis and deep learning IBM certification'],
		questions: [
			{
				_id: '1',
				name: 'What is your motivation to join Cara Care?',
			},
			{
				_id: '2',
				name: 'What are the ost relevant projetc you have worked on?',
			},
			{
				_id: '3',
				name: 'You are fluent in German at mother tongue level and in spoken and written English.',
			},
		],
	},
	jobApplication: {
		resume: '',
		questions: [],
		notice_period: undefined,
		start_date: undefined,
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
		setShowDetails: (state, action) => {
			const { show } = action.payload;
			state.showDetails = show;
		},
		setJobApplication: (state, action) => {
			state.jobApplication = action.payload;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
