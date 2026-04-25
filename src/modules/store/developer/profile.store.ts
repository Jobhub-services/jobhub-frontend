import { createSlice } from '@reduxjs/toolkit';
import { IProfileState } from '@/models/store/developer/profile.interface';

const initialState: IProfileState = {
	isLoading: false,
	profile: {
		summary: '',
		languages: [],
		skills: [],
		role: {
			experience: '',
			primary_role: {
				_id: '',
				name: '',
			},
			other_roles: [],
		},
		work_experience: [],
		educations: [],
		certifications: [],
		social_profile: {
			website: '',
			git: '',
			linkedin: '',
			twitter: '',
		},
		resume: 'https://www.google.com/map',
		address: {
			country: {
				_id: null,
				name: '',
			},
			city: '',
		},
		status: 'ready',
		desired_location: [],
		salary: '',
		currency: {
			_id: '',
			code: '',
			name: '',
		},
		wants: '',
		job_type: '',
		other_job_type: [],
	},
};

const reducerSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading } = action.payload;
			state.isLoading = loading;
		},
		setProfile: (state, action) => {
			state.profile = action.payload;
		},
		setAttribute: (state, action) => {
			const { attr, data } = action.payload;
			state.profile[attr as 'languages' | 'skills' | 'summary'] = data;
		},
		setLanguages: (state, action) => {
			state.profile.languages = action.payload;
		},
		removeLanguage: (state, action) => {
			state.profile.languages = action.payload;
		},
		setSummary: (state, action) => {},
	},
});

export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
