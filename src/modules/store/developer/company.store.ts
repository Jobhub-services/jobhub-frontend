import { createSlice } from '@reduxjs/toolkit';
import { ICompanyState } from '@/models/store/developer/companies.interface';
import Google from '@/assets/icons/google.jpg';
import Facebook from '@/assets/icons/facebook.png';
import Amazon from '@/assets/icons/a.png';

const initialState: ICompanyState = {
	isLoading: false,
	companyDetail: {
		overview: {
			_id: '1',
			keywords: [
				'Php',
				'Information technology',
				'Health',
				'Fitness',
				'Php',
				'Information technology',
				'Health',
				'Fitness',
				'Php',
				'Information technology',
				'Health',
				'Fitness',
				'Php',
				'Information technology',
				'Health',
				'Fitness',
			],
			headquarter: { country: 'USA', city: 'California', street: '1600 street of old company' },
			generalinfo: {
				company_size: '1 - 10 Employee',
				founded: '2015-02-20T23:20:10',
				industry: 'Health, wellness & fitness',
			},
			social_profile: {
				website: 'https://www.company.org',
				facebook: 'https://www.facebook.com/company',
				twitter: 'https://www.twitter.com/company',
				linkedin: 'https://www.linkedin.com/company',
			},
			description: `DataArt is a global software engineering firm that takes a uniquely human approach to solving problems. 

DataArt has earned the trust of some of the world’s leading brands and most discerning clients, including Nasdaq, Travelport, Ocado, Centrica/Hive, Paddy Power Betfair, IWG, Univision, Meetup and Apple Leisure Group among others. 


DATAART IN NUMBERS

4000+ professionals.
23 years in operation.
22 offices in the USA, Europe, and Latin America.
11 countries.
<10 % attrition rate.
31% women.
Glassdoor review score — 4.8.
Team satisfaction survey 2020

95 % of our team members are ready to recommend us as a good employer to their friends.
92 % of our team members are ready to spend 2+ more years of their career with us.
75 % are satisfied with their total deal with DataArt.`,
		},
		jobs: {
			content: [
				{
					_id: '1',
					title: 'Remote Platform Database Administrator',
					category: 'Software Engineering',
					job_type: 'Full time',
					duration: 'Permanent',
					avatar: Google,
					createdAt: '2022-06-19T18:20:00',
					createdBy: {
						companyName: 'Google',
					},
					work_location: { country: 'Antigua and Barbuda', city: 'Antigua and' },
					hire_location: [
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'France', city: 'Paris' },
					],
					start_salary: '130000',
					end_salary: '200000',
					currency: { code: 'USD' },
					salary_type: 'Annually',
					featured: true,
					saved: true,
				},
				{
					_id: '1',
					title: 'Remote Platform Database Administrator',
					category: 'Software Engineering',
					job_type: 'Full time',
					duration: 'Permanent',
					avatar: Facebook,
					createdAt: '2022-06-12T20:20:00',
					createdBy: {
						companyName: 'Google',
					},
					work_location: { country: 'Antigua and Barbuda', city: 'Antigua and' },
					hire_location: [
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'France', city: 'Paris' },
					],
					start_salary: '130000',
					end_salary: '200000',
					currency: { code: 'USD' },
					salary_type: 'Annually',
					featured: false,
					saved: true,
				},
				{
					_id: '1',
					title: 'Remote Platform Database Administrator',
					category: 'Software Engineering',
					job_type: 'Full time',
					duration: 'Permanent',
					avatar: Amazon,
					createdAt: '2022-06-12T20:20:00',
					createdBy: {
						companyName: 'Google',
					},
					work_location: { country: 'Antigua and Barbuda', city: 'Antigua and' },
					hire_location: [
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'France', city: 'Paris' },
					],
					start_salary: '130000',
					end_salary: '200000',
					currency: { code: 'USD' },
					salary_type: 'Annually',
					featured: false,
					saved: false,
				},
				{
					_id: '1',
					title: 'Remote Platform Database Administrator',
					category: 'Software Engineering',
					job_type: 'Full time',
					duration: 'Permanent',
					avatar: Amazon,
					createdAt: '2022-06-12T20:20:00',
					createdBy: {
						companyName: 'Google',
					},
					work_location: { country: 'Antigua and Barbuda', city: 'Antigua and' },
					hire_location: [
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'France', city: 'Paris' },
					],
					start_salary: '130000',
					end_salary: '200000',
					currency: { code: 'USD' },
					salary_type: 'Annually',
					hire_remotly: true,
					featured: true,
					saved: false,
				},
				{
					_id: '1',
					title: 'Remote Platform Database Administrator',
					category: 'Software Engineering',
					job_type: 'Full time',
					duration: 'Permanent',
					avatar: Amazon,
					createdAt: '2022-06-12T20:20:00',
					createdBy: {
						companyName: 'Google',
					},
					work_location: { country: 'Antigua and Barbuda', city: 'Antigua and' },
					hire_location: [
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'Germany', city: 'Berlin' },
						{ country: 'France', city: 'Paris' },
					],
					start_salary: '130000',
					end_salary: '200000',
					currency: { code: 'USD' },
					salary_type: 'Annually',
					hire_remotly: true,
					featured: true,
					saved: false,
					applied: true,
				},
			],
			size: 3,
			count: 3,
		},
	},
};
const reducerSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
